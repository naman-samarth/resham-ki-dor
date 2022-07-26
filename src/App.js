import { useCallback, useEffect, useState } from "react";
import ProductGrid from "./components/ProductGrid";
import { Navbar } from "./components/Navbar";
import { Cart } from "./components/Cart";
import ModalForm from "./components/ModalForm";
import { generateLink } from "./utils/utils";

const PRODUCTS_SIZE = process.env.REACT_APP_PRODUCTS_SIZE;
const DEST_PHONE_NUMBER = process.env.REACT_APP_PHONE_NUMBER;
const PRICE_PER_ITEM = process.env.REACT_APP_PRICE_PER_ITEM;
const TOTAL_LIMIT = process.env.REACT_APP_TOTAL_LIMIT;

let ids = Array.apply(0, Array(parseInt(PRODUCTS_SIZE)));
ids = ids.map((_, index) => 101 + index);

function App() {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [items, setItems] = useState({});
  const [showModal, setShowModal] = useState(false);

  const updateItem = useCallback((id, quantity) => {
    setItems((prevItems) => {
      return {
        ...prevItems,
        [id]: quantity,
      };
    });
  }, []);

  const onPressConfirm = ({ name, phone }) => {
    console.log(
      generateLink(
        DEST_PHONE_NUMBER,
        name,
        phone,
        totalQuantity,
        items,
        PRICE_PER_ITEM
      )
    );
  };

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
        <ProductGrid
          ids={ids}
          pricePerItem={PRICE_PER_ITEM}
          updateItem={updateItem}
        />
      </div>
      {totalQuantity > 0 && (
        <Cart
          totalQuantity={totalQuantity}
          pricePerItem={PRICE_PER_ITEM}
          onPressConfirm={() => setShowModal(true)}
        />
      )}
      {showModal && (
        <ModalForm
          onPressConfirm={onPressConfirm}
          totalQuantity={totalQuantity}
          totalPrice={totalQuantity * parseInt(PRICE_PER_ITEM)}
        />
      )}
    </>
  );
}

export default App;
