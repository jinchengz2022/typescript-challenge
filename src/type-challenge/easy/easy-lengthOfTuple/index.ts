type Length<T extends readonly any[]> = T["length"];

const testArr = ['a', '2', 20] as const;
type LengthArrTest1 = typeof testArr; // readonly ['a', '2', 'c']
const testArr2 = ['a', '2', 0];
type LengthArrTest2 = typeof testArr2; // (string | number)[]

// tuple:
type MyTuple = [string, number];
const MyArr: MyTuple = ['', 10];