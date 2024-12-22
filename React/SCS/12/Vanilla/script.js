import style from "./style1.module.css";
import style2 from "./style2.module.css";

let body = document.querySelector("body");

let header = document.createElement("h1");
header.innerText = "Hello";
header.setAttribute("class", style.header + " " + style2.header);

body.appendChild(header);
