import { useState } from "react";
import { useList } from "../contexts/listContext";

function ListDisplayOptions() {
  const [active, setActive] = useState("list");
  const { dispatch } = useList();

  function handleOpenCart() {
    dispatch({ type: "list/switchToCart" });
    setActive("cart");
  }

  function handleOpenList() {
    dispatch({ type: "list/switchToList" });
    setActive("list");
  }

  return (
    <div className="flex justify-center text-sm">
      <div className="bg-violet-300 flex space-x-4 p-2 rounded-full ">
        <div
          onClick={handleOpenList}
          className={active === "list" ? "border-b-2 border-violet-500" : ""}
        >
          Popis
        </div>
        <div
          onClick={handleOpenCart}
          className={active === "cart" ? "border-b-2 border-violet-500" : ""}
        >
          Košarica
        </div>
      </div>
    </div>
  );
}

export default ListDisplayOptions;
