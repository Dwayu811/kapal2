// Dapatkan elemen kotak berdasarkan ID
const cursorBox = document.getElementById('cursor-box');

// Tambahkan event listener untuk pergerakan mouse pada seluruh dokumen
document.addEventListener('mousemove', (event) => {
    // event.clientX adalah koordinat X horizontal kursor
    // event.clientY adalah koordinat Y vertikal kursor

    // Perbarui posisi kotak menggunakan CSS 'left' dan 'top'
    // menggunakan style.left dan style.top untuk pembaruan posisi langsung
    cursorBox.style.left = event.clientX + 'px';
    cursorBox.style.top = event.clientY + 'px';
});
