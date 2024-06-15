type Category = {
    id: string;
    name: string;
    photo?: string;
}

type Product = {
    id: string;
    name: string;
    photo: string;
    desc?: string;
    createdAt: string;
    oldPrice?: number;
    price: number;
    category: Category;
}

type Operation = 'Cost' | 'Profit';

interface Cost extends Product {
    type: 'Cost';
    createdAt: string;
    amount: number;

  }

interface Profit extends Product {
    type: 'Profit';
    createdAt: string;
    amount: number;
}

export const createRandomProduct = (createdAt: string): Product => {};

export const createRandomOperation = (createdAt: string): Operation => {};
