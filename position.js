const rookBlack = "asset/rook_black.png"

function creep(id, url) {
  const square = document.getElementById(id);
  const img = document.createElement("img")
  img.src = url
  square.appendChild(img)
}
creep("a8", rookBlack)
