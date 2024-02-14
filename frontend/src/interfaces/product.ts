export interface ProductCreate {
    name: string,
    brand: string,
    price: number,
    quantity: number,
    category: string,
    weight: number,
    stock: number,
    status: boolean,
    color: string,
    images: File[],
    description: string
}

export interface ImagePreview {
    url: string,
    name: string
  }