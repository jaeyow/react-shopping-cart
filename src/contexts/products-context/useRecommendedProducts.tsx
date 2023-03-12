import { useCallback } from 'react'

import { useRecommendedProductsContext } from './RecommendedProductsContextProvider'
import { IRecommendedProduct } from 'models'
import { getProducts as getRecommendedProducts } from 'services/recommendedProducts'

const useRecommendedProducts = () => {
    const {
        isFetching,
        setIsFetching,
        products,
        setProducts,
    } = useRecommendedProductsContext()

    const fetchProducts = useCallback(() => {
        setIsFetching(true)
        getRecommendedProducts().then((products: IRecommendedProduct[]) => {
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

export default useRecommendedProducts
