// index.js

import Inventory from './Inventory.js';

const inventory = new Inventory();

// Menambah barang
inventory.addItem(1, "Laptop", 5, 15000);
inventory.addItem(2, "Mouse", 10, 500);

// Melihat barang yang ada
console.log("Daftar Barang:", inventory.viewItems());

// Memperbarui barang
inventory.updateItem(1, "Laptop Pro", 4, 15500);
console.log("Daftar Barang setelah pembaruan:", inventory.viewItems());

// Menghapus barang
inventory.removeItem(2);
console.log("Daftar Barang setelah penghapusan:", inventory.viewItems());
