import { Fragment, useEffect, useMemo } from "react";
import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Boxes } from "Components/Boxes";
import { Corvette } from "Components/Corvette";
import { Grid } from "Components/Grid";
import { Ground } from "Components/Ground";
import { Rings } from "Components/Rings";
import { useWindowSize } from "Hooks/useWindowSize";
import { Propless } from "Types/React";

export const CarShow = (_: Propless) => {
  const camera = useThree(t => t.camera);
  const [width, height] = useWindowSize();
  const maxDimension = useMemo(() => Math.max(width, height), [width, height]);

  useEffect(() => {
    camera.position.x = Math.max(5, 50 - maxDimension / 20);
  }, [maxDimension, camera]);

  return (
    <Fragment>
      <OrbitControls
        target={[0, 0.35, 0]}
        maxPolarAngle={1.45}
        maxZoom={-5.0}
        minDistance={5}
        maxDistance={50}
      />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
      <color args={[0, 0, 0]} attach="background" />
      <spotLight
        castShadow
        color={[1, 0.25, 0.7]}
        intensity={10.5}
        angle={0.6}
        decay={0.5}
        penumbra={0.5}
        position={[5, 5, 0]}
        shadow-bias={-0.0001}
      />
      <spotLight
        castShadow
        color={[0.14, 0.5, 1]}
        intensity={20}
        angle={0.6}
        decay={0.5}
        penumbra={0.5}
        position={[-5, 5, 0]}
        shadow-bias={-0.0001}
      />
      <CubeCamera resolution={256} frames={Infinity}>
        {texture => (
          <Fragment>
            <Environment map={texture} environmentIntensity={15} />
            <Corvette />
          </Fragment>
        )}
      </CubeCamera>
      <Rings />
      <Boxes />
      <Grid />
      <Ground />
    </Fragment>
  );
};
