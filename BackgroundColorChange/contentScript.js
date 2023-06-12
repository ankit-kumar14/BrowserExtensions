function changeBackgroundColor() {
  const colors = ["red", "blue", "green", "yellow", "orange", "purple"];
  const body = document.querySelector("body");
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  body.style.backgroundColor = randomColor;
}

// Change background color every 10 seconds
setInterval(changeBackgroundColor, 10000);
