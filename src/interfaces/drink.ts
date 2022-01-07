interface IDrink{
    name: string;
    img: string;
    brand: string;
    capacity: number;
    price: object;
    quantity: number;
    description: string;
    comments: object[];
    views: number;
    createdAt: Date;
}

export default IDrink;