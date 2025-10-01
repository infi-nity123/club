import { useEffect, useState } from "react";
export default function Counter() {
  const [count, setCount] = useState<number>(() => {
    const saved = localStorage.getItem("count");
    return saved ? JSON.parse(saved) : 0;
  });
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
