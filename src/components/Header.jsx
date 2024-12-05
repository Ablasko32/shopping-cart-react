import { useList } from "../contexts/listContext";
import Menu from "./Menu";

function Header() {
  const { displayMenu, dispatch } = useList();

  function handleOpenMenu() {
    dispatch({ type: "list/toggleMenu" });
  }

  return (
    <header className="bg-violet-300 py-4 px-3 flex items-center justify-between relative ">
      <div>
        <h1 className="font-medium tracking-widest text-xl  md:text-2xl">
          CartMan <span className="text-sm italic font-normal">V1</span>
        </h1>
        <p className="text-sm tracking-wide ">Tvoja lista za trgovinu</p>
      </div>

      <a
        className="z-40 hover:-translate-y-1 transition-all duration-100 hover:bg-violet-500 md:text-xl flex flex-col items-center bg-violet-400 px-2 py-1 rounded-md shadow-lg cursor-pointer"
        onClick={handleOpenMenu}
      >
        {!displayMenu ? (
          <>
            <span className="font-medium">NED</span>
            <span>🕒</span>
          </>
        ) : (
          <>
            <span className="font-medium">NED</span>
            <span>❌</span>
          </>
        )}
      </a>

      {/* menu */}
      {displayMenu && <Menu />}
    </header>
  );
}

export default Header;
