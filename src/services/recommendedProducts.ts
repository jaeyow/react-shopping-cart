import axios from 'axios'
import { IGetRecommendedProductsResponse } from 'models'

const isProduction = process.env.NODE_ENV === 'production'

export const getProducts = async () => {
    let response: IGetRecommendedProductsResponse

    if (isProduction) {
        response = await axios.get(
            'https://react-shopping-cart-67954.firebaseio.com/recommended-products.json'
        )
    } else {
        response = require('static/json/recommended-products.json')
    }

    const { products } = response.data || []

    return products
}
