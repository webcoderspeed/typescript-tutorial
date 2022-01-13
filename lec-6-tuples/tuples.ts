type ThreeDCoordinate = [x: number, y: number, z: number];

function add3DCoordinate(
  c1: ThreeDCoordinate,
  c2: ThreeDCoordinate
): ThreeDCoordinate {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}

console.log(add3DCoordinate([10, 10, 20], [20, 50, 70]));

function simpleStringState(initial: string): [
  () => string,
  (v: string) => void
] {
  let str: string = initial;
  return [
    () => str,
    (val) => str = val
  ]
}

const [st1Getter, st1Setter] = simpleStringState("Nik");
console.log(st1Getter());
st1Setter("Fury");
console.log(st1Getter());

