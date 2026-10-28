function hitungCheckout(harga, jumlah, isMember) {
  if (
    harga < 0 ||
    typeof harga !== "number" ||
    jumlah < 0 ||
    Number.isInteger(jumlah) ||
    typeof jumlah !== "number"
  );
  return "";
}
