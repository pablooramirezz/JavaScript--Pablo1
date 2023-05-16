export const PI = 3.1415926;

export function factorial (n) {
    let f=1;
    for(let i=1; i <=n; i++)
        f *= i;
    return f;
}