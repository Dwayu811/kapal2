const img = document.getElementById("cursor-img");

document.addEventListener("mousemove", (e) => {
    img.style.left = e.pageX + "px";
    img.style.top = e.pageY + "px";
});

// Klik = lempar bom
const gameArea = document.getElementById("game-area")

document.addEventListener("click", (e) => {
  createBomb(e.pageX, e.pageY);
});

function createBomb(x, y) {
  const bomb = document.createElement("div");
  bomb.className = "bomb";
  bomb.style.left = x + "px";
  bomb.style.top  = y + "px";
  gameArea.appendChild(bomb);

 let speed = 10; // kecepatan peluru

  const shoot = setInterval(() => {
    y -= speed;
    bomb.style.top = y + "px";

    // Hapus kalau keluar layar
    if (y > window.innerWidth) {
      clearInterval(shoot);
      bomb.remove();
    }
  }, 16);
}