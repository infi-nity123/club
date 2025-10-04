import "./App.css";
import Counter from "./component/Counter";
import Toggle from "./component/Toggle";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100vh] gap-10 dark:bg-gray-900 dark:text-white">
        <Toggle />
        <Counter />
      </div>
    </>
  );
}

export default App;
