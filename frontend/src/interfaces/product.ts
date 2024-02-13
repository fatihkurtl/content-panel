export interface ProductCreate {
    name: string | null,
    brand: string | null,
    price: number | null,
    category: string,
    weight: number | null,
    stock: number,
    images: File[],
    description: string | null
}