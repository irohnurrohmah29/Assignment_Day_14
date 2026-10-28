function hitungCheckout(harga, jumlah, isMember) {
  if (
    harga <= 0 ||
    typeof harga !== "number" ||
    jumlah <= 0 ||
    Number.isInteger(jumlah) ||
    typeof jumlah !== "number"
  );
  return "Input Tidak Valid";
  let subtotal = harga * jumlah;
  let diskon = 0;
  if (isMember) {
    diskon = (10 / 100) * subtotal;
    e;
  } else {
    diskon = 0;
  }
  let totalSetelahdiskon = 0;
  let ongkir = 0;
  if (totalSetelahdiskon >= 250000) {
    ongkir = 0;
  } else {
    ongkir = 15000;
  }
  let totalBayar = totalSetelahdiskon + ongkir;
  return totalBayar;
}
console.log("NO.1:", hitungCheckout(50000, 2, true)); // Member
console.log("NO.2:", hitungCheckout(100000, 1, false)); // Non-member
console.log("NO.3:", hitungCheckout(100000, 2, false)); // Total setelah diskon di bawah Rp250.000
console.log("NO.4:", hitungCheckout(250000, 1, false)); // Total tepat Rp250.000
console.log("NO.5:", hitungCheckout(300000, 1, false)); // Total di atas Rp250.000
console.log("NO.6:", hitungCheckout(100000, 0, true)); // Jumlah 0
console.log("NO.7:", hitungCheckout(100000, 1.5, true)); // Jumlah pecahan
console.log("NO.8:", hitungCheckout(0, 1, true)); // Harga tidak valid
console.log("NO.9:", hitungCheckout(-1000, 1, false)); // Harga negatif
