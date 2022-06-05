type ReplaceAll<S extends string, From extends string, To extends string> = 
From extends '' ? 
S : S extends `${infer F}${From}${infer L}` ? 
`${F}${To}${ReplaceAll<L, From, To>}` : S;
// `${ReplaceAll<F, From, To>}${To}${ReplaceAll<L, From, To>}` : S;






// From extends `${F}${To}${L}` ?  error
// ReplaceAll<`${F}${To}${L}`, From, To> : `${F}${To}${L}` : S