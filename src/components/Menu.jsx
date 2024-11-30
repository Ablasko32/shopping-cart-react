function Menu() {
  return (
    <div className="flex items-center justify-center  absolute inset-0 h-screen bg-violet-200/50 backdrop-blur-sm z-10">
      <ul className="flex flex-col items-center space-y-4">
        <p className="opacity-70 italic ">{new Date().toLocaleDateString()}</p>
        <li className="bg-violet-400/40 px-2 py-1 rounded-full shadow-md">
          <a href="https://www.konzum.hr/trgovine" target="_blank">
            Konzum
          </a>
        </li>
        <li className="bg-violet-400/40  px-2 py-1 rounded-full shadow-md">
          <a href="https://www.plodine.hr/supermarketi" target="_blank">
            Plodine
          </a>
        </li>
        <li className="bg-violet-400/40 px-2 py-1 rounded-full shadow-md">
          <a
            href="https://www.lidl.hr/c/popis-trgovina-otvorenih-nedjeljom/s10045098"
            target="_blank"
          >
            Lidl
          </a>
        </li>
        <li className="bg-violet-400/40 px-2 py-1 rounded-full shadow-md">
          <a href="https://www.spar.hr/lokacije" target="_blank">
            Interšpar
          </a>
        </li>
        <li className="bg-violet-400/40 px-2 py-1 rounded-full shadow-md">
          <a
            href="https://www.kaufland.hr/akcije-novosti/radno-vrijeme-nedjeljom.html"
            target="_blank"
          >
            Kaufland
          </a>
        </li>
        <li className="bg-violet-400/40 px-2 py-1 rounded-full shadow-md">
          <a href="https://radnenedjelje.com/grad/rijeka/" target="_blank">
            Rijeka centri
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
