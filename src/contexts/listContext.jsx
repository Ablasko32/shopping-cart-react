import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useReducer } from "react";

const listContext = createContext();

const initalState = {
  toBuy: [
    // {
    //   id: 1,
    //   name: "Bread",
    //   quantity: 1,
    //   isInCart: false,
    // },
    // {
    //   id: 2,
    //   name: "Carrot",
    //   quantity: 2,
    //   isInCart: false,
    // },
    // {
    //   id: 3,
    //   name: "Red",
    //   quantity: 2,
    //   isInCart: false,
    // },
    // {
    //   id: 4,
    //   name: "Blue",
    //   quantity: 2,
    //   isInCart: false,
    // },
  ],
  displayCart: false,
  displayMenu: false,
  currentFilter: "sve",
};

function init(initalState) {
  // sync with storing in localstorage via useEffect, returns local storage if exists or inital state
  const data = JSON.parse(localStorage.getItem("shoppingData"));
  // console.log(data);
  if (data) {
    return data;
  }
  return initalState;
}

function reducer(state, action) {
  switch (action.type) {
    case "list/addItemToBuy":
      // Adds new item to buy
      return { ...state, toBuy: [...state.toBuy, action.payload] };
    case "list/deleteItem": {
      console.log(action.payload);

      const newItems = state.toBuy.filter((el) => el.id !== action.payload);
      console.log(newItems);

      return { ...state, toBuy: newItems };
    }
    case "list/markAsInCart": {
      const item = state.toBuy.find((el) => el.id === action.payload);
      const filteredCart = state.toBuy.filter((el) => el.id !== action.payload);
      item.isInCart = true;

      return { ...state, toBuy: [...filteredCart, item] };
    }

    case "list/switchToCart": {
      return { ...state, displayCart: true };
    }
    case "list/switchToList": {
      return { ...state, displayCart: false };
    }
    case "list/clearAll": {
      return { ...state, toBuy: [], displayCart: false };
    }
    case "list/toggleMenu": {
      return { ...state, displayMenu: !state.displayMenu };
    }
    case "list/changeFilter": {
      return { ...state, currentFilter: action.payload };
    }

    default:
      throw new Error("Unkown action type");
  }
}

ListProvider.propTypes = {
  children: PropTypes.any,
};

function ListProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initalState, init);

  const { displayCart, toBuy, displayMenu, currentFilter } = state;

  useEffect(() => {
    // saving state to local storage on each state change
    localStorage.setItem("shoppingData", JSON.stringify(state));
  }, [state]);

  return (
    <listContext.Provider
      value={{
        toBuy,
        displayCart,
        dispatch,
        displayMenu,
        currentFilter,
      }}
    >
      {children}
    </listContext.Provider>
  );
}

// custom context consumer hook returns context
function useList() {
  const context = useContext(listContext);
  if (context === "undefinded") {
    throw new Error("useList used outside of context provider");
  }
  return context;
}

export { useList };

export default ListProvider;
