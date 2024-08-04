export function atoms() {
    window.requestAnimationFrame(draw);
    const canvas = document.getElementById("atoms");
    canvas.setAttribute("width", 800);
    canvas.setAttribute("height", 800);
    const ctx = canvas.getContext("2d");


    let mouse= {};
    mouse.x = 0;
    mouse.y = 0;

    canvas.addEventListener("mousemove", (event) => {
        mouse.x = event.offsetX;
        mouse.y = event.offsetY;
    });

    class Atom {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.vx = 0;
            this.vy = 0;
            this.r = 5;
        }

        update() {
            this.vx *= 0.95;
            this.vy *= 0.95;
        }

        draw() {
            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            ctx.fill();
        }

        forceFrom(particle) {
            this.x += this.vx;
            this.y += this.vy;

            let dx = this.x - particle.x;
            let dy = this.y - particle.y;
            let d = Math.sqrt(dx * dx + dy * dy);
            let f = 0.002*(Math.pow(40, 12)/Math.pow(d, 12) - Math.pow(40, 6)/ Math.pow(d, 6));
            if (d > 120) {
                f-= 0.001*40*40/Math.pow(d, 2);
            }
            if (d > 800) {
                f -= 0.2*40*40/Math.pow(d, 2);
            }
            let fx = f * dx / d;
            let fy = f * dy / d;

            // Simplectic Euler
            this.vx += fx;
            this.vy += fy;
        }

        mouseRepulsion(mouse_x, mouse_y) {
            let dx = this.x - mouse_x;
            let dy = this.y - mouse_y;
            let d = Math.sqrt(dx * dx + dy * dy);
            let f = Math.min(0.005*(Math.pow(40, 12)/Math.pow(d, 12) - Math.pow(40, 6)/ Math.pow(d, 6)), 0.03);
            let fx = f * dx / d;
            let fy = f * dy / d;

            this.vx += fx;
            this.vy += fy;
        }
    }

    let particles = [];
    for (let i = 0; i < 100; i++){
        particles.push(new Atom(Math.random() * 800,Math.random() * 800));
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let p of particles) {
            for (let q of particles) {
                if (p !== q) {
                    p.forceFrom(q);
                }
            }
            p.mouseRepulsion(mouse.x, mouse.y);
        }
        for (let particle of particles) {
            particle.update();
            particle.draw();
        }

        window.requestAnimationFrame(draw);
    }

}