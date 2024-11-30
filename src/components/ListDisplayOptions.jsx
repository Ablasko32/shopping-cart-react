import { useEffect, useState } from "react";
import { useList } from "../contexts/listContext";
import MailButton from "./MailButton";

function ListDisplayOptions() {
  const { dispatch, displayCart } = useList();

  const [formData, setFormData] = useState("sve");

  function handleOpenCart() {
    dispatch({ type: "list/switchToCart" });
  }

  function handleOpenList() {
    dispatch({ type: "list/switchToList" });
  }

  useEffect(() => {
    dispatch({ type: "list/changeFilter", payload: formData });
  }, [formData, dispatch]);

  return (
    <div className="flex justify-between items-center text-xs mx-4">
      <select
        value={formData}
        onChange={(e) => setFormData(e.target.value)}
        name="store"
        className="input"
      >
        <option value="sve">Sve</option>
        <option value="konzum">Konzum</option>
        <option value="plodine">Plodine</option>
        <option value="lidl">Lidl</option>
        <option value="kaufland">Kaufland</option>
        <option value="interšpar">Interšpar</option>
      </select>

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
      <MailButton />
    </div>
  );
}

export default ListDisplayOptions;
