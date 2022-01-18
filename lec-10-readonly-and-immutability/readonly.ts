interface Cat {
  name: string;
  breed: string;
}

function makeCat(name: string, breed: string): Readonly<Cat> {
  return {
    name,
    breed,
  }
}

const usal = makeCat('Usal', 'Maine');
// usal.name = 'Piter'; // error!

function makeCoordinate(
  x: number,
  y: number,
  z: number,
): readonly [number, number, number] {
  return [x, y, z];
}

const c1 = makeCoordinate(1, 2, 3);
// c1[0] = 4; // error!

const reallyConst = [1, 2, 3] as const;
// reallyConst[0] = 4; // error!




