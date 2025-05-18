// Menampilkan 86 gambar
const gallery = document.getElementById("gallery");

for (let i = 1; i <= 86; i++) {
  const img = document.createElement("img");
  img.src = `images/${i}.jpeg`; // Pastikan file: images/1.jpeg sampai 86.jpeg
  img.alt = `Kenangan ke-${i}`;
  gallery.appendChild(img);
}

// Scroll muncul perlahan
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

// Pastikan dipanggil setelah gambar selesai dibuat
setTimeout(() => {
  document.querySelectorAll('.gallery img').forEach(img => {
    observer.observe(img);
  });
}, 100); // Tunggu sedikit agar semua <img> muncul dulu

// Lightbox (popup)
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");

gallery.addEventListener("click", e => {
  if (e.target.tagName === 'IMG') {
    lightboxImg.src = e.target.src;
    lightbox.classList.add("active");
  }
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});
