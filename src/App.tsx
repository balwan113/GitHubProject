// App.tsx
import React from "react";
import { observer } from "mobx-react-lite";
import { productStore } from "./store";

const App: React.FC = observer(() => {
  const { products } = productStore;

  return (
    <div>
      <h1>Список продуктов</h1>
      <ul>
        {products.length === 0 ? (
          <li>Загрузка...</li>
        ) : (
          products.map((product, index) => (
            <li key={index}>{product.name}</li>
          ))
        )}
      </ul>
    </div>
  );
});

export default App;
