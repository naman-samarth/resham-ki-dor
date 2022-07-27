const BASE_URL = "https://wa.me/";
const TEXT_QUERY_PARAM = "?text=";

const ORDER_ID_PREFIX = "OrderID: ";
const TIMESTAMP_PREFIX = "\nTimestamp: ";
const NAME_PREFIX = "\nName: ";
const PHONE_PREFIX = "\nPhone: ";
const ITEMS_PREFIX = "\n\nItems: ";
const PRICE_PREFIX = "\n\nTotal Price: ₹ ";

export const generateLink = (
  sellerPhone,
  name,
  source,
  totalQuantity,
  items,
  pricePerPiece
) => {
  const orderId = getUniqueOrderId();
  const timestamp = new Date().toString();
  const sellerPhoneWithCode = "91" + sellerPhone;
  return encodeURI(
    BASE_URL +
      sellerPhoneWithCode +
      TEXT_QUERY_PARAM +
      ORDER_ID_PREFIX +
      orderId +
      TIMESTAMP_PREFIX +
      timestamp +
      NAME_PREFIX +
      name +
      PHONE_PREFIX +
      source +
      ITEMS_PREFIX +
      getItemsString(items) +
      PRICE_PREFIX +
      totalQuantity * pricePerPiece
  );
};

const getItemsString = (items) => {
  let itemsString = "";
  Object.keys(items).forEach((key) => {
    if (items[key] > 0) {
      itemsString += `\n${key} -- ${items[key]}`;
    }
  });
  return itemsString;
};

const getUniqueOrderId = () => new Date().valueOf().toString(36);

export const validatePhone = (value) => {
  if (!validateFormValue(value)) return false;
  return /^\d{10}$/.test(value);
};

export const validateFormValue = (value) => {
  if (value === "undefined" || value == null || value === "") return false;
  return true;
};
