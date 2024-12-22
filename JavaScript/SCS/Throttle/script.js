let rect = document.getElementById("rect");
let lastExecutionTime = 0;
const delay = 100;
let lastMouseX = 0;
let imgArr = [
  "01.png",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.webp",
  "07.webp",
  "08.jpg",
  "09.jpg",
  "10.webp",
];

rect.addEventListener("mousemove", (e) => {
  // throttling
  const currentTime = Date.now();
  if (currentTime - lastExecutionTime >= delay) {
    let direction = e.clientX > lastMouseX ? 1 : -1;
    let rotation = direction == 1 ? -10 : 10;
    let move = direction == 1 ? 0 : -100;

    let popCard = document.createElement("div");
    popCard.classList.add("pop");
    popCard.style.transform = `translate(-50%, -100%) rotate(${rotation}deg)`;
    popCard.style.position = "absolute";
    popCard.style.left = `${e.clientX}px`;
    popCard.style.top = `${e.clientY}px`;

    let randomIndex = Math.floor(Math.random() * imgArr.length);
    let randomImg = imgArr[randomIndex];

    let img = document.createElement("img");
    popCard.appendChild(img);
    img.setAttribute("src", randomImg);
    img.style.transform = "translateY(105%)";
    document.body.appendChild(popCard);
    setTimeout(() => {
      img.style.transform = "translateY(-10%)";
      popCard.style.transform = `translate(${move}%, -100%) rotate(${rotation}deg)`;
    }, 100);
    setTimeout(() => {
      popCard.style.overflow = "visible";
    }, 650);
    setTimeout(() => {
      popCard.style.overflow = "hidden";
    }, 1050);
    setTimeout(() => {
      img.style.transform = "translateY(105%)";
    }, 900);
    setTimeout(() => {
      popCard.remove();
    }, 1500);
    lastExecutionTime = currentTime;
    lastMouseX = e.clientX;
  }
});
