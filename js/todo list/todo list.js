const render = () => {
  let boxString = "";
  boxArray.forEach((element, i) => {
    boxString += `<div ondragstart="drag(event)" class="box2" draggable="true" id="box-${
      element.title + i
    }`;
  });
  document.getElementById("container-1").innerHTML = boxString;
};
render();
function allowDrop(event) {
  event.preventDefault();
}
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}
function drop(event) {
  event.preventDefault();
  const boxId = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(boxId));
}
//🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠
function show() {
  document.getElementsByClassName("modalcontainer")[0].classList.add("show");
}
const modalcontainer = document.getElementsByClassName("modalcontainer")[0];
window.onclick = function (event) {
  console.log(event.target);
  if (event.target == modalcontainer) {
    console.log(event.target, " ", modalcontainer);
    modalcontainer.classList.remove("show");
  }
};
const sum = () => {
  let a = 2;
};
a = 3;
console.log(a);
