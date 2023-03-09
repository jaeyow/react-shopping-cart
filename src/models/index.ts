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
