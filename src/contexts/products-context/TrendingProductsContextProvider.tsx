import { createContext, useContext, useState } from 'react'

import { ITrendingProduct } from 'models'

export type ITrendingProductsContext = {
    isFetching: boolean;
    setIsFetching(state: boolean): void;
    products: ITrendingProduct[];
    setProducts(products: ITrendingProduct[]): void;
}

const TrendingProductsContext = createContext<ITrendingProductsContext | undefined>(undefined)
const useTrendingProductsContext = (): ITrendingProductsContext => {
    const context = useContext(TrendingProductsContext)

    if (!context) {
        throw new Error(
            'useTrendingProductsContext must be used within a TrendingProductsProvider'
        )
    }

    return context
}

type Props = {
    children?: React.ReactNode;
}

const TrendingProductsContextProvider = (props: Props) => {
    const [isFetching, setIsFetching] = useState(false)
    const [products, setProducts] = useState<ITrendingProduct[]>([])

    const ProductContextValue: ITrendingProductsContext = {
        isFetching,
        setIsFetching,
        products,
        setProducts,
    }

    return <TrendingProductsContext.Provider value={ProductContextValue} {...props} />
}

export { TrendingProductsContextProvider, useTrendingProductsContext }
