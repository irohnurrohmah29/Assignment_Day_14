function hitungCheckout(harga, jumlah, isMember) {
  if (
    harga < 0 ||
    typeof harga !== "number" ||
    jumlah < 0 ||
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
  return ";
}
