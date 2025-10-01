import { useEffect, useState } from "react";
export default function Counter() {
  // Initializing state from localStorage
  // Mayowa when you refresh the page, the count value is
  //  reset to 0 because you set it directly to zero.
  //  To persist the count value across page reloads,
  //  you need to pass a function to the get the initial state from localStorage.
  // Not like this: const [count, setCount] = useState(0);
  // but this
  const [count, setCount] = useState<number>(() => {
    const saved = localStorage.getItem("count");
    return saved ? JSON.parse(saved) : 0;
  });
  // Syncing state to localStorage
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <div>{count}</div>
        <div>
          <button
            onClick={() => setCount((prev) => prev - 1)}
            className="bg-blue-700 text-white border rounded-md px-2 active:bg-blue-400"
          >
            Decrease
          </button>
          <button
            onClick={() => setCount(0)}
            className="bg-blue-700 text-white border rounded-md px-2 active:bg-blue-400"
          >
            Reset
          </button>
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="bg-blue-700 text-white border rounded-md px-2 active:bg-blue-400"
          >
            Increase
          </button>
        </div>
      </div>
    </>
  );
}
