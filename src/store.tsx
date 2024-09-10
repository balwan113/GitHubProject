// store.ts
import { makeAutoObservable } from "mobx";
import axios from "axios";

interface Product {
  name: string;
}

class ProductStore {
  products: Product[] = [];

  constructor() {
    makeAutoObservable(this);
    this.fetchProducts();
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
