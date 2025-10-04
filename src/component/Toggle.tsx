import { useEffect, useState } from "react";

export default function Toggle() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  function toggleDarkMode() {
    setIsDarkMode((prev) => {
      const changed = !prev;
      return changed;
    });
  }
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      console.log("dark mode enabled");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("dark mode disabled");
    }
  }, [isDarkMode]);

  return (
    <>
      <div className="">
        <div> Hello world, sup guys</div>
        <button
          onClick={() => toggleDarkMode()}
          className="bg-blue-700 text-black dark:bg-green-600 dark:text-white px-1 rounded-md active:bg-blue-900 active:dark:bg-green-900"
        >
          Toggle
        </button>
      </div>
    </>
  );
}
