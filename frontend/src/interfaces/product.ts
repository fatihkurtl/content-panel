export interface ProductCreate {
    name: string | null,
    brand: string | null,
    price: number | null,
    category: string,
    weight: number | null,
    stock: number,
    color: string,
    images: File[],
    description: string | null
}

export interface ImagePreview {
    url: string,
    name: string
  }