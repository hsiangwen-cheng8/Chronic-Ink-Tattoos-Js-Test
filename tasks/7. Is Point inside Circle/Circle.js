import Point from './Point';

export default function(center, radius) {
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    includes(Point) {
      // TODO: write your code here
      let a = Point.x-center.x;
      let b = Point.y-center.y;
      return Math.sqrt(a*a + b*b) <= radius;
    }
  }
}
