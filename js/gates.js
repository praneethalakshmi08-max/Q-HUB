/* Standard Quantum Gate Matrices (2x2) */
const INV2 = 1 / Math.sqrt(2);

const GATES = {
  H: [
    [{ re: INV2, im: 0 }, { re: INV2, im: 0 }],
    [{ re: INV2, im: 0 }, { re: -INV2, im: 0 }]
  ],
  X: [
    [{ re: 0, im: 0 }, { re: 1, im: 0 }],
    [{ re: 1, im: 0 }, { re: 0, im: 0 }]
  ],
  Y: [
    [{ re: 0, im: 0 }, { re: 0, im: -1 }],
    [{ re: 0, im: 1 }, { re: 0, im: 0 }]
  ],
  Z: [
    [{ re: 1, im: 0 }, { re: 0, im: 0 }],
    [{ re: 0, im: 0 }, { re: -1, im: 0 }]
  ],
  S: [
    [{ re: 1, im: 0 }, { re: 0, im: 0 }],
    [{ re: 0, im: 0 }, { re: 0, im: 1 }]
  ],
  T: [
    [{ re: 1, im: 0 }, { re: 0, im: 0 }],
    [{ re: 0, im: 0 }, { re: INV2, im: INV2 }]
  ]
};

/* Apply 2x2 Unitary Matrix to a 2-element State Vector */
function applyGate1(state, M) {
  const a = state[0], b = state[1];
  return [
    C.add(C.mul(M[0][0], a), C.mul(M[0][1], b)),
    C.add(C.mul(M[1][0], a), C.mul(M[1][1], b))
  ];
}
