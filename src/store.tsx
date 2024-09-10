import { makeAutoObservable } from "mobx";
import axios from "axios";

interface Product {
  
  name: string;

}

class ProductStore {
  products: Product[] = [];
  searchTerm: string = "";
  filteredProducts: Product[] = [];

  constructor() {
    makeAutoObservable(this);
    this.fetchProducts();
  }

  setSearchTerm(value: string) {
    this.searchTerm = value;
    this.filterProducts();
  }

   filterProducts() {
    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  async fetchProducts() {
    try {
      const { data } = await axios.get<Product[]>("https://de473e9291cac187.mokky.dev/dex");
      this.products = data;
      this.filterProducts();
    } catch (error) {
      console.error( error);
    }
  }
}

export const productStore = new ProductStore();