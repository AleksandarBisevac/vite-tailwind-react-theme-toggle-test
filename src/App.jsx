import React from "react";
import "./App.css";

const colors = ["green", "red", "blue"];
const modes = ["light", "dark"];

function App() {
  const [color, setColor] = React.useState(colors[0]);
  const [mode, setMode] = React.useState(modes[0]);

  const handleToggleMode = () => {
    setMode((mode) => {
      if (mode === "dark") return "light";
      return "dark";
    });
  };

  return (
    <div
      className={[
        "font-mono bg-primaryBg h-screen flex flex-col justify-center gap-y-16",
        `theme-${color}`,
        `theme-${mode}`,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto bg-neutralBg text-onNeutralBg border-8 border-onNeutralBg p-5 w-full max-w-lg flex flex-col justify-center gap-y-10">
        <h1 className="text-3xl font-bold text-center ">Tailwind Themes</h1>
        <div className="flex flex-col mx-auto justify-center  gap-y-6 w-full">
          <p className="text-center text-xl">Select color:</p>

          {/* CHOOSE THEME */}
          <div className="flex flex-row gap-x-4 w-full justify-center">
            {colors.map((col, index) => (
              <div
                key={col}
                className={[
                  `flex flex-col justify-center items-center p-5 gap-y-5 border-8 w-full cursor-pointer h-24 ${
                    color === colors[index]
                      ? "border-primary bg-primaryBg text-primary"
                      : "border-onNeutralBg text-onNeutralBg"
                  }`,
                ]}
                onClick={() => setColor(col)}
              >
                <p className="uppercase font-bold text-xl">{col}</p>
              </div>
            ))}
          </div>
          {/* CHOOSE MODE */}
          <div className="flex flex-col mx-auto justify-center  gap-y-6 w-full">
            <p className="text-center text-xl">Select mode:</p>
            <div className="flex flex-col justify-center items-center ">
              {/*   Switch Container */}
              <div
                className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-onNeutralBg rounded-full p-1 cursor-pointer"
                onClick={handleToggleMode}
              >
                {/* Switch */}
                <div
                  className={`md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out bg-neutralBg ${
                    mode === "light" ? " transform translate-x-5 " : ""
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
