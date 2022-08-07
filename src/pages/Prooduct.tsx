import { List, Select, Space, Typography } from "antd";
import { Option } from "antd/lib/mentions";
import React, { useEffect, useState } from "react";
import { listCategory } from "../api/category";
import { GetPrWithCategory, listProduct } from "../api/product";
import { CategoryType } from "../types/CategoryType";
import { ProductType } from "../types/ProductType";

type Props = {
  
};

const Prooduct = ({}: Props) => {

  const [products, setProduct] = useState<ProductType[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await listProduct();
      setProduct(data);
    };
    const getCategories = async () => {
      const { data } = await listCategory();
      setCategory(data);
      console.log(data);
    };
    getCategories();
    getProducts();
  }, []);
  

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
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await listProduct();

      setProduct(data);
    };
    getProduct();
  }, []);
  return (
    <>
     <Space>
        <Select
          placeholder="Danh mục cần tìm kiếm"
          onChange={onFilerCategory}
          allowClear={true}
        >
          {category.map((item, index) => {
            return (
              <Option value={item.id} key={index}>
                {item.name}
              </Option>
              
            );
          })}
        </Select>


        
      </Space>
      <h3 className="mb-5">Product List</h3>
      <div className="d-flex">
        {products?.map((product, index) => (
          <div
            className="card mx-2 p-3 d-flex justify-content-center w-25"
            key={product.id}
          >
            <div>
              <img
                className="card-img-top"
                src={product.img}
                alt="Card image cap"
                style={{ width: "120px" }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <h6>
                <span>{product.saleOffPrice}</span> VND
              </h6>
              <a
                href="#"
                className="btn btn-primary"
               
              >
                Add To Card
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Prooduct;
