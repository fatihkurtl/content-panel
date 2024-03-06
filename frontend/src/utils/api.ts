import axios from 'axios'

const useApi = axios.create({
    baseURL: 'https://dummyjson.com' || import.meta.env.VITE_BASE_URL
  })

export default useApi