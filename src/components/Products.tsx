import CardCustom from "./CardCustom.tsx";
import {useEffect, useState} from "react";


export interface IProduct {
    brand: string;
    category: string
    description: string
    discountPercentage: number
    id: number
    images: string[]
    price: number
    rating: number
    stock: number
    thumbnail: string
    title: string

}

const Products = () => {

    const [products, setProducts] = useState<IProduct[]>([])


    const fetchProducts = () => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => setProducts(data.products));
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            padding: '1rem',
            margin: '1rem'
        
        }}>
            {products.map((product, index) => {
                    return (
                        <CardCustom key={index} product={product} />
                    )
                }
            )}
        </div>
    )
}

export default Products