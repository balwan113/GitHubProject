import React from "react"
import { observer } from "mobx-react-lite"

import productStore from "./shared/store/store"
import { IProduct } from "./shared/interfaces/IProduct"


const App: React.FC = observer(() => {

  const { filteredProducts, searchTerm, setSearchTerm, loading } = productStore

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }
  

  return (
    <div>
      <h1>Поиск товаров</h1>
      <input
        type="text"
        placeholder="Введите название товара"
        value={searchTerm}
        onChange={onSearchChange}
      />
      {
        loading 
        ?
        <p>Loading...</p>
        :
        <ul>
          {filteredProducts?.map((product: IProduct) => (
            <li key={product.name}>
              {product?.name} 
            </li>
          ))}
        </ul>
      }

    </div>
  )
})

export default App