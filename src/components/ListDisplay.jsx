import { useList } from "../contexts/listContext";
import ListItem from "./ListItem";

function ListDisplay() {
  const { toBuy, displayCart, dispatch } = useList();
  let items = toBuy.filter((el) => !el.isInCart);

  if (displayCart) {
    items = toBuy.filter((el) => el.isInCart);
  }

  if (items.length === 0) {
    return (
      <p className="text-sm italic">
        {!displayCart ? "Započni svoj popis!..." : "Tvoja košarica je prazna!"}{" "}
      </p>
    );
  }

  function handleEmptyCart() {
    const userAgrees = window.confirm("Jeste li sigurni?");
    if (!userAgrees) return;
    dispatch({ type: "list/clearAll" });
  }

  return (
    <>
      {" "}
      <div className="pb-3 flex justify-between items-center">
        <p className="text-sm italic">
          {!displayCart ? "Složi svoj popis!" : "Tvoja košarica!"}
        </p>
        <button
          onClick={handleEmptyCart}
          className="border-b cursor-pointer border-violet-500"
        >
          Isprazni
        </button>
      </div>
      <ul className="divide-y divide-violet-600 border-b border-violet-600  ">
        {items.map((item) => {
          return <ListItem key={item.id} item={item} />;
        })}
      </ul>
    </>
  );
}

export default ListDisplay;
