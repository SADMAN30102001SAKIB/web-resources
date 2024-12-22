let rect = document.getElementById("rect");
let circle = document.getElementById("circle");
let rectX = rect.getBoundingClientRect().x;
let rectY = rect.getBoundingClientRect().y;

rect.addEventListener("mouseenter", () => {
  circle.style.transition = "0s";
});

rect.addEventListener("mousemove", (e) => {
  console.log((e.clientY - rectY + 0.5486717224121094) / 6);
  let transX = (50 * ((e.clientX - rectX + 0.125) / 8)) / 100 + 25;
  let transY = (50 * ((e.clientY - rectY + 0.5486717224121094) / 6)) / 100 + 25;
  circle.style.left = `${transX}%`;
  circle.style.top = `${transY}%`;
});

rect.addEventListener("mouseleave", () => {
  circle.style.transition = "0.2s";
  circle.style.left = `50%`;
  circle.style.top = `50%`;
});
