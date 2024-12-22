import style from "./style3.module.css";
import style2 from "./style2.module.css";

let body = document.querySelector("body");

let header = document.createElement("h2");
header.innerText = "World";
header.setAttribute("class", style.footer + " " + style2.header);

body.appendChild(header);
