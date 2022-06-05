type Concat<T extends unknown[], U extends unknown[]> = [...T, ... U];

type FirstArrEle<T extends unknown[]> = T[0]; 

// type FirstArrEle<T extends unknown[]> = T extends [infer F, ...infer R] ? F : R; 

type LastArrEle<T extends unknown[]> = T extends [...infer R, infer F] ? F : never;