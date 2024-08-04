export class vec2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(v) {
        return new vec2(this.x + v.x, this.y + v.y);
    }

    dot(v) {
        return this.x * v.x + this.y * v.y;
    }

    transform(m) {
        let x = this.x * m[0][0] + this.y * m[1][0];
        let y = this.x * m[0][1] + this.y * m[1][1];
        return new vec2(x, y);
    }
}

export class matrix2 {
    constructor(a, b, c, d) {
        this.m = [[a, c], [b, d]];
    }

    static identity() {
        return new matrix2(1, 0, 0, 1);
    }

    static rotation(theta) {
        let c = Math.cos(theta);
        let s = Math.sin(theta);
        return new matrix2(c, -s, s, c);
    }
}
