function changeBackgroundColor() {
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "cyan",
    "magenta",
    "brown",
    "teal",
    "gray",
    "lime",
  ];
  const body = document.querySelector("body");
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  body.style.backgroundColor = randomColor;
}

setInterval(changeBackgroundColor, 10000);
