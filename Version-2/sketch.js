const boids = [];

function setup(){
	createCanvas(640, 360);
	for(let i = 0; i < 100; i++){
		boids.push(new Boid());
	}
}

function draw(){
	background(51);
	for(let boid of boids){
		boid.flock(boids);
		boid.update();
		boid.borders();
		boid.render();
	}
}