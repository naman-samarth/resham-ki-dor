import { useCallback, useEffect, useState } from "react";
import ProductGrid from "./components/ProductGrid";
import { Navbar } from "./components/Navbar";
import { Cart } from "./components/Cart";
import ModalForm from "./components/ModalForm";
import { generateLink } from "./utils/utils";
import Modal from "react-modal";

const PRODUCTS_SIZE = process.env.REACT_APP_PRODUCTS_SIZE;
const DEST_PHONE_NUMBER = process.env.REACT_APP_PHONE_NUMBER;
const PRICE_PER_ITEM = process.env.REACT_APP_PRICE_PER_ITEM;
const TOTAL_LIMIT = process.env.REACT_APP_TOTAL_LIMIT;

let ids = Array.apply(0, Array(parseInt(PRODUCTS_SIZE)));
ids = ids.map((_, index) => 101 + index);

Modal.setAppElement("#root");

function App() {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [items, setItems] = useState({});
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  const updateItem = useCallback((id, quantity) => {
    setItems((prevItems) => {
      return {
        ...prevItems,
        [id]: quantity,
      };
    });
  }, []);

  const onPressConfirm = ({ name, phone }) => {
    window.open(
      generateLink(
        DEST_PHONE_NUMBER,
        name,
        phone,
        totalQuantity,
        items,
        PRICE_PER_ITEM
      ),
      "_blank"
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
      <div className="flex flex-col justify-center bg-red-100">
        <ProductGrid
          ids={ids}
          pricePerItem={PRICE_PER_ITEM}
          updateItem={updateItem}
          totalQuantity={totalQuantity}
        />
      </div>
      {totalQuantity > 0 && (
        <Cart
          totalQuantity={totalQuantity}
          onPressConfirm={() => setShowModal(true)}
          totalPrice={totalQuantity * parseInt(PRICE_PER_ITEM)}
        />
      )}
      <Modal
        className="absolute w-[80%] md:w-[35%] h-[50%] top-0 bottom-0 left-0 right-0 mx-auto my-auto bg-white text-gray-800 border border-gray-400 rounded p-5"
        isOpen={showModal}
        onRequestClose={closeModal}
      >
        <ModalForm
          onPressConfirm={onPressConfirm}
          totalQuantity={totalQuantity}
          totalPrice={totalQuantity * parseInt(PRICE_PER_ITEM)}
        />
      </Modal>
    </>
  );
}

export default App;
