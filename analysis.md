# Problem Decomposition: Sistem Checkout Produk Sederhana

## Tujuan

Menghitung jumlah pembayaran untuk satu jenis produk berdasarkan harga, jumlah produk, status member, diskon member, dan ongkos kirim.

## Input

| Input | Keterangan | Aturan |
|---|---|---|
| `harga` | Harga satu produk dalam rupiah | Harus berupa angka positif. |
| `jumlah` | Banyak produk yang dibeli | Harus berupa bilangan bulat positif. |
| `isMember` | Status apakah pembeli merupakan member | Menentukan apakah diskon member diberikan; diperlakukan sebagai nilai boolean (`true` atau `false`). |

Jika harga atau jumlah tidak memenuhi aturan validasi, proses dihentikan dan program menampilkan pesan input tidak valid. Case study tidak merinci validasi tambahan untuk status member.

## Proses

1. Terima `harga`, `jumlah`, dan `isMember`.
2. Validasi bahwa `harga` adalah angka positif dan `jumlah` adalah bilangan bulat positif.
3. Jika validasi gagal, kembalikan pesan input tidak valid dan jangan melakukan perhitungan.
4. Hitung subtotal: `subtotal = harga × jumlah`.
5. Tentukan diskon:
   - Jika pembeli member, diskon sebesar 10% dari subtotal.
   - Jika pembeli bukan member, diskon sebesar Rp0.
6. Hitung total setelah diskon: `totalSetelahDiskon = subtotal − diskon`.
7. Tentukan ongkos kirim berdasarkan `totalSetelahDiskon`:
   - Jika nilainya minimal Rp250.000, ongkos kirim Rp0 (gratis).
   - Jika nilainya kurang dari Rp250.000, ongkos kirim Rp15.000.
8. Hitung total pembayaran: `totalPembayaran = totalSetelahDiskon + ongkosKirim`.

## Aturan Keputusan

1. **Validasi harga:** apakah harga berupa angka positif? Jika tidak, hasilnya pesan input tidak valid dan proses berhenti.
2. **Validasi jumlah:** apakah jumlah bilangan bulat positif? Jika tidak, hasilnya pesan input tidak valid dan proses berhenti.
3. **Status member:** jika `isMember` bernilai `true`, diskon adalah 10% subtotal; jika `false`, tidak ada diskon.
4. **Ongkos kirim:** keputusan dibuat dari total setelah diskon, bukan subtotal. Nilai Rp250.000 tepat termasuk ongkos kirim gratis.

## Output

- Jika input harga atau jumlah tidak valid: pesan bahwa input tidak valid, tanpa hasil perhitungan.
- Jika input valid: hasil perhitungan yang sekurang-kurangnya memuat subtotal, diskon, ongkos kirim, dan total pembayaran dalam rupiah.

## Pattern (Pengenalan Pola)

- Semua transaksi mengikuti urutan perhitungan yang sama: validasi → subtotal → diskon → ongkos kirim → total pembayaran.
- Status member selalu menentukan diskon dengan pola tetap: member mendapat 10%, non-member mendapat 0%.
- Ongkos kirim menggunakan batas tetap Rp250.000 pada total setelah diskon: mencapai atau melewati batas berarti gratis, sedangkan di bawah batas dikenai Rp15.000.
- Input harga dan jumlah yang tidak valid memiliki pola penanganan yang sama: proses dihentikan dan pesan error diberikan.

## Abstraction (Abstraksi)

Model hanya menggunakan informasi yang diperlukan untuk menghitung checkout: harga satu produk, jumlah produk, status member, aturan diskon, dan aturan ongkos kirim. Detail lain seperti nama produk, data pelanggan, metode pembayaran, pajak, stok, dan pengiriman aktual tidak termasuk dalam case study sehingga tidak dihitung. Perhitungan uang mengikuti rumus yang diberikan; pembulatan khusus tidak ditetapkan dalam panduan.
