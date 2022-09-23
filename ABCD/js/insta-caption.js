function like() {
    var x = document.getElementById("like");
    if (x.className === "far fa-heart fa-lg") {
      x.className = "fas fa-heart fa-lg";
      x.style.color = "red";
    } else {
      x.className = "far fa-heart fa-lg";
      x.style.color = "black";
    }
  }
  function save() {
    var x = document.getElementById("save");
    if (x.className === "far fa-bookmark fa-lg right") {
      x.className = "fas fa-bookmark fa-lg right";
    } else {
      x.className = "far fa-bookmark fa-lg right";
    }
  }
  const img = document.getElementById("post");
  img.addEventListener("dblclick", () => {
    like();
    var heart = document.getElementById("heart");
    heart.style.animation = "likeheart .6s";
    setTimeout(function () {
      heart.style.animation = "none";
    }, 600);
  });
  