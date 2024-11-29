import { useList } from "../contexts/listContext";

function ListDisplayOptions() {
  const { dispatch, displayCart } = useList();

  function handleOpenCart() {
    dispatch({ type: "list/switchToCart" });
  }

  function handleOpenList() {
    dispatch({ type: "list/switchToList" });
  }

  return (
    <div className="flex justify-center text-xs">
      <div className="bg-violet-300 flex space-x-4 p-2 rounded-full ">
        <div
          onClick={handleOpenList}
          className={!displayCart ? "border-b-2 border-violet-500" : ""}
        >
          Popis
        </div>
        <div
          onClick={handleOpenCart}
          className={displayCart ? "border-b-2 border-violet-500" : ""}
        >
          Košarica
        </div>
      </div>
    </div>
  );
}

export default ListDisplayOptions;
