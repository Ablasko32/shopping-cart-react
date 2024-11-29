import { useEffect } from "react";
import { useList } from "../contexts/listContext";

function Dashboard() {
  const { toBuy, dispatch } = useList();
  const numberItems = toBuy.length;
  const numberItemInCart = toBuy.reduce(
    (acc, el) => (el.isInCart ? acc + 1 : acc),
    0,
  );
  const lefoverItems = numberItems - numberItemInCart;
  useEffect(() => {
    if (lefoverItems === 0 && numberItems !== 0)
      dispatch({ type: "list/switchToCart" });
  }, [lefoverItems, numberItems, dispatch]);

  return (
    <>
      <div className="flex items-center justify-around mb-3 mx-6">
        {lefoverItems === 0 && numberItems !== 0 ? (
          <div className="flex space-x-5 items-center">
            <p>Košarica je spremna!</p>
            <p className="font-medium">{numberItems} ✔</p>
          </div>
        ) : (
          <>
            {" "}
            <p className="">
              Popis:
              <span className="text-xl font-medium opacity-80">
                {numberItems}
              </span>
            </p>
            <p>
              Preostalo:
              <span className="text-xl font-medium opacity-80">
                {lefoverItems}
              </span>
            </p>
          </>
        )}
      </div>
      <progress
        max={numberItems}
        value={numberItemInCart}
        className="  w-full px-10 [&::-webkit-progress-bar]:bg-violet-200  [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:bg-violet-500 mb-4 "
      ></progress>
    </>
  );
}

export default Dashboard;
