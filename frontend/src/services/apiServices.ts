import useApi from "@/utils/api"
class ApiService {
  protected __route = "/products"
  
  async getAll(limit: number = 20, skip: number): Promise<any> {
    
    try {
      const response = await useApi.get(`${this.__route}?limit=${limit}&skip=${skip}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      return response
    } catch (error: any) {
      throw new Error(error)
    }
  }

  async getById(id: number): Promise<any> {
    try {
      const response = await useApi.get(`${this.__route}/${id}`, {
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
