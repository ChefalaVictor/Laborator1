import {Card} from 'antd';
import {DeleteOutlined, EllipsisOutlined} from "@ant-design/icons";
import useProducts, {TProduct} from "../zsm/stores/useProducts.ts";
import {Link} from "react-router-dom";

const {Meta} = Card;


interface ICardCustom {
    product: TProduct
}

const CardCustom = (props: ICardCustom) => {
    const productsStore = useProducts()
    const {product} = props;
    return (
        <Link to={`/products/${product.id}`}>
            <Card
                hoverable
                style={{width: 240}}
                cover={<img alt={product.title} src={product.thumbnail} />}
                actions={[
                    <DeleteOutlined key="delete" onClick={() => productsStore.deleteProductById(product.id)} />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}

            >
                <Meta title={product.title} description={product.description} />
            </Card>
        </Link>
    )
}

export default CardCustom