document.getElementById("hesapla").onclick = function () {
  // Girdileri al
  let vize = Number(document.getElementById("vize").value);
  let yilici = Number(document.getElementById("yilici").value);
  let finalNot = Number(document.getElementById("final").value);
  let butunleme = Number(document.getElementById("butunleme").value);
  let devamsiz = document.getElementById("devamsiz").checked;
  let sinavaGirdim = document.getElementById("sinavaGirdim").value;

  // Boşsa yıl içi = vize
  if (!yilici) {
    yilici = vize;
  }

  // Hatalı giriş kontrolü
  if (isNaN(vize) || isNaN(finalNot)) {
    alert("Vize ve final notlarını girmelisin!");
    return;
  }

  if (vize < 0 || vize > 100 || finalNot < 0 || finalNot > 100) {
    alert("Notlar 0 ile 100 arasında olmalı!");
    return;
  }

  // Devamsızlık kontrolü
  if (devamsiz) {
    goster("—", "F1", "Kaldı", "Devamsız olduğun için F1.");
    return;
  }

  // Sınava girmeme kontrolü
  if (sinavaGirdim === "hayir") {
    goster("—", "F2", "Kaldı", "Sınava girmediğin için F2.");
    return;
  }

  // Bütünleme varsa onu kullan
  let sinavNotu = !isNaN(butunleme) && butunleme > 0 ? butunleme : finalNot;

  // Başarı notunu hesapla
  let basari = yilici * 0.4 + sinavNotu * 0.6;

  // Harf notu ve durum
  let harf = "";
  let durum = "";
  let aciklama = "";

  if (sinavNotu < 50) {
    harf = "F3";
    durum = "Kaldı";
    aciklama = "Final/Bütünleme 50'den düşük olduğu için F3.";
  } else if (basari < 60) {
    harf = "F3";
    durum = "Kaldı";
    aciklama = "Başarı notu 60'tan az olduğu için F3.";
  } else {
    if (basari >= 90) harf = "A1";
    else if (basari >= 80) harf = "A2";
    else if (basari >= 70) harf = "B1";
    else if (basari >= 65) harf = "B2";
    else harf = "C";
    durum = "Geçti";
    aciklama = "Tebrikler, geçtin!";
  }

  goster(basari.toFixed(2), harf, durum, aciklama);
};

document.getElementById("sifirla").onclick = function () {
  document.getElementById("sonuc").style.display = "none";
};

// Sonucu ekranda göster
function goster(basari, harf, durum, aciklama) {
  document.getElementById("basari").innerText = "Başarı Notu: " + basari;
  document.getElementById("harf").innerText = "Harf Notu: " + harf;
  document.getElementById("durum").innerText = "Durum: " + durum;
  document.getElementById("aciklama").innerText = "Açıklama: " + aciklama;
  document.getElementById("sonuc").style.display = "block";
}
