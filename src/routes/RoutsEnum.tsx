import {
    HomeOutlined, ProductOutlined
} from "@ant-design/icons"
import MainPage from "../components/MainPage.tsx";
import Products from "../components/Products.tsx";
import Product from "../components/Product.tsx";


export enum PathEnum {
    Main = '/',
    Products = '/products',
    Product = '/products/:id',
}


const RoutesCustom = [{
    id: '1',
    path: PathEnum.Main,
    title: 'Main',
    element: <MainPage />,
    icon: <HomeOutlined />,
    exact: true,
    hideLink: false
}, {
    id: '2',
    path: PathEnum.Products,
    element:  <Products  />,
    title: 'Products',
    icon: <ProductOutlined />,
    exact: true,
    hideLink: false

}, {
    id: '3',
    path: PathEnum.Product,
    icon: null,
    title: 'Product',
    element: <Product />,
    exact: true,
    hideLink: true
}]


export default RoutesCustom;