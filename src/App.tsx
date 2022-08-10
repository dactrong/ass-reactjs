import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import ClientLayout from "./layouts/ClientLayout";
import Homepage from "./pages/Homepage";
import Prooduct from "./pages/Prooduct";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import AddProduct from "./pages/admin/products/AddProduct";
import Product from "./pages/admin/products/Product";
import "react-toastify/dist/ReactToastify.css";
import EditProduct from "./pages/admin/products/EditProduct";
import Category from "./pages/admin/category/Category";
import AddCategory from "./pages/admin/category/AddCategory";
import EditCategory from "./pages/admin/category/EditCategory";
import DetailPage from "./pages/detail/Index";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import CheckSignin from "./utils/CheckSigin";
import PrivateRouter from "./utils/PrivateRoute";
import { listProduct } from "./api/product";
import Cart from "./pages/Cart/Cart";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProduct = async () =>{
         const {data} = await  listProduct()

         setProducts(data)
    }
    getProduct()
},[])
  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<CheckSignin><Signin/></CheckSignin>}></Route>
        <Route path="/signup" element={<CheckSignin><Signup/></CheckSignin>}></Route>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/cart" element={<Cart/>}/>

          <Route path="products" element={<Prooduct  />} />
          <Route path="detail/:id" element={<DetailPage />} />
          {/* <Route path="detail/:id" element={<ProductDetail />} /> */}


        </Route>
        <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          {/* Product router */}
          <Route path="products">
            <Route index element={<Product />} />
            <Route path="add" element={<AddProduct />} />
            <Route path="edit/:id" element={<EditProduct />} />
          </Route>
          {/* Category router */}

          <Route path="categories">
            <Route index element={<Category />} />
            <Route path="add" element={<AddCategory />} />
            <Route path="edit/:id" element={<EditCategory />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
