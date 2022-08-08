function setup() {
  createCanvas(400, 400);
}
var student = {
 Name:"Hari", 
 Grade:5,
 Roll_Call:6,
 Marks: [100, 100, 100, 100]

};
function draw() {
  background(220);

  circle(ball.x, ball.y, ball.r);
  fill(ball.color[3])
  ball.x_speed = 1;
  ball.x += ball.x_speed;
}
console.log(student.Name);
console.log(student.Grade);
console.log(student.Marks);
student.Roll_Call = 80;
console.log(student.Roll_Call);

var ball = {
  x: 20,
  y: 30,
  r: 30,
  x_speed: 0,
  y_speed: 0,
  color: ["red", "orange", "yellow", "green"]
};

