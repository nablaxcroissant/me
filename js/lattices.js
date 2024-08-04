import { vec2, matrix2 } from "./vectors.js";

export function lattices() {

    class Circle {
        constructor(x, y, r) {
            this.x = x;
            this.y = y;
            this.r = r;
        }

        draw() {
            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            ctx.fill();
        }
    }

    class Lattice {
        constructor(p0, p1, p2, rows, cols) {
            this.p0 = p0;
            this.p1 = p1;
            this.p2 = p2;
            this.rows = rows;
            this.cols = cols;
        }

        draw() {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    // Circle.new(this.x0 + i * this.x1 + j * this.x2, this.y0 + i * this.y1 + j * this.y2);
                    let c = new Circle(this.p0.x + i * this.p1.x + j*this.p2.x, this.p0.y + i*this.p1.y + j * this.p2.y, 2.5);
                    c.draw();
                }
            }
        }

    }
    const canvas = document.getElementById("main-canvas");
    canvas.setAttribute("width", 1080);
    canvas.setAttribute("height", 1080);
    const ctx = canvas.getContext("2d");

    let p0 = new vec2(10, 10);

    let p1 = new vec2(20, 0);
    let p2 = new vec2(0, 20);
    p2 = p2.transform(matrix2.rotation(Math.PI/6).m);

    let p1_rot = p1.transform(matrix2.rotation(Math.PI/64).m);
    let p2_rot = p2.transform(matrix2.rotation(Math.PI/64).m);

    let l1 = new Lattice(p0, p1, p2, 100, 100);

    let l2 = new Lattice(new vec2(10, -300), p1_rot, p2_rot, 100, 100);

    l1.draw(ctx);
    l2.draw(ctx);
}
