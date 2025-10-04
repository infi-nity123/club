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
      <div className="flex flex-col justify-center h-[100vh] items-center">
        <div>{count}</div>
        <div>
          <button
            onClick={() => setCount((prev) => prev - 1)}
            className="bg-blue-500 text-white px-1 rounded-md "
          >
            Decrease
          </button>
          <button
            onClick={() => setCount(0)}
            className="bg-blue-500 text-white px-1 rounded-md "
          >
            Reset
          </button>
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="bg-blue-500 text-white px-1 rounded-md "
          >
            Increase
          </button>
        </div>
      </div>
    </>
  );
}
