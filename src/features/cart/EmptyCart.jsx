import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <p className="mt-7 font-medium">
        Your cart is still empty. Start adding fresh bakery. 🥐
      </p>
    </div>
  );
}

export default EmptyCart;
