import { Canvas } from "@react-three/fiber";
import { CarShow } from "Components/CarShow";
import { Propless } from "Types/React";
import "./styles.scss";

export const App = (_: Propless) => {
  return (
    <main className="app">
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </main>
  );
};
