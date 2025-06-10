import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  const colors = [
    { name: "Red", value: "red" },
    { name: "Green", value: "green" },
    { name: "Blue", value: "blue" },
  ];

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed bottom-16 inset-x-0 flex justify-center px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white rounded-3xl px-4 py-3 shadow-lg">
          {colors.map((c) => (
            <button
              key={c.value}
              onClick={() => setColor(c.value)}
              className="px-4 py-1 rounded-full text-white shadow-lg outline-none cursor-pointer"
              style={{ backgroundColor: c.value }}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
