export default function Pair(a, b) {
  this.a = a
  this.b = b

  this.plus = (p) => new Pair(this.a+p.a, this.b+p.b)
  this.valid = (n = 8) => (this.a>=0 && this.b>=0 && this.a<n && this.b<n)
  
  
  this.toString = () => "("+this.a+", "+this.b+")"
}
