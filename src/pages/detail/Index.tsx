import { LaptopOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Col, MenuProps, message, Row, Typography } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Image1 from "../../assets/image/Rectangle (3).png";
import Image2 from "../../assets/image/Rectangle (4).png";
import Image3 from "../../assets/image/Rectangle (5).png";
import Image4 from "../../assets/image/Rectangle (6).png";

const { Text, Title } = Typography;

import Card from "antd/lib/card/Card";
import LogoImage from "../../assets/image/Rectangle2.png";
import { StarOutlined } from "@ant-design/icons";
import { ProductType } from "../../types/ProductType";
import { productID } from "../../api/product";
import { useDispatch } from "react-redux";


const style: React.CSSProperties = {
  background: "#ffffff",
  padding: "25px 0",
};
const styles: React.CSSProperties = {
  background: "#FFA3A3",
  padding: "10px 0",
  color: "#ffffff",
};




const DetailPage = () => {
 
  const [product, setProduct] = useState<ProductType>();
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await productID(id as string);
      setProduct(data);
      console.log(data);
      
    };
    getProduct();
  }, );

  const dispatch = useDispatch();
  const addToCart = (item: any) => {
    dispatch({
      type: "cart/add",
      payload: { ...item, amount: 1 },
    });
    message.success("Thêm vào giỏ hàng thành công!");
  };

  return (
    <>
      <Container>
        <div>
          <Ul1>
            <Li1>
              <a href=""></a>Điện thoại{" "}
            </Li1>
            <Li1>
              <a href=""></a>Máy Tính
            </Li1>
            <Li1>
              <a href=""></a>Sam Sung
            </Li1>
          </Ul1>
        </div>
        <hr />
        <div>
          <h3>{product?.name}</h3>
        </div>
        <hr />

        <div>
          <Row>
            <Col span={10}>
              <Dv2>
                <div>
                  <Ima src={product?.img} />
                </div>
                <div>
                  
                </div>
              </Dv2>
            </Col>
            <Col span={14}>
              <div>
                <Row>
                  <Col span={7}>
                    <Title level={2} type="danger">
                    {product?.saleOffPrice.toLocaleString()} đ
                    </Title>
                  </Col>
                  <Col span={4}>
                    <Text><Spann>{product?.originalPrice.toLocaleString()}đ</Spann> </Text>
                  </Col>
                </Row>
              </div>
              <div>
                <Text>
                <span dangerouslySetInnerHTML={{__html: product?. feature}}></span>
                </Text>
              </div>

              <Dv3 onClick={() => addToCart(product)} >
                <Row>
                  <Col span={10}>
                    <Bot >Mua Ngay</Bot>
                  </Col>
                  <Col span={4}>
                    <Bot1>
                      <ShoppingCartOutlined />
                    </Bot1>
                  </Col>
                </Row>
              </Dv3>
            </Col>
          </Row>
        </div>
        {/* ---------------------------------------------------- */}

        <div>
          <Section>
            <h2>Sản phẩm liên quan</h2>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={6} style={style}>
                <div>
                  <Card
                    hoverable
                    cover={<Image alt="example" src={Image1} />}
                  >
                    <Title level={5}>Samsung Galaxy S22 Untra </Title>
                    <Row>
                      <Col span={12}>
                        <Text type="danger">10.790.000 ₫</Text>
                      </Col>
                      <Col span={12}>
                        <Text type="secondary">18.000.000 ₫</Text>
                      </Col>
                    </Row>
                    <Borders>
                      <Text>
                        [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá
                        lên tới 1.000.000đ
                      </Text>{" "}
                    </Borders>
                    <br />
                    <Row>
                      <Col span={12}>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                      </Col>
                      <Col span={12}>
                        <Text type="secondary">72 đánh giá</Text>
                      </Col>
                    </Row>
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={6} style={style}>
                <div>
                  <Card
                    hoverable
                    cover={<Image alt="example" src={Image2} />}
                  >
                    <Title level={5}>iPhone 11 64GB I Chính hãng VN/A</Title>
                    <Row>
                      <Col span={12}>
                        <Text type="danger">10.790.000 ₫</Text>
                      </Col>
                      <Col span={12}>
                        <Text type="secondary">18.000.000 ₫</Text>
                      </Col>
                    </Row>
                    <Borders>
                      <Text>
                        [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá
                        lên tới 1.000.000đ
                      </Text>{" "}
                    </Borders>
                    <br />
                    <Row>
                      <Col span={12}>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                      </Col>
                      <Col span={12}>
                        <Text type="secondary">72 đánh giá</Text>
                      </Col>
                    </Row>
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={6} style={style}>
                <div>
                  <Card
                    hoverable
                    cover={<Image alt="example" src={Image3} />}
                  >
                    <Title level={5}>Xiaomi Redmi Note 11</Title>
                    <Row>
                      <Col span={12}>
                        <Text type="danger">10.790.000 ₫</Text>
                      </Col>
                      <Col span={12}>
                        <Text type="secondary">18.000.000 ₫</Text>
                      </Col>
                    </Row>
                    <Borders>
                      <Text>
                        [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá
                        lên tới 1.000.000đ
                      </Text>{" "}
                    </Borders>
                    <br />
                    <Row>
                      <Col span={12}>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                      </Col>
                      <Col span={12}>
                        <Text type="secondary">72 đánh giá</Text>
                      </Col>
                    </Row>
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={6} style={style}>
                <div>
                  <Card
                    hoverable
                    cover={<Image alt="example" src={Image4} />}
                  >
                    <Title level={5}>iPhone 13 64GB Pro Max</Title>
                    <Row>
                      <Col span={12}>
                        <Text type="danger">10.790.000 ₫</Text>
                      </Col>
                      <Col span={12}>
                        <Text type="secondary">18.000.000 ₫</Text>
                      </Col>
                    </Row>
                    <Borders>
                      <Text>
                        [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá
                        lên tới 1.000.000đ
                      </Text>{" "}
                    </Borders>
                    <br />
                    <Row>
                      <Col span={12}>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                      </Col>
                      <Col span={12}>
                        <Text type="secondary">72 đánh giá</Text>
                      </Col>
                    </Row>
                  </Card>
                </div>
              </Col>
            </Row>
          </Section>
        </div>

        <div>
          <Div4>
            <H33>ĐẶC ĐIỂM NỔI BẬT</H33>
            <Text>
            <span dangerouslySetInnerHTML={{__html: product?.feature}}></span>

            </Text>{" "}
            <br />
           
            <br />
          </Div4>
          <Div5>
            <Text>
            <span dangerouslySetInnerHTML={{__html: product?.desc}}></span>

            </Text>
          </Div5>
          
          
         
          <Div6>
            <button>Xem thêm</button>
          </Div6>
        </div>
      </Container>
    </>
  );
};
const Spann = styled.span`
   font-size:20px;
   text-decoration: line-through;
 
`
const Ima = styled.img`
padding: 50px;
  height: 300px;
  width: 300px;
  left: 326px;
  top: 189px;
  border-radius: 0px;
`;
const Div6 = styled.div`
  padding: 5px 30px;
  border-radius: 5px;
  text-align: center;
`;
const Div5 = styled.div`
  padding-top: 20px;
  width: 1200px;
  margin: 0 auto;
  padding-left: 10px;
`;
const H33 = styled.h3`
  text-align: center;
  color: red;
`;
const Div4 = styled.div`
  border: 1px solid red;
  background: #f2f2f2;
  border-radius: 10px;
  padding-left: 20px;
`;
const Ul1 = styled.ul`
  text-decoration: none;
  list-style: none;
  display: flex;
  margin-left: 100px;
`;
const Li1 = styled.li`
  padding: 10px;
`;
const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;
const Img1 = styled.img`
  width: 50px;
  border: 1px solid red;
  border-radius: 5px;
`;
const Dv2 = styled.div`
  text-align: center;
`;
const Bot = styled.button`
  background-color: red;
  padding: 10px 100px 10px 100px;
  border-radius: 5px;
  border: red solid 1px;
  color: white;
`;

const Bot1 = styled.button`
  border: 1px solid red;
  width: 48px;
  height: 48px;
  color: red;
`;
const Dv3 = styled.button`
  position: absolute;
  bottom: 0px;
  width: 100%;
  border: none;
  background-color: #ffffff;
`;

// ----------------------------------------------------------------

const Image = styled.img`
  height: 160px;
  width: 160px;
  left: 92px;
  top: 585px;
  border-radius: 0px;
  margin: auto;
  margin-top: 20px;
`;
const Section = styled.div`
  /* background-color: #eddddd; */
  max-width: 1505px;
  margin: auto;
`;
const Borders = styled.div`
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
`;

export default DetailPage;
