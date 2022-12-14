import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../../assets/images/logo.png";
import AutoComplete from "../Input/Autocomplete";
import ImageLogo from "../../assets/images/vitri.png";
import ImageLogo2 from "../../assets/images/oto.png";
import ImageLogo3 from "../../assets/images/cart.png";
const Header = () => {
  const a = JSON.parse(localStorage.getItem("user") as string);
  const handleClick = (event: React.MouseEvent<HTMLElement>, text: string) => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <Logo src={LogoImage} />
        </Link>
        <AutoComplete />
        <Sdt>
          <div>Gói mua hàng</div>
          <div>18002097</div>
        </Sdt>
        <Vitri>
          <div>
            <Image2 src={ImageLogo} />
          </div>
          <div>
            Cửa hàng <br />
            gần bạn
          </div>
        </Vitri>

        <Vitri>
          <div>
            <Image3 src={ImageLogo2} />
          </div>
          <div>
            Tra cứu <br />
            đơn hàng
          </div>
        </Vitri>
        <Vitri>
          <div>
            <Image2 src={ImageLogo3} />
          </div>
          <Link  to={`/cart`} >
            <P1> Giỏ hàng</P1>
          </Link>
        </Vitri>

        {a == null ? (
          <div>
            <Div33 >
             
             
                  <Link
                    className="dropdown-item text-sm font-normal"
                    to={`/signin`}
                  >
                    <P1>Đăng nhập</P1>
                  </Link>
                
                  <Link
                    className="dropdown-item text-sm font-normal"
                    to={`/signup`}
                  >
                   <P1>Đăng kí</P1>
                  </Link>
                
            </Div33>
          </div>
        ) : (
          <div>
            <Div33 className="dropdown">
            
             
               
                  {a.user.role == 1 ? (
                    <div className="py-1">
                      <NavLink
                        to="/admin"
                        tabIndex={1}
                        className="dropdown-item text-sm font-normal"
                        role="menuitem"
                      >
                         <P1>Admin</P1>
                      </NavLink>
                    </div>
                  ) : (
                    <div></div>
                  )}
                
              
                  <Btt2
                    value="1"
                    tabIndex={3}
                    className="dropdown-item text-sm font-normal"
                    role="menuitem"
                    id="logout"
                    onClick={(e) => handleClick(e, "clicked")}
                  >
                    Đăng xuất
                  </Btt2>
               
              
            </Div33>
          </div>
        )}
      </Container>
    </Wrapper>
  );
};

export default Header;

const P1 = styled.div`
  color: white;
  padding-right: 10px;
`

const Div33 = styled.div`
  display: flex;
 
`
const Btt2 = styled.button`
   border: none;
   color:white;
   background-color:red;
`

const Logo = styled.img`
  width: 65px;
  height: auto;
  margin-right: 40px;
`;

const Wrapper = styled.div`
  background-color: #d70018;
`;

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  color: white;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
`;
const Image = styled.img`
  width: 65px;
  height: auto;
  margin-right: 40px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const Image2 = styled.img`
  width: 15px;
  height: auto;
  margin-right: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const Image3 = styled.img`
  width: 25px;
  height: auto;
  margin-right: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const Sdt = styled.div`
  font-size: 12px;
  color: white;
`;
const Vitri = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
