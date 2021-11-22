import { TreeMenu } from "./TreeMenu.js";

customElements.define("tree-menu", TreeMenu);

document.getElementById("menu").addEventListener("select", e => console.log(e));