// Membuat fungsi untuk validasi email

function validasiEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
}

// Mendapatkan elemen input email dan pesan notifikasi
const emailInput = document.getElementById("email");
const notifEmail = document.getElementById("notifEmail");

// Menambahkan event listener ke input email saat blur (saat fokus hilang)
emailInput.addEventListener("blur", function () {
  const emailValue = emailInput.value;

  if (!validasiEmail(emailValue)) {
    notifEmail.textContent =
      "(Alert) - Alamat email yang dimasukkan tidak valid, mohon periksa kembali";
  } else {
    notifEmail.textContent = ""; // Menghapus pesan notifikasi jika email memang valid
  }
});

// Script untuk Accordion

const accordion = document.getElementsByClassName("accordion"); // Definisikan variabel, ambil class accordion

// Buat perulangan, agar script tahu mana yang akan diklik, panel bisa muncul
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    const panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
