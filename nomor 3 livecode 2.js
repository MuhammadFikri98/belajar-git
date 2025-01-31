const customer = {
  name: "Fajrin",
  products: [
    ["Asus ROG", 2],
    ["Lenovo Legion", 3],
  ],
  member: true,
};

const items = [
  "Asus ROG",
  "Asus ROG",
  "Asus ROG",
  "Asus ROG",
  "Lenovo Legion",
  "Lenovo Legion",
  "Lenovo Legion",
  "HP Omen",
  "HP Omen",
];

// 1. Kerjakan Function getTotalPrice terlebih dahulu
function getTotalPrice(customer) {
  const listProduct = {
    "Asus ROG": 25000000,
    "Lenovo Legion": 22000000,
    "Zyrex 1945": 7000000,
    "HP Omen": 20000000,
    "Acer Predator": 21000000,
  };
  // Insert your code heree
  let totalPrice = 0;

  for (let i = 0; i < customer.products.length; i++) {
    let namaProduct = customer.products[i][0];
    let jumlah = customer.products[i][1];

    if (listProduct[namaProduct]) {
      totalPrice += listProduct[namaProduct] * jumlah;
    }
  }
  return totalPrice;
}

// 2. Setelah Function diatas selesai Lanjut ke Function getStock terlebih dahulu
function getStock(items) {
  // Insert your code here
}

// 3. Gunakan kedua function diatas untuk menyelesaikan function shoppingTerus
function shoppingTerus(customer, items) {
  // Insert your code here
}

console.log(shoppingTerus(customer, items));
/*
{
    name: 'Fajrin',
    products: [
        ['Asus ROG', 2],
        ['Lenovo Legion', 3]
    ],
    member: true,
    message: 'Hai pelanggan setia Fajrin! Total Harga yang harus kamu bayar adalah Rp 104400000'
  }
*/

console.log(shoppingTerus());
// Tidak ada customer yang ingin melakukan transaksi
