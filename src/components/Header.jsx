function Header() {
  return (
    <header className="bg-violet-300 py-4 px-3 flex items-center justify-between">
      <div>
        <h1 className="font-medium tracking-widest text-xl  md:text-2xl">
          CartMan <span className="text-sm italic font-normal">V1</span>
        </h1>
        <p className="text-sm tracking-wide">Tvoja lista za trgovinu</p>
      </div>

      <a
        className="md:text-xl flex flex-col items-center bg-violet-400 px-2 py-1 rounded-md shadow-lg cursor-pointer"
        target="_blank"
        href="https://radnenedjelje.com/grad/rijeka/"
      >
        <span className="font-medium">NED</span>
        <span>🕒</span>
      </a>
    </header>
  );
}

export default Header;
