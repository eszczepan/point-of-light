let walls = [];
let ray;
let particle;
// let xoff = 0;
// let yoff = 1000000;

function setup() {
  createCanvas(667, 600);
  for (let i = 0; i < 5; i++) {
    const x1 = random(width);
    const x2 = random(width);
    const y1 = random(height);
    const y2 = random(height);
    walls[i] = new Boundary(x1, y1, x2, y2);
  }
  walls.push(new Boundary(0, 0, width, 0));
  walls.push(new Boundary(0, 0, 0, height));
  walls.push(new Boundary(0, height, width, height));
  walls.push(new Boundary(width, 0, width, height));

  particle = new Particle();
}

function draw() {
  background(0);
  for (wall of walls) {
    wall.show();
  }
  particle.update(mouseX, mouseY);
  // particle.update(noise(xoff) * width, noise(yoff) * height);
  particle.show();
  particle.look(walls);
  // xoff += 0.01;
  // yoff += 0.01;
}
