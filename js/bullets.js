export function bullets() {
    const canvases = document.getElementsByClassName("bullet");

    const elements = Array.prototype.filter.call(canvases, (canvas) => {
        canvas.setAttribute("width", 25);
        canvas.setAttribute("height", 25);
        
        const parent = canvas.parentElement;


        parent.addEventListener("mouseover", () => {
            window.requestAnimationFrame(animate);
        });

        parent.addEventListener("mouseout", () => {
            window.requestAnimationFrame(stopped);
        });

        const ctx = canvas.getContext("2d");

        stopped();

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = "white";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(10, 12, 6, 0, 2 * Math.PI);
            ctx.stroke()
        }

        function stopped() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = "white";
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(21, 10);
            ctx.lineTo(0, 15);
            ctx.stroke()
            ctx.beginPath();
            ctx.arc(10, 12, 6, 0, 2 * Math.PI);
            ctx.stroke()
        }
    });
}