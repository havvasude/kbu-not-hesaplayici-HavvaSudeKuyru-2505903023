# kbu-not-hesaplayici-HavvaSudeKuyru-2505903023

Bu proje, *Karabük Üniversitesi* öğrencileri için yapılmış basit bir not hesaplama programıdır.  
JavaScript ile yazılmıştır.  
Vize, final veya bütünleme notunu girerek dersin *geçip geçmediğini* görebilirsin.

---

# Ne işe yarar?

Bu site sayesinde;
- Vize, final veya bütünleme notunu girersin.
- İstersen “devamsızım” veya “sınava girmedim” seçeneğini işaretlersin.
- “Hesapla” tuşuna bastığında sistem sana:
  - Başarı notunu,
  - Harf notunu (A1, A2, B1, B2, C, F1, F2, F3),
  - Geçti mi kaldı mı durumunu
  - ve kısa açıklamayı gösterir.

---

# Nasıl hesaplıyor?

KBÜ yönetmeliğine göre:

- *Başarı notu = (Yıl içi × 0.4) + (Final veya Bütünleme × 0.6)*
- *Geçme şartları:*
  - Final veya bütünleme notu *en az 50 olmalı*
  - Başarı notu *en az 60 olmalı*

Eğer bu şartlar sağlanmazsa F3 olur (kaldı).  
Ayrıca:
- Devamsız → *F1*
- Sınava girmedim → *F2*

---

# Harf notu aralıkları

| Aralık | Harf | Katsayı |
|:-------:|:----:|:--------:|
| 90–100 | A1 | 4.00 |
| 80–89 | A2 | 3.50 |
| 70–79 | B1 | 3.00 |
| 65–69 | B2 | 2.75 |
| 60–64 | C | 2.50 |

---

# Test Örnekleri

| Yıl içi | Final | Bütünleme | Sonuç |
|----------|--------|-------------|--------|
| 70 | 60 | — | Başarı = 64 → *C*, Geçti |
| 95 | 48 | — | Final < 50 → *F3*, Kaldı |
| 58 | — | 55 | Başarı = 56.2 → *F3*, Kaldı |
| (Devamsız) | — | — | *F1*, Kaldı |
| (Sınava girmedi) | — | — | *F2*, Kaldı |

---

# Nasıl kullanılır?

1. index.html dosyasını aç (tarayıcıda).
2. Notlarını gir.
3. “Hesapla” butonuna tıkla.
4. Sonuç kartında notunu ve durumunu gör.
5. “Sıfırla” butonu ile tekrar deneyebilirsin.

---

#Teknolojiler
- HTML  
- CSS  
- JavaScript  

Hiçbir kütüphane (React, Bootstrap vs.) kullanılmadı.  
Tamamen temel web teknolojileriyle yazıldı.

yapay zekadan yardım alındı

---

## 🌐 Canlı Demo
🟢 [Canlı sayfa linkini buraya yazacaksın]  
(Örnek: https://kullaniciadi.github.io/kbu-not-hesaplayici)

---

## ✏ Hazırlayan
Havva Sude Kuyru -2505903023

---
