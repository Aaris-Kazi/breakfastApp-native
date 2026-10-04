
export type ProductProps = {
    id: string;
    name: string;
    price: number;
    image: string;
};

export type CategoryCardProps = {
    id: string;
    name: string;
    image: string;
};

export type AppStackParamList = {
    Splash: undefined;
    home: undefined;
    ProductDetails: {
        product: ProductProps;
    };
};

export type ProductCardProps = {
    product: ProductProps;
    onAdd?: (product: ProductProps) => void;
    onFavorite?: (product: ProductProps) => void;
    onPress?: (product: ProductProps) => void;
};
