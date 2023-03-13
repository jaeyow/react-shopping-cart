export type IProduct = {
    id: number;
    sku: number;
    title: string;
    description: string;
    availableSizes: string[];
    style: string;
    price: number;
    installments: number;
    currencyId: string;
    currencyFormat: string;
    isFreeShipping: boolean;
}

export type ITrendingProduct = {
    order: number;
} & IProduct

export type IRecommendedProduct = {
    order: number;
} & IProduct

export type ICartProduct = {
    quantity: number;
} & IProduct

export type ICartTotal = {
    productQuantity: number;
    installments: number;
    totalPrice: number;
    currencyId: string;
    currencyFormat: string;
}

export type IGetProductsResponse = {
    data: {
        products: IProduct[];
    };
}

export type IGetTrendingProductsResponse = {
    data: {
        products: ITrendingProduct[];
    };
}

export type IGetRecommendedProductsResponse = {
    data: {
        products: IRecommendedProduct[];
    };
}
