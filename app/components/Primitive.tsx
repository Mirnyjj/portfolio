import * as THREE from "three";

type PrimitiveProps = {
  object: THREE.Object3D;
  [key: string]: any;
};

export function Primitive({ object, ...props }: PrimitiveProps) {
  return <primitive object={object} {...props} />;
}
