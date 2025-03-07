import React from "react";
import Canvas from "../components/Canvas";

const Home = () => {
  return (
    <div className="p-4">
      <h2 className="text-center text-3xl font-bold mb-8">Drag & Drop Flow Editor</h2>
      <Canvas />
    </div>
  );
};

export default Home;
