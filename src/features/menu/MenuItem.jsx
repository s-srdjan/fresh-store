import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ item }) {
  const dispatch = useDispatch();
  const { itemId, name, unitPrice, imageUrl, ingredients, soldOut } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(itemId));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      itemId,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      {/* <img
        src={imageUrl}
        alt={name}
        className={`h-24 w-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      /> */}
      <div className="h-28 w-28 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className={`h-full w-full object-cover  ${
            soldOut ? "opacity-70 grayscale" : ""
          } `}
        />
      </div>

      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-600">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm font-medium">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity
                itemId={itemId}
                currentQuantity={currentQuantity}
              />
              <DeleteItem itemId={itemId} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
