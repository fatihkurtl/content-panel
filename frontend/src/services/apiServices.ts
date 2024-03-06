import useApi from "@/utils/api"

class ApiService {
  protected __route = "/products"
  async get(id?: number): Promise<any> {
    try {
      const response = await useApi.get(id ? `${this.__route}/${id}` : this.__route, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      return response
    } catch (error: any) {
      throw new Error(error)
    }
  }
}

export default ApiService
