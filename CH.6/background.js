const images = [
  "0.jpg", "1.jpeg", "2.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); //appendChild()는 body에 html을 추가하는 것
