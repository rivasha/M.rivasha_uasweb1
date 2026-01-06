function validasiTransaksi() {
    let nama = document.getElementById("nama").value;
    let jumlah = document.getElementById("jumlah").value;
    let kategori = document.getElementById("kategori").value;
    let error = document.getElementById("error");

    if (nama === "" || jumlah === "" || kategori === "") {
        error.innerHTML = "Semua input wajib diisi!";
        error.style.color = "red";
        return false;
    }

    alert("Transaksi berhasil disimpan");
    return true;
}
