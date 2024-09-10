import { makeAutoObservable } from "mobx";
import axios from "axios";

interface Product {
  name: string;
}

class ProductStore {
  products: Product[] = [];
  searchTerm: string = "";

  constructor() {
    makeAutoObservable(this);
    this.fetchProducts();
  }

  setSearchTerm(value: string) {
    this.searchTerm = value;
  }

  get filteredProducts() {
    return this.products.filter((product) =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  async fetchProducts() {
    try {
      const { data } = await axios.get<Product[]>("https://de473e9291cac187.mokky.dev/dex");
      this.products = data;
    } catch (e) {
      console.error(e);
    }
  }
}

export const productStore = new ProductStore();
