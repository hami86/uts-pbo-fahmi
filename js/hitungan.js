
document.getElementById("konversiButton").addEventListener("click", konversiUang);
document.getElementById("resetButton").addEventListener("click", resetForm);

function konversiUang() {
    var jumlahUang = parseInt(document.getElementById("jumlah_uang").value);

    var pecahan1000 = 0;
    var pecahan500 = 0;
    var pecahan100 = 0;
    var pecahan50 = 0;
    var pecahan25 = 0;

    while (jumlahUang >= 1000) {
        pecahan1000++;
        jumlahUang -= 1000;
    }

    while (jumlahUang >= 500) {
        pecahan500++;
        jumlahUang -= 500;
    }

    while (jumlahUang >= 100) {
        pecahan100++;
        jumlahUang -= 100;
    }

    while (jumlahUang >= 50) {
        pecahan50++;
        jumlahUang -= 50;
    }

    while (jumlahUang >= 25) {
        pecahan25++;
        jumlahUang -= 25;
    }

    var hasilKonversi = `
        Pecahan 1000: ${pecahan1000} <br>
        Pecahan 500: ${pecahan500} <br>
        Pecahan 100: ${pecahan100} <br>
        Pecahan 50: ${pecahan50} <br>
        Pecahan 25: ${pecahan25} <br>
    `;

    document.getElementById("hasilKonversi").innerHTML = hasilKonversi;
}


function idealberatbadan(tinggi) {
    var tinggi = Number (document.getElementById("tinggi").value)
    var berat =  Number (tinggi - 100) - ((tinggi - 100) * 0.1);
  document.getElementById("berat").innerHTML = berat + " kg"  
}

function resetForm() {
  document.getElementById("jumlah_uang").value = ""; // Mengatur nilai input kembali kosong
  document.getElementById("hasilKonversi").innerHTML = ""; // Menghapus hasil konversi
 
}

function reset() {
  document.getElementById("tinggi").value = ""; 
  document.getElementById("berat").innerHTML = "";
}
 
 



function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  