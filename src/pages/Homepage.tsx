import { CarryOutFilled, RightOutlined, StarOutlined } from "@ant-design/icons";
import {
  Card,
  Carousel,
  Col,
  Divider,
  Input,
  Layout,
  Menu,
  Row,
  Select,
  Space,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import LogoImage1 from "../assets/image/Rectangle2.png";
import { ProductType } from "../types/ProductType";
import { GetPrWithCategory, listProduct } from "../api/product";
import { Link } from "react-router-dom";
import HomeMenu from "../componets/Home/Menu";
//

import Banner1 from "../assets/images/banner1.png";
import Banner2 from "../assets/images/banner2.png";
import Banner3 from "../assets/images/banner3.png";
import Banner4 from "../assets/images/banner4.png";
import { CategoryType } from "../types/CategoryType";
import { Option } from "antd/lib/mentions";
import { listCategory } from "../api/category";

const { Text, Title } = Typography;

const style: React.CSSProperties = {
  background: "#ffffff",
  padding: "25px 0",
};
const styles: React.CSSProperties = {
  background: "#FFA3A3",
  padding: "10px 0",
  color: "#ffffff",
};

type Props = {};

const Homepage = (props: Props) => {

  

  const [category, setCategory] = useState<CategoryType[]>([]);
  const onFilerCategory = async (value: any) => {
    if (value === undefined) {
      const { data } = await listProduct();
      setProduct(data);
    } else {
      const { data } = await GetPrWithCategory(value);
      console.log(data);
      setProduct(data);
    }
  };
 
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  const [products, setProduct] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await listProduct();

      setProduct(data);
    };
    getProduct();
  }, []);

  return (
    <>
   
      <Container>
        <Row>
          <Col span={6}>
            <HomeMenu />
          </Col>
          <Col span={18}>
            <Carousel afterChange={onChange} autoplay>
              <Slider src={Banner1} />
              <Slider src={Banner2} />
              <Slider src={Banner3} />
              <Slider src={Banner4} />
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Section>
        <Divider orientation="left">??i???n tho???i n???i b???t</Divider>
        <Row gutter={[16, 24]}>
          {products?.map((product, index) => {
            return (
              <Col className="gutter-row" span={4} style={style}>
                <div>
                  <Card
                    hoverable
                    cover={<Image alt="example" src={product.img} />}
                  >
                    <Link to={`detail/${product.id}`}>
                      {" "}
                      <Title level={5}>{product.name}</Title>
                    </Link>
                    <Row>
                      <Col span={12}>
                        <Text type="danger">{product.saleOffPrice.toLocaleString()}??</Text>
                      </Col>
                      <Col span={12}>
                        <Text type="secondary">{product.originalPrice.toLocaleString()}??</Text>
                      </Col>
                    </Row>
                    <Borders>
                      <Text>[HOT]</Text>
                      {product.brief}
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
                        <Text type="secondary">72 ????nh gi??</Text>
                      </Col>
                    </Row>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Section>
      <Section>
        <Divider orientation="left"><h2>S???n ph???m n???i b???t </h2></Divider>
        <Dt>
          <Row gutter={[16, 24]}>
            <Col className="gutter-row" span={3}>
              <Bo style={{backgroundColor:'#17c3e6',padding: "10px 0",}}>
                <Text style={{color:'white'}}>72 ????nh gi??</Text>
                <br />
                <img alt="example" src={LogoImage1} />
              </Bo>
            </Col>
            <Col className="gutter-row" span={3}>
              <Bo style={{backgroundColor:'#D2691E',padding: "10px 0",}}>
                <Text style={{color:'white'}}>72 ????nh gi??</Text>
                <br />
                <img alt="example" src={LogoImage1} />
              </Bo>
            </Col>
            <Col className="gutter-row" span={3}>
              <Bo style={{backgroundColor:'#a8c163',padding: "10px 0",}}>
                <Text style={{color:'white'}}>72 ????nh gi??</Text>
                <br />
                <img alt="example" src={LogoImage1} />
              </Bo>
            </Col>
            <Col className="gutter-row" span={3}>
              <Bo style={{backgroundColor:'#e49546',padding: "10px 0",}}>
                <Text style={{color:'white'}}>72 ????nh gi??</Text>
                <br />
                <img alt="example" src={LogoImage1} />
              </Bo>
            </Col>
            <Col className="gutter-row" span={3}>
              <Bo style={{backgroundColor:'#F5DEB3',padding: "10px 0",}}>
                <Text style={{color:'white'}}>72 ????nh gi??</Text>
                <br />
                <img alt="example" src={LogoImage1} />
              </Bo>
            </Col>
            <Col className="gutter-row" span={3}>
              <Bo style={{backgroundColor:'#00BFFF',padding: "10px 0",}}>
                <Text style={{color:'white'}}>72 ????nh gi??</Text>
                <br />
                <img alt="example" src={LogoImage1} />
              </Bo>
            </Col>
            <Col className="gutter-row" span={3}>
              <Bo style={{backgroundColor:'#40E0D0',padding: "10px 0",}}>
                <Text style={{color:'white'}}>72 ????nh gi??</Text>
                <br />
                <img alt="example" src={LogoImage1} />
              </Bo>
            </Col>
            <Col className="gutter-row" span={3}>
              <Bo style={{backgroundColor:'#ADFF2F',padding: "10px 0",}}>
                <Text style={{color:'white'}}>72 ????nh gi??</Text>
                <br />
                <img alt="example" src={LogoImage1} />
              </Bo>
            </Col>
            <Col className="gutter-row" span={3}>
              <Bo style={{backgroundColor:'red',padding: "10px 0",}}>
                <Text style={{color:'white'}}>72 ????nh gi??</Text>
                <br />
                <img alt="example" src={LogoImage1} />
              </Bo>
            </Col>
            <Col className="gutter-row" span={3}>
              <Bo style={{backgroundColor:'#3af437',padding: "10px 0",}}>
                <Text style={{color:'white'}}>72 ????nh gi??</Text>
                <br />
                <img alt="example" src={LogoImage1} />
              </Bo>
            </Col>
            <Col className="gutter-row" span={3}>
              <Bo style={{backgroundColor:'#df258e',padding: "10px 0",}}>
                <Text style={{color:'white'}}>72 ????nh gi??</Text>
                <br />
                <img alt="example" src={LogoImage1} />
              </Bo>
            </Col>
            <Col className="gutter-row" span={3}>
              <Bo style={{backgroundColor:'#FF8C00',padding: "10px 0",}}>
                <Text style={{color:'white'}}>72 ????nh gi??</Text>
                <br />
                <img alt="example" src={LogoImage1} />
              </Bo>
            </Col>
            <Col className="gutter-row" span={3}>
              <Bo style={{backgroundColor:'#F08080',padding: "10px 0",}}>
                <Text style={{color:'white'}}>72 ????nh gi??</Text>
                <br />
                <img alt="example" src={LogoImage1} />
              </Bo>
            </Col>
            <Col className="gutter-row" span={3}>
              <Bo style={{backgroundColor:'#BA55D3',padding: "10px 0",}}>
                <Text style={{color:'white'}}>72 ????nh gi??</Text>
                <br />
                <img alt="example" src={LogoImage1} />
              </Bo>
            </Col>
            <Col className="gutter-row" span={3}>
              <Bo style={{backgroundColor:'#FF69B4',padding: "10px 0",}}>
                <Text style={{color:'white'}}>72 ????nh gi??</Text>
                <br />
                <img alt="example" src={LogoImage1} />
              </Bo>
            </Col>
          </Row>
        </Dt>
        <Divider orientation="left"><h2>Ph??? ki???n ??i???n tho???i </h2></Divider>
        <Dt>
          <Row gutter={[16, 24]}>
          <Col className="gutter-row" span={3}>
              <Bo style={{backgroundColor:'#960af4',padding: "10px 0",}}>
                <Text style={{color:'white'}}>72 ????nh gi??</Text>
                <br />
                <img alt="example" src={LogoImage1} />
              </Bo>
            </Col>
            <Col className="gutter-row" span={3}>
              <Bo style={{backgroundColor:'#ecb860',padding: "10px 0",}}>
                <Text style={{color:'white'}}>72 ????nh gi??</Text>
                <br />
                <img alt="example" src={LogoImage1} />
              </Bo>
            </Col>
            <Col className="gutter-row" span={3}>
              <Bo style={{backgroundColor:'#d84b9b',padding: "10px 0",}}>
                <Text style={{color:'white'}}>72 ????nh gi??</Text>
                <br />
                <img alt="example" src={LogoImage1} />
              </Bo>
            </Col>
            <Col className="gutter-row" span={3}>
              <Bo style={{backgroundColor:'#14e88f',padding: "10px 0",}}>
                <Text style={{color:'white'}}>72 ????nh gi??</Text>
                <br />
                <img alt="example" src={LogoImage1} />
              </Bo>
            </Col>
            <Col className="gutter-row" span={3}>
              <Bo style={{backgroundColor:'#15a7c8',padding: "10px 0",}}>
                <Text style={{color:'white'}}>72 ????nh gi??</Text>
                <br />
                <img alt="example" src={LogoImage1} />
              </Bo>
            </Col>
            <Col className="gutter-row" span={3}>
              <Bo style={{backgroundColor:'#dd2e5f',padding: "10px 0",}}>
                <Text style={{color:'white'}}>72 ????nh gi??</Text>
                <br />
                <img alt="example" src={LogoImage1} />
              </Bo>
            </Col>
            <Col className="gutter-row" span={3}>
              <Bo style={{backgroundColor:'#17b762',padding: "10px 0",}}>
                <Text style={{color:'white'}}>72 ????nh gi??</Text>
                <br />
                <img alt="example" src={LogoImage1} />
              </Bo>
            </Col>
            <Col className="gutter-row" span={3}>
              <Bo style={{backgroundColor:'#e25e17',padding: "10px 0",}}>
                <Text style={{color:'white'}}>72 ????nh gi??</Text>
                <br />
                <img alt="example" src={LogoImage1} />
              </Bo>
            </Col>
          </Row>
        </Dt>
      </Section>
    </>
  );
};

const BannerAndCategory = styled(Layout)`
  /* margin: 20px 290px; */
`;
const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Category = styled(Layout.Sider)`
  background-color: #fff;
`;

const MenuC = styled(Menu)`
  .ant-menu-item {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;

    color: #343a40;
  }
`;
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
const Dt = styled.div`
  width: 1150px;
  margin: auto;
`;
const Bo = styled.div`
  border-radius: 10px;
  text-align: center;
  line-height: 1.8;
`;
const Slider = styled.img`
  /* height: 300px;
  color: '#fff',;
	text-align: center;
	background-color: #364d79; */
`;

export default Homepage;
