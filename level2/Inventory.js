/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */


// Inventory.js

import Item from './Item.js';

class Inventory {
    constructor() {
        this.items = [];
    }

    addItem(id, name, quantity, price) {
        const newItem = new Item(id, name, quantity, price);
        this.items.push(newItem);
    }

    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
    }

    viewItems() {
        return this.items;
    }

    updateItem(id, newName, newQuantity, newPrice) {
        const item = this.items.find(item => item.id === id);
        if (item) {
            item.updateItem(newName, newQuantity, newPrice);
        }
    }
}


// Jangan hapus kode di bawah ini!
export default Inventory;
