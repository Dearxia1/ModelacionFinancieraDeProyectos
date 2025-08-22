export function CalculateEA(NA,period) {
    
    const t = Number(NA);
    const p = Number(period);
    return (Math.pow(1 + (t / 100) / p, p) - 1) * 100;

}
