const code = localStorage.getItem("selectedUser");

if (code === "emerald") {
  document.body.classList.add("emerald");

  document.getElementById("name").innerText = "To : Cakka";

  document.getElementById("title").innerText = "A letter";

  document.getElementById("message").innerText =
    "Hello, Cakka.This is for you, from ur kindest friend in the world. With this letter, i want to tell you that... You've doing great. Setelah semua rentetan ujian yang kamu lalui, bisa bertahan sejauh ini merupakan arti bahwa kamu pantas mendapat hadiah paling berharga—senyumku (anjay). But yes i know what you've been through all this time. Anger, Sadness, Dissapointment, that u're really don't deserve it. For that I apologize and express my deepest gratitude to you. Makasih udah jadi Cakka yang sekarang, yang ceria, yang dikenal banyak orang, yang selalu jadi sandaran, that's mean a lot to me. Selama kamu berproses, apapun hasilnya semoga dunia selalu berpihak. Nilai, jurusan, kuliah, semoga semua akan seperti yang kamu semogakan. Thank You Cakka. Terima Kasih sudah berjuang dan berjalan sejauh ini. I will always, support you.";
}

if (code === "ruby") {
  document.body.classList.add("ruby");

  document.getElementById("name").innerText = "To : Kak Neysa";

  document.getElementById("title").innerText = "A Letter";

  document.getElementById("message").innerText =
    "Hello, Kak Ney. This is for you, from ur kindest friend in the world. This letter is written with love, and magic. Kak Ney, terima kasih sudah berjuang, berkelana, mencoba hal baru, everything you've been through. Terima Kasih sudah lahir di dunia, di Indonesia, dan berdomisili Tulungagung sehingga aku bisa bertemu Kakak. That's mean a lot to me, for real. Aku jadikan Kakak panutan sebagai orang yang baik, respectful, mindful, dan selalu penuh tangki cintanya. Aku harap, semua kebaikan selalu menyertai kakak. Semua proses kakak, apapun hasilnya semoga akan selalu bisa kakak syukuri. Terima Kasih telah menjadi tempat bersandar, my comfort place, soft spot, everything you are. Jangan pernah sungkan untuk hubungi aku di masa kapanpun, as teammate, as friends, as sister. Selamat berjuang di badai yang lebih besar, semoga kamu akan selalu menjadi nahkoda yang tidak hanya melawan badai, namun juga menguasai pasang surutnya.  ";
}

if (code === "mahogany") {
  document.body.classList.add("mahogany");

  document.getElementById("name").innerText = "To : Kak Rizky";

  document.getElementById("title").innerText = "A Letter";

  document.getElementById("message").innerText =
    "To Kak Rizky. From ur kindest friend in the world. Maybe i don't know much about you. But little did i know that u're a kind person. A person who motivates, becomes a pioneer, and an inspirational person. Sedikit apresiasi untuk kakak, yang telah melalui semua ujian, hal menyedihkan, dan hal hal yang mengecewakan. I really have a big respect for you, about everything. Terutama sebagai senior, terima kasih selalu menjadi pembimbing yang sabar, memberi saran, dan menjadi safe zone untuk semua orang. Thank you for surviving this far, may you always be successful, blessed by God, and may all your wishes come true.";
}

function createLeaf() {
  const leaf = document.createElement("div");

  leaf.innerHTML = "🍂";

  leaf.style.position = "fixed";
  leaf.style.left = Math.random() * window.innerWidth + "px";

  leaf.style.top = "-50px";

  leaf.style.fontSize = Math.random() * 20 + 15 + "px";

  leaf.style.animation = "fallLeaf 8s linear";

  document.body.appendChild(leaf);

  setTimeout(() => {
    leaf.remove();
  }, 8000);
}

setInterval(createLeaf, 800);