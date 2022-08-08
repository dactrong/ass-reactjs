import { Col, Row, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import LogoImage from "../../assets/image/Rectangle.png";
import { StarOutlined, CloseOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { InputNumber } from "antd";
import cartSlice from "./cartSlice.js";
import { LeftOutlined } from "@ant-design/icons";
const { Text, Title } = Typography;

const Cart1 = () => {
  const { cart } = useSelector((store) => store);
  const dispatch = useDispatch();
  const increase = (id: string) => {
    dispatch(cartSlice.actions.increase(id));
  };
  const decrease = (id: string) => {
    dispatch(cartSlice.actions.decrease(id));
  };
  const remove = (id: string) => {
    dispatch(cartSlice.actions.remove(id));
  };
  return (
    <>
      <Container>
        <div>
          <Row>
            <Col span={8}>
              {" "}
              <Link to="/"> Trở về</Link>
            </Col>
            <Col span={8}> Giỏ hàng</Col>
          </Row>

          {cart.cart?.map((item: any) => {
            return (
              <Div5>
                <Row>
                  <Col span={12}>
                    <Im src={item.img} alt="" width="200px" />
                  </Col>

                  <Col span={12}>
                    <div>
                      <Row>
                        <Col span={18}>
                          <h4>{item.name}</h4>
                        </Col>
                        <Col span={6}>
                          <Btt onClick={() => remove(item.id)}>x</Btt>
                        </Col>
                      </Row>
                    </div>
                    <Div1>
                      <Row>
                        <Col span={6}>
                          <P1>
                            {(
                              item.originalPrice - item.saleOffPrice
                            ).toLocaleString()}{" "}
                            đ
                          </P1>
                        </Col>
                        <Col span={6}>
                          <p>{item.originalPrice.toLocaleString()} đ</p>
                        </Col>
                        <Col span={6}>
                          <P2>Giảm 27%</P2>
                        </Col>
                      </Row>
                    </Div1>
                    <Div3>
                      <Row>
                        <Col span={8}>Chọn số lượng :</Col>
                        <Col span={10}>
                          <Bttt
                            className="click-1"
                            onClick={() => decrease(item.id)}
                          >
                            -
                          </Bttt>
                          <Inn disabled type="text" value={item.amount} />
                          <Bttt
                            className="click-2"
                            onClick={() => increase(item.id)}
                          >
                            +
                          </Bttt>
                        </Col>
                      </Row>
                    </Div3>
                    <Div2>
                      <p>- Chương trình khuyến mại:</p>
                      <Text>
                        {item.desc}
                      </Text>
                    </Div2>
                  </Col>
                </Row>
                <hr />
              </Div5>
            );
          })}

          <div>
            <Row>
              <Col span={19}>
                <p>Tổng tiền tam tính : </p>
              </Col>
              <Col>
                <Text type="danger">{cart.total.toLocaleString()}</Text>
              </Col>
            </Row>
          </div>
          <Div6>
            <Bt6>Tiến hành đặt hàng</Bt6>
          </Div6>
          <Div6>
            <Link to="/">
              <Bt7>Chọn thêm sản phẩm khác</Bt7>
            </Link>
          </Div6>
        </div>
      </Container>
    </>
  );
};
const Bttt = styled.button`
  border: none;
  background-color: white;
`;
const Inn = styled.input`
  width: 30px;
  border: none;
`;
const Btt = styled.button`
  background-color: white;
  border: none;
  font-size: 20px;
  font-weight: bold;
`;
const Bt7 = styled.button`
  padding: 5px 165px;
  color: red;
  border: 1px solid red;
  margin-top: 10px;
`;
const Div6 = styled.div`
  text-align: center;
`;
const Bt6 = styled.button`
  background-color: red;
  padding: 5px 187px;
  color: white;
`;
const Div5 = styled.div`
  padding-top: 20px;
`;
const Im = styled.img`
  padding-left: 20px;
`;
const In = styled.input`
  width: 50px;
`;
const Div3 = styled.div`
  font-size: 10px;
`;
const Div2 = styled.div`
  background-color: #f6f6f6;
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
  font-size: 10px;
`;
const P2 = styled.p`
  color: white;
  background: red;
  border-radius: 5px;
  text-align: center;
`;
const P1 = styled.p`
  color: red;
  font-weight: bold;
`;
const Div1 = styled.div`
  font-size: 10px;
`;
const Container = styled.div`
  max-width: 500px;
  margin: auto;
  border: 1px solid red;
  margin-top: 20px;
`;

export default Cart1;
