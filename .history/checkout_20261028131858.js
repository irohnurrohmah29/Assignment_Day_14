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
  }else 
}
