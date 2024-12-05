import AddItemForm from "./AddItemForm";
import Dashboard from "./Dashboard";
import ListDisplay from "./ListDisplay";
import ListDisplayOptions from "./ListDisplayOptions";

function MainBody() {
  return (
    <main className="bg-slate-100 px-3 pt-5 rounded-t-[50px] pb-3  ">
      <Dashboard />
      <div className="grid md:grid-cols-2 md:gap-10 max-w-4xl  ">
        <AddItemForm />

        <div>
          <ListDisplayOptions />{" "}
          <div className="h-3/5">
            <div className="bg-violet-200 mt-3 md:w-[800px] p-3 rounded-xl max-w-3xl  mx-auto max-h-72  overflow-y-scroll shadow-md  ">
              <ListDisplay />
            </div>
          </div>
        </div>
        {/* display list part */}
      </div>
    </main>
  );
}

export default MainBody;
