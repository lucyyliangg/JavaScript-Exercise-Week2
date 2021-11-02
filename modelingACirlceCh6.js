const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
const circle = {
  circumference() {
      return Math.PI*2*r;
  },
  
  area(){
    return Math.PI*r*r;
  } 
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
