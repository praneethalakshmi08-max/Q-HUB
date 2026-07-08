/* Complex Number Operations */
const C = {
  add: (a, b) => ({ re: a.re + b.re, im: a.im + b.im }),
  sub: (a, b) => ({ re: a.re - b.re, im: a.im - b.im }),
  mul: (a, b) => ({
    re: a.re * b.re - a.im * b.im,
    im: a.re * b.im + a.im * b.re
  }),
  scale: (c, s) => ({ re: c.re * s, im: c.im * s }),
  abs2: (c) => c.re * c.re + c.im * c.im,
  abs: (c) => Math.sqrt(c.re * c.re + c.im * c.im),
  phase: (c) => Math.atan2(c.im, c.re),
  fromReal: (r) => ({ re: r, im: 0 })
};

/* Convert a single-qubit state [α, β] to Bloch Sphere coordinates (x, y, z) */
function blochFromState(state) {
  const [a, b] = state;
  const x = 2 * (a.re * b.re + a.im * b.im);
  const y = 2 * (a.re * b.im - a.im * b.re);
  const z = C.abs2(a) - C.abs2(b);
  return { x, y, z };
}
