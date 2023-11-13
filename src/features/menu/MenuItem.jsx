import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ item }) {
  const { itemId, name, unitPrice, imageUrl, ingredients, soldOut } = item;

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

          <Button type="small">Add to cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
