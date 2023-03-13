import axios from 'axios'
import { IGetTrendingProductsResponse } from 'models'

const isProduction = process.env.NODE_ENV === 'production'

export const getProducts = async () => {
    let response: IGetTrendingProductsResponse

    if (isProduction) {
        response = await axios.get(
            'https://react-shopping-cart-67954.firebaseio.com/trending-products.json'
        )
    } else {
        response = require('static/json/trending-products.json')
    }

    const { products } = response.data || []

    return products
}
