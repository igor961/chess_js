export default function Pair(a, b) {
  this.a = a
  this.b = b
  this.x = a
  this.y = b

  this.plus = (p) => new Pair(this.a+p.a, this.b+p.b)
  this.valid = (n = 8) => (this.a>=0 && this.b>=0 && this.a<n && this.b<n)
  this.reverse = () => [this.a, this.b] = [this.b, this.a] 
  this.toString = () => "("+this.a+", "+this.b+")"
}
