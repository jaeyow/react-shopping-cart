import { createContext, useContext, useState } from 'react'

import { IRecommendedProduct } from 'models'

export type IRecommendedProductsContext = {
    isFetching: boolean;
    setIsFetching(state: boolean): void;
    products: IRecommendedProduct[];
    setProducts(products: IRecommendedProduct[]): void;
}

const RecommendedProductsContext = createContext<IRecommendedProductsContext | undefined>(undefined)
const useRecommendedProductsContext = (): IRecommendedProductsContext => {
    const context = useContext(RecommendedProductsContext)

    if (!context) {
        throw new Error(
            'useRecommendedProductsContext must be used within a RecommendedProductsProvider'
        )
    }

    return context
}

type Props = {
    children?: React.ReactNode;
}

const RecommendedProductsContextProvider = (props: Props) => {
    const [isFetching, setIsFetching] = useState(false)
    const [products, setProducts] = useState<IRecommendedProduct[]>([])

    const ProductContextValue: IRecommendedProductsContext = {
        isFetching,
        setIsFetching,
        products,
        setProducts,
    }

    return <RecommendedProductsContext.Provider value={ProductContextValue} {...props} />
}

export { RecommendedProductsContextProvider, useRecommendedProductsContext }
