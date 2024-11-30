import PropTypes from "prop-types";
import { useList } from "../contexts/listContext";

ListItem.propTypes = {
  item: PropTypes.object,
};

function ListItem({ item }) {
  const { dispatch } = useList();

  function handleDelete() {
    const isUserSure = window.confirm("Jeste li sigurni da želite ukloniti?");
    if (!isUserSure) {
      return;
    } else {
      dispatch({ type: "list/deleteItem", payload: item.id });
    }
  }

  function handleInCart() {
    dispatch({ type: "list/markAsInCart", payload: item.id });
  }

  return (
    <li
      className="py-1 flex space-x-4 justify-between
    "
    >
      <div className="flex space-x-4 items-center">
        {" "}
        {!item.isInCart && (
          <input
            className="w-4 rounded-sm "
            onClick={handleInCart}
            type="checkbox"
          ></input>
        )}
        <h3>
          <span className="text-xs">x</span>
          {item.quantity} {item.name}
          <span className="capitalize text-xs">
            {item.store !== "sve" && ` |${item.store}`}
          </span>
        </h3>
      </div>

      <button onClick={handleDelete} className="">
        ✖
      </button>
    </li>
  );
}

export default ListItem;
