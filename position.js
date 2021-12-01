const rookBlack = "asset/rook_black.png"
const knightBlack = "asset/knight_black.png"
const bishopBlack = "asset/bishop_black.png"
const queenBlack = "asset/queen_black.png"
const kingBlack = "asset/king_black.png"
const pawnBlack = "asset/pawn_black.png"

const rookWhite = "asset/rook_white.png"
const knightWhite = "asset/knight_white.png"
const bishopWhite = "asset/bishop_white.png"
const queenWhite = "asset/queen_white.png"
const kingWhite = "asset/king_white.png"
const pawnWhite = "asset/pawn_white.png"

function creep(id, url) {
  const square = document.getElementById(id);
  const img = document.createElement("img")
  img.src = url
  square.appendChild(img)
}
creep("a8", rookBlack)
creep("b8", knightBlack)
creep("c8", bishopBlack)
creep("d8", queenBlack)
creep("e8", kingBlack)
creep("f8", bishopBlack)
creep("g8", knightBlack)
creep("h8", rookBlack)
creep("a7", pawnBlack)
creep("b7", pawnBlack)
creep("c7", pawnBlack)
creep("d7", pawnBlack)
creep("e7", pawnBlack)
creep("f7", pawnBlack)
creep("g7", pawnBlack)
creep("h7", pawnBlack)

creep("a1", rookWhite)
creep("b1", knightWhite)
creep("c1", bishopWhite)
creep("d1", queenWhite)
creep("e1", kingWhite)
creep("f1", bishopWhite)
creep("g1", knightWhite)
creep("h1", rookWhite)
creep("a2", pawnWhite)
creep("b2", pawnWhite)
creep("c2", pawnWhite)
creep("d2", pawnWhite)
creep("e2", pawnWhite)
creep("f2", pawnWhite)
creep("g2", pawnWhite)
creep("h2", pawnWhite)