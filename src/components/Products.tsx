import CardCustom from "./CardCustom.tsx";
import useProducts from "../zsm/stores/useProducts.ts";
import {useEffect} from "react";


const Products = () => {
    const productsStore = useProducts()

    useEffect(() => {
           productsStore.fetchProducts()
    }, [])


    return productsStore.loading ? <div>Loading...</div> : (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            padding: '1rem',
            margin: '1rem'

        }}>
            {productsStore.getProducts().map((product, index) => {
                    return (
                        <CardCustom key={index} product={product} />
                    )
                }
            )}
        </div>
    )
}

export default Products