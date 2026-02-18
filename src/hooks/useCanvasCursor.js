import { useEffect } from "react";

const useCanvasCursor = () => {
  useEffect(() => {
    let ctx;
    let f;
    let e = 0;
    let pos = {};
    let lines = [];
    const E = {
      debug: true,
      friction: 0.5,
      trails: 20,
      size: 50,
      dampening: 0.25,
      tension: 0.98,
    };

    function SpringObject(options) {
      this.phase = options.phase || 0;
      this.offset = options.offset || 0;
      this.frequency = options.frequency || 0.001;
      this.amplitude = options.amplitude || 1;
    }

    SpringObject.prototype.update = function () {
      this.phase += this.frequency;
      e = this.offset + Math.sin(this.phase) * this.amplitude;
      return e;
    };

    function Node() {
      this.x = 0;
      this.y = 0;
      this.vx = 0;
      this.vy = 0;
    }

    function Line(options) {
      this.init(options);
    }

    Line.prototype.init = function (options) {
      this.spring = options.spring + 0.1 * Math.random() - 0.02;
      this.friction = E.friction + 0.01 * Math.random() - 0.002;
      this.nodes = [];

      for (let i = 0; i < E.size; i++) {
        const node = new Node();
        node.x = pos.x;
        node.y = pos.y;
        this.nodes.push(node);
      }
    };

    Line.prototype.update = function () {
      let springForce = this.spring;

      // --- node 0 (the head) ---
      const first = this.nodes[0];

      first.vx += (pos.x - first.x) * springForce;
      first.vy += (pos.y - first.y) * springForce;

      // IMPORTANT: integrate node 0 (your port is missing this)
      first.vx *= this.friction;
      first.vy *= this.friction;
      first.x += first.vx;
      first.y += first.vy;

      // --- rest of the chain ---
      for (let i = 1; i < this.nodes.length; i++) {
        const current = this.nodes[i];
        const previous = this.nodes[i - 1];

        current.vx += (previous.x - current.x) * springForce;
        current.vy += (previous.y - current.y) * springForce;

        current.vx += previous.vx * E.dampening;
        current.vy += previous.vy * E.dampening;

        current.vx *= this.friction;
        current.vy *= this.friction;

        current.x += current.vx;
        current.y += current.vy;

        springForce *= E.tension;
      }
    };

    Line.prototype.draw = function () {
      ctx.beginPath();
      ctx.moveTo(this.nodes[0].x, this.nodes[0].y);

      for (let i = 1; i < this.nodes.length - 1; i++) {
        const curr = this.nodes[i];
        const next = this.nodes[i + 1];
        const cx = 0.5 * (curr.x + next.x);
        const cy = 0.5 * (curr.y + next.y);
        ctx.quadraticCurveTo(curr.x, curr.y, cx, cy);
      }

      const last = this.nodes[this.nodes.length - 1];
      ctx.quadraticCurveTo(last.x, last.y, last.x, last.y);
      ctx.stroke();
      ctx.closePath();
    };

    function handleMouseMove(event) {
      const recreateLines = () => {
        lines = [];
        for (let i = 0; i < E.trails; i++) {
          lines.push(new Line({ spring: 0.4 + (i / E.trails) * 0.025 }));
        }
      };

      const updatePos = (mouseEvent) => {
        if (mouseEvent.touches) {
          pos.x = mouseEvent.touches[0].pageX;
          pos.y = mouseEvent.touches[0].pageY;
        } else {
          pos.x = mouseEvent.clientX;
          pos.y = mouseEvent.clientY;
        }
        mouseEvent.preventDefault();
      };

      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchstart", handleMouseMove);

      document.addEventListener("mousemove", updatePos);
      document.addEventListener("touchmove", updatePos);
      document.addEventListener("touchstart", updatePos);

      updatePos(event);
      recreateLines();
      animate();
    }

    function animate() {
      if (!ctx.running) return;

      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.globalCompositeOperation = "lighter";

      ctx.strokeStyle = `hsla(${Math.round(f.update())},50%,50%,0.2)`;
      ctx.lineWidth = 1;

      lines.forEach((line) => {
        line.update();
        line.draw();
      });

      requestAnimationFrame(animate);
    }

    function resizeCanvas() {
      if (ctx && ctx.canvas) {
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
      }
    }

    function initCanvas() {
      const canvasEl = document.getElementById("canvas");
      if (!canvasEl) return;

      ctx = canvasEl.getContext("2d");
      ctx.running = true;

      f = new SpringObject({
        phase: Math.random() * 2 * Math.PI,
        amplitude: 85,
        frequency: 0.0015,
        offset: 285,
      });

      window.addEventListener("resize", resizeCanvas);
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("touchstart", handleMouseMove);
      resizeCanvas();
    }

    initCanvas();

    return () => {
      if (ctx) ctx.running = false;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchstart", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);
};

export default useCanvasCursor;
