import {Card} from "antd";
import useProducts, {TProduct} from "../zsm/stores/useProducts.ts";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";


const {Meta} = Card;

const Product = () => {
    const productsStore = useProducts()
    let params = useParams();


    const [product, setProduct] = useState<TProduct | null>(null)


    useEffect(() => {
        if (params.id) {
            const prod = productsStore.getProductById(Number(params.id))
            setProduct(prod)

        }
    }, [params.id]);

    return (
        <Card
            hoverable
            style={{width: 540, height: 'auto'}}
            cover={<img alt="example" src={product?.thumbnail} />}
        >
            <Meta title={product?.title} description={product?.description} />
        </Card>
    )
}

export default Product