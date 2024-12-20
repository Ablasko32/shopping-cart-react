import { useState } from "react";
import { useList } from "../contexts/listContext";

function AddItemForm() {
  const [formData, setFormData] = useState({
    name: "",
    quantity: 1,
    store: "sve",
  });

  function handleInput(e) {
    const { name, value } = e.target;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  // dispatch context
  const { dispatch } = useList();

  function handleSubmit(e) {
    if (!formData.name && !formData.quantity) return;
    e.preventDefault();
    dispatch({
      type: "list/addItemToBuy",
      payload: { ...formData, id: crypto.randomUUID() },
    });
    setFormData((prev) => {
      return { ...prev, name: "", quantity: 1 };
    });
  }

  return (
    <div className="shadow-md bg-violet-200 rounded-md px-3 py-4 flex  items-center justify-start mb-6 relative max-w-md md:mt-20 md:ml-10 ">
      <form className="flex flex-col gap-2 mt-3 " onSubmit={handleSubmit}>
        <input
          autoFocus
          className="input "
          required
          onChange={handleInput}
          name="name"
          value={formData.name}
          type="text"
          placeholder="Naziv"
        />
        <input
          className="input"
          required
          onChange={handleInput}
          name="quantity"
          value={formData.quantity}
          type="text"
          placeholder="Količina"
        />
        <select
          value={formData.store}
          onChange={handleInput}
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

        <button
          type="submit"
          className="hover:-translate-y-1 transition-all duration-100 hover:bg-violet-500 shadow-lg h-24 bg-violet-400 px-2 py-1 rounded-full mx-5 mt-2 mb-4 absolute right-0 top-6"
        >
          Dodaj
        </button>
      </form>
    </div>
  );
}

export default AddItemForm;
