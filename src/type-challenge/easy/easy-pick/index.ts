type MyPick<T, K extends keyof T> = {
  // P 相当于 const P = {}
  [P in K]: T[P];
}

// T: 'tem', 'ip', 'yu'
// keyof T = 'tem' | 'ip' | 'yu'

// P in K = 