function cetakAngka(n) {
    if (n === 0) {
        return;
    }
    console.log(n);
    cetakAngka(n - 1)
}

cetakAngka(10);

function faktorial(f) {
    if (f === 0) return 1;
    return f * faktorial(f - 1);
}
faktorial(5);
console.log(faktorial);