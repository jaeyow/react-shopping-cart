import { useCallback } from 'react'

import { useTrendingProductsContext } from './TrendingProductsContextProvider'
import { ITrendingProduct } from 'models'
import { getProducts as getTrendingProducts } from 'services/trendingProducts'

const useTrendingProducts = () => {
    const {
        isFetching,
        setIsFetching,
        products,
        setProducts,
    } = useTrendingProductsContext()

    const fetchProducts = useCallback(() => {
        setIsFetching(true)
        getTrendingProducts().then((products: ITrendingProduct[]) => {
            setIsFetching(false)
            setProducts(products)
        })
    }, [setIsFetching, setProducts])

    return {
        isFetching,
        fetchProducts,
        products,
    }
}

export default useTrendingProducts
