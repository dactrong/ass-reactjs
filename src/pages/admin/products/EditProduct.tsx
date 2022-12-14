import { InboxOutlined, PlusSquareOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Col,
  Form,
  Input,
  InputNumber,
  PageHeader,
  Row,
  Select,
  Upload,
  UploadFile,
  UploadProps,
} from "antd";
import Meta from "antd/lib/card/Meta";
import TextArea from "antd/lib/input/TextArea";
import { RcFile } from "antd/lib/upload";
import Dragger from "antd/lib/upload/Dragger";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import { listCategory } from "../../../api/category";
import { productID, updateProduct } from "../../../api/product";
import { CategoryType } from "../../../types/CategoryType";
import { onPreview, upload, validateFile } from "../../../utils/upload";
import TextEditor from "../../../componets/TextEditor";

type Props = {};

const EditProduct = (props: Props) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { Option } = Select;

  const [fileList, setfileList] = useState<UploadFile[] | any>([]);

  const [category, setCategory] = useState<CategoryType[]>([]);

  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await productID(id as string);
      form.setFieldsValue(data);
    };
    getProduct();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await listCategory();
      setCategory(data);
      console.log(data);
    };
    getCategories();
  }, []);

  const onFinish = async (values: any) => {
    const dataInput = {
      name: values.name,
      originalPrice: +values.originalPrice,
      saleOffPrice: +values.saleOffPrice,
      feature: values.feature,
      desc: values.desc,
      brief: values.brief,
      categoryId: values.categoryId,
      status: values.status,
      img: values.img,
    };

    const file = fileList[0];
    if (file) {
      dataInput.img = await upload(fileList[0]);
    }

    try {
      updateProduct(dataInput, id);
      toast.success("S???a th??nh c??ng");
      setTimeout(() => {
        navigate("/admin/products");
      }, 1000);
    } catch (error) {
      toast.error("S???a kh??ng th??nh c??ng");
    }
  };

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setfileList(newFileList);
  };

  return (
    <>
      <TitlePage>Ch???nh s???a ??i???n tho???i</TitlePage>
      <FormAdd layout="vertical" onFinish={onFinish} form={form}>
        <Row>
          <Col span={12}>
            <LeftContent>
              <Form.Item
                name="imgfile"
                // rules={[{ required: true, message: "H??y th??m 1 ???nh" }]}
              >
                <UploadImage
                  listType="picture"
                  multiple={false}
                  maxCount={1}
                  beforeUpload={validateFile}
                  onChange={onChange}
                  onPreview={onPreview}
                  fileList={fileList}
                >
                  <p className="ant-upload-drag-icon">
                    <PlusSquareOutlined />
                  </p>
                  <p>Th??m ???nh!</p>
                </UploadImage>
              </Form.Item>

              <Form.Item label="???nh" valuePropName="src" name="img">
                <img width={200} />
              </Form.Item>

              <Form.Item name="brief" label="M?? t??? ng???n">
                <TextArea rows={5} placeholder="M?? t??? ng???n : " />
              </Form.Item>
            </LeftContent>
          </Col>
          <Col span={12}>
            <InfoProduct>Th??ng tin s???n ph???m</InfoProduct>

            <Form.Item
              name="name"
              label="T??n s???n ph???m"
              rules={[{ required: true, message: "T??n kh??ng ???????c ????? tr???ng" }]}
            >
              <Input />
            </Form.Item>

            <DivLine>
              <Form.Item
                name="originalPrice"
                label="Gi?? g???c"
                style={{ display: "inline-block", width: "48%" }}
                rules={[
                  { required: true, message: "Price is required" },
                  {
                    pattern: new RegExp(/^[0-9]+$/),
                    message: "Price is not number",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="saleOffPrice"
                dependencies={["originalPrice"]}
                label="Gi?? khuy???n m???i"
                style={{ display: "inline-block", width: "48%" }}
                rules={[
                  {
                    pattern: new RegExp(/^[0-9]+$/),
                    message: "Price is not number",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (
                        !value ||
                        Number(getFieldValue("originalPrice")) <= Number(value)
                      ) {
                        return Promise.reject(
                          new Error("Gi?? khuy???n m???i ph???i nh??? h??n gi?? g???c")
                        );
                      }
                      return Promise.resolve();
                    },
                  }),
                ]}
              >
                <Input />
              </Form.Item>
            </DivLine>

            <Form.Item
              name="categoryId"
              label="Danh m???c"
              style={{ display: "inline-block", width: "48%" }}
              rules={[
                { required: true, message: "Vui l??ng ch???n danh m???c s???n ph???m" },
              ]}
            >
              <Select placeholder="Danh m???c s???n ph???m">
                {category.map((item, index) => {
                  return (
                    <Option value={item.id} key={index}>
                      {item.name}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>

            <Form.Item name="feature" label="?????c ??i???m n???i b???t">
            <TextEditor/>

            </Form.Item>

            <Form.Item name="desc" label="M?? t??? d??i">
            <TextEditor/>

            </Form.Item>

            <Form.Item>
              <BtnSubmit type="primary" htmlType="submit">
                S???a s???n ph???m
              </BtnSubmit>
            </Form.Item>
          </Col>
        </Row>
      </FormAdd>
      <ToastContainer />
    </>
  );
};

const TitlePage = styled.h3`
  font-size: 20px;
  color: #5f5e61;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 20px;
`;

const InfoProduct = styled.h3`
  font-size: 16px;
  color: #5f5e61;
  font-weight: 600;
  line-height: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e1e5eb;
`;

const FormAdd = styled(Form)`
  background-color: #fff;
  padding: 20px;
`;

const DivLine = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BtnSubmit = styled(Button)`
  width: 140px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
`;

const LeftContent = styled.div`
  padding: 20px;
`;

const UploadImage = styled(Dragger)`
  margin-top: 20px;
  padding: 20px;
  background: #fff !important;
  border-top: none !important;
  border-left: none !important;
  border-right: none !important;
  border-bottom: 1px solid #ccc !important;
  margin-bottom: 20px;
`;
export default EditProduct;
