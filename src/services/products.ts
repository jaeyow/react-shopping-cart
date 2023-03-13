import axios from 'axios'
import { IGetProductsResponse, IProduct } from 'models'

const isProduction = process.env.NODE_ENV === 'production'

export const getProducts = async (filters?: string[]) => {
    let response: IGetProductsResponse

    if (isProduction) {
        response = await axios.get(
            'https://react-shopping-cart-67954.firebaseio.com/products.json'
        )
    } else {
        response = require('static/json/products.json')
    }

    const { products } = response.data || []

    return filters && filters.length > 0 ? filterProducts(products, filters): products
}

const filterProducts = (products: IProduct[], filters: string[]) => {
    let filteredProducts

    if (filters && filters.length > 0) {
        filteredProducts = products.filter((p: IProduct) =>
            filters.find((filter: string) =>
                p.availableSizes.find((size: string) => size === filter)
            )
        )
    } else {
        filteredProducts = products
    }
    return filteredProducts
}
