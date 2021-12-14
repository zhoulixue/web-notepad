enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}
interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

const c2: Circle = {
  kind: ShapeKind.Circle,
  radius: 100,
}
console.log(c2);

export default {};
