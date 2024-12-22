let rect = document.getElementById("rect");

rect.addEventListener("mouseenter", () => {
  rect.style.transition = "0s";
});

rect.addEventListener("mousemove", (e) => {
  let mouseInPosition = e.clientX - rect.getBoundingClientRect().x;
  let halfWidthRect = rect.getBoundingClientRect().width / 2;

  if (mouseInPosition <= halfWidthRect) {
    let rb = (mouseInPosition / halfWidthRect) * 255;
    console.log(rb);
    rect.style.backgroundColor = `rgb(${rb}, 255, ${rb})`;
  } else {
    let rg =
      ((rect.getBoundingClientRect().width - mouseInPosition) / halfWidthRect) *
      255;
    rect.style.backgroundColor = `rgb(${rg}, ${rg}, 255)`;
  }
});

rect.addEventListener("mouseleave", () => {
  rect.style.transition = "0.5s";
  rect.style.backgroundColor = `rgb(255, 255, 255)`;
});
