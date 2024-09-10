import { makeAutoObservable } from "mobx"
import axios from "axios"

import { IProduct } from "../interfaces/IProduct"


class ProductStore {

  constructor() {
    makeAutoObservable(this)
    this.fetchProducts()
  }

  products: IProduct[] = []
  searchTerm: string = ""
  loading = false

  setSearchTerm = (value: string) => {
    this.searchTerm = value
    console.log(`Rendered with searchTerm: ${this.searchTerm}`)
  }

  get filteredProducts() {
    return this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    )
  }

  fetchProducts = async () => {
    this.setLoading(true)
    try {
      const { data } = await axios.get<IProduct[]>("https://de473e9291cac187.mokky.dev/dex")
      this.setProducts(data)
    } catch (e) {
      throw e
    }
    finally {
      this.setLoading(false)
    }
  }


  setProducts = (products: IProduct[]) => this.products = products
  setLoading = (state: boolean) => this.loading = state
}

export default new ProductStore()