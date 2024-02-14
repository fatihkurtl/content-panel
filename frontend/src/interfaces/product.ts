export interface ProductCreate {
    name: string,
    brand: string,
    price: number
    category: string,
    weight: number,
    stock: number,
    color: string,
    images: File[],
    description: string
}

export interface ImagePreview {
    url: string,
    name: string
  }