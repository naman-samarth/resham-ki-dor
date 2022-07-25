import { useCallback, useEffect, useState } from "react";
import ProductGrid from "./components/ProductGrid";
import { Navbar } from "./components/Navbar";
import { Cart } from './components/Cart'

const ids = [
  "1001",
  "1002",
  "1003",
  "1004",
  "1005",
  "1006",
  "1007",
  "1008",
  "1009",
  "1010",
];

function App() {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [items, setItems] = useState({});

  const updateItem = useCallback((id, quantity) => {
      setItems((prevItems) => {
        return {
          ...prevItems,
          [id]: quantity,
        };
      });
  }, []);

  useEffect(() => {
    let total = 0;
    Object.keys(items).forEach((key) => {
      total += Number(items[key]);
    });
    setTotalQuantity(total);

  }, [items]);

  console.log(totalQuantity, items)
  return (
    <>
    <Navbar/>
    <div className="flex flex-col justify-center bg-gray-100">
      <ProductGrid ids={ids} updateItem={updateItem} />    
    </div>
    { totalQuantity > 0 && <Cart totalQuantity={totalQuantity}/> }
    </>
  );
}

export default App;
