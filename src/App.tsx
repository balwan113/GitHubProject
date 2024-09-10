import React from "react";
import { observer } from "mobx-react-lite";
import { productStore } from "./store";

const App: React.FC = observer(() => {
  const { filteredProducts, searchTerm, setSearchTerm } = productStore;

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  console.log("Rendered with searchTerm:", searchTerm); // Отладочный вывод

  return (
    <div>
      <h1>Поиск товаров</h1>
      <input
        type="text"
        placeholder="Введите название товара"
        value={searchTerm}
        onChange={onSearchChange}
      />
      <ul>
        {filteredProducts.map((product) => (
          <li >
            {product.name} 
          </li>
        ))}
      </ul>
    </div>
  );
});

export default App; 