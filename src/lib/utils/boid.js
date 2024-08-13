// Based on Daniel Shiffman's tutorial on Partical Systems and Flocking Behaviors:
// Coding Challenge 124: Flocking Simulation, The Coding Train, https://www.youtube.com/watch?v=mhjuuHl6qHM
// 4.1 Particle Syste,, The Coding Train, https://thecodingtrain.com/tracks/the-nature-of-code-2/noc/4-particles/1-particle-system

import p5 from 'p5';

let boidSize = 4;
let boidColor = '#2C2C2C';
// let boidColor = '#383838';
// let boidColor = 'rgba(30, 30, 30, 1)';

// let boidColor = '#1E1E1E';
// let highlightColor = '#B3B3B3';
// let highlightColor = '#F316B0';
let highlightColor = '#198F51';

let maxForce = 0.2;
let maxSpeed = 4;
let transitionSpeed = 0.05;

export default class Boid {
	constructor(p) {
		this.p = p;
		this.position = p.createVector(p.random(p.width), p.random(p.height));
		this.velocity = p5.Vector.random2D();
		this.velocity.setMag(p.random(2, 10));
		this.acceleration = p.createVector();
		// limit how individuals are affected by the local
		this.maxForce = maxForce;
		this.maxSpeed = maxSpeed;
		this.highlighted = false;
		this.transition = 0;
	}

	edges() {
		const { p } = this;
		if (this.position.x > p.width) {
			this.position.x = 0;
		} else if (this.position.x < 0) {
			this.position.x = p.width;
		}
		if (this.position.y > p.height) {
			this.position.y = 0;
		} else if (this.position.y < 0) {
			this.position.y = p.height;
		}
	}

	// align(boids) {
	// 	const { p } = this;
	// 	let perceptionRadius = 100;
	// 	let steering = p.createVector();
	// 	let local = 0;

	// 	for (let other of boids) {
	// 		let d = p.dist(this.position.x, this.position.y, other.position.x, other.position.y);

	// 		if (other !== this && d < perceptionRadius) {
	// 			steering.add(other.velocity);
	// 			local++;
	// 		}
	// 	}

	// 	if (local > 0) {
	// 		steering.div(local);
	// 		steering.setMag(this.maxSpeed);
	// 		steering.sub(this.velocity);
	// 		steering.limit(this.maxForce);
	// 	}

	// 	return steering;
	// }

	// cohesion(boids) {
	// 	const { p } = this;
	// 	let perceptionRadius = 100;
	// 	let steering = p.createVector();
	// 	let local = 0;

	// 	for (let other of boids) {
	// 		let d = p.dist(this.position.x, this.position.y, other.position.x, other.position.y);

	// 		if (other !== this && d < perceptionRadius) {
	// 			steering.add(other.position);
	// 			local++;
	// 		}
	// 	}

	// 	if (local > 0) {
	// 		steering.div(local);
	// 		steering.sub(this.position);
	// 		steering.setMag(this.maxSpeed);
	// 		steering.sub(this.velocity);
	// 		steering.limit(this.maxForce);
	// 	}

	// 	return steering;
	// }

	// separation(boids) {
	// 	const { p } = this;
	// 	let perceptionRadius = 100;
	// 	let steering = p.createVector();
	// 	let local = 0;

	// 	for (let other of boids) {
	// 		let d = p.dist(this.position.x, this.position.y, other.position.x, other.position.y);

	// 		if (other !== this && d < perceptionRadius) {
	// 			let diff = p5.Vector.sub(this.position, other.position);
	// 			diff.div(d);
	// 			steering.add(diff);
	// 			local++;
	// 		}
	// 	}

	// 	if (local > 0) {
	// 		steering.div(local);
	// 		steering.setMag(this.maxSpeed);
	// 		steering.sub(this.velocity);
	// 		steering.limit(this.maxForce);
	// 	}

	// 	return steering;
	// }

	// flocking(boids) {
	// 	let alignment = this.align(boids).mult(1);
	// 	let cohesion = this.cohesion(boids).mult(1.1);
	// 	let separation = this.separation(boids).mult(1);
	// 	this.acceleration.add(alignment);
	// 	this.acceleration.add(cohesion);
	// 	this.acceleration.add(separation);
	// }

	update() {
		this.position.add(this.velocity);
		this.velocity.add(this.acceleration);
		this.velocity.limit(this.maxSpeed);
		// After updating the velocity, reset the acceleration
		this.acceleration.mult(0);

		// Smooth transition
		if (this.highlighted) {
			this.transition += transitionSpeed;
			if (this.transition > 1) this.transition = 1;
		} else {
			this.transition -= transitionSpeed;
			if (this.transition < 0) this.transition = 0;
		}
	}

	show() {
		const { p } = this;
		const color = p.lerpColor(p.color(boidColor), p.color(highlightColor), this.transition);
		p.strokeWeight(boidSize);
		p.stroke(color);
		p.point(this.position.x, this.position.y);
	}
}
