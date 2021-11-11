function init() {
    const playerTitle = document.querySelector(".playerTitle");
    const rematchBtn = document.querySelector(".rematch");
    const Square = document.querySelectorAll(".box");
    const gridArray = Array.from(Square);
    let tracking = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let currentPlayer = "playerX";
  
    
    Square.forEach((box) =>
     box.addEventListener("click", (e) => {
       
        const index = gridArray.indexOf(e.target);
        if (
          Square[index].classList.contains("playerX") ||
          Square[index].classList.contains("computer")
        ) {
          return;
        }
  
        Square[index].classList.add("playerX");
        const spliceNr = tracking.indexOf(index + 1);
        
        tracking.splice(spliceNr, 1);
  
        
        if (winCheck("playerX", Square)) {
          playerTitle.innerHTML = "Player wins!";
          document.body.classList.add("over");
          return;
        }
  
       
        if (tracking.length === 0) {
          playerTitle.innerHTML = "Tie :(";
          document.body.classList.add("Game Over");
          return;
        }
  
        
        console.log("computer move");
        const random = Math.floor(Math.random() * tracking.length);
        const computerIndex = tracking[random];
        Square[computerIndex - 1].classList.add("computer");
  
        
        tracking.splice(random, 1);
  
        
        if (winCheck("computer", Square)) {
          playerTitle.innerHTML = "Computer Wins :(";
          document.body.classList.add("Game Over");
          return;
        }
      })
    );
  
    
    rematchBtn.addEventListener("click", () => {
      location.reload();
    });
  }
  
  
  function winCheck(player, Square) {
    
    function check(pos1, pos2, pos3) {
      
      if (
        Square[pos1].classList.contains(player) &
        Square[pos2].classList.contains(player) &
        Square[pos3].classList.contains(player)
      ) {
        return true;
      } else {
        return false;
      }
    }
  
         if (check(0, 3, 6)) return true;
    else if (check(1, 4, 7)) return true;
    else if (check(2, 5, 8)) return true;
    else if (check(0, 1, 2)) return true;
    else if (check(3, 4, 5)) return true;
    else if (check(6, 7, 8)) return true;
    else if (check(0, 4, 8)) return true;
    else if (check(2, 4, 6)) return true;
  }
  
  init();

