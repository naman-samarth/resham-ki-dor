import { useCallback, useEffect, useState } from "react";
import ProductGrid from "./components/ProductGrid";
import { Navbar } from "./components/Navbar";
import { Cart } from "./components/Cart";

const PRODUCTS_SIZE = process.env.REACT_APP_PRODUCTS_SIZE;

let ids = Array.apply(0, Array(parseInt(PRODUCTS_SIZE)));
ids = ids.map((value, index) => 101 + index);

function App() {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [name, setName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
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

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center bg-gray-100">
        <ProductGrid ids={ids} updateItem={updateItem} />
      </div>
      {totalQuantity > 0 && <Cart totalQuantity={totalQuantity} />}
    </>
  );
}

export default App;
