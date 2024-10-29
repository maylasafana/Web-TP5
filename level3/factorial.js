// Fungsi untuk menghitung faktor bilangan menggunakan rekursi
export function factorial(n) {
    if (n === 0) return 1; // Basis
    return n * factorial(n - 1); // Rekursi
}

// Jangan hapus kode di bawah ini!
export default factorial;
