// //https://javascript.info/mouse-drag-and-drop

// //https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
const square = document.querySelector(".square");
const ctrl = document.querySelector(".square-display");
let isDown = false;
const borderValues = {
  one: "",
  two: "",
  three: "",
  four: "",
  five: "",
  six: "",
  seven: "",
  eight: "",
};
const borderRadiusDisplay = document.querySelector("code");
let ctrl1 = document.querySelector(".ctrl-1");
let ctrl2 = document.querySelector(".ctrl-2");
let ctrl3 = document.querySelector(".ctrl-3");
let ctrl4 = document.querySelector(".ctrl-4");
let ctrl5 = document.querySelector(".ctrl-5");
let ctrl6 = document.querySelector(".ctrl-6");
let ctrl7 = document.querySelector(".ctrl-7");
let ctrl8 = document.querySelector(".ctrl-8");

ctrl.addEventListener("mousedown", (e) => {
  isDown = true;
  e.target.classList.add("active");
});

ctrl.addEventListener("mouseleave", (e) => {
  isDown = false;
  e.target.classList.remove("active");
});

ctrl.addEventListener("mouseup", (e) => {
  isDown = false;
  e.target.classList.remove("active");
  borderValues.one = Math.floor(
    (Number(ctrl1.style.top.replace("px", "")) / 600) * 100
  );
  borderValues.two = Math.floor(
    (Number(ctrl2.style.left.replace("px", "")) / 600) * 100
  );
  borderValues.three = Math.floor(
    (Number(ctrl3.style.left.replace("px", "")) / 600) * 100
  );
  borderValues.four = Math.floor(
    (Number(ctrl4.style.top.replace("px", "")) / 600) * 100
  );
  borderValues.five = Math.floor(
    (Number(ctrl5.style.top.replace("px", "")) / 600) * 100
  );
  borderValues.six = Math.floor(
    (Number(ctrl6.style.left.replace("px", "")) / 600) * 100
  );
  borderValues.seven = Math.floor(
    (Number(ctrl7.style.top.replace("px", "")) / 600) * 100
  );
  borderValues.eight = Math.floor(
    (Number(ctrl8.style.left.replace("px", "")) / 600) * 100
  );
  let borderString = `${borderValues.one}% ${borderValues.two}% ${borderValues.three}% ${borderValues.four}% `;
  square.style.borderRadius = borderString;
  console.log(borderValues);
  console.log(typeof borderString);
});

ctrl.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  let width = 600;
  let height = 600;

  if (
    e.target.classList.contains("ctrl-2") |
    e.target.classList.contains("ctrl-3") |
    e.target.classList.contains("ctrl-6") |
    e.target.classList.contains("ctrl-8")
  ) {
    if (width > e.x > 0) {
      e.target.style.left = `${e.x}px`;
    }
    //console.log("slide");
  }
  if (
    e.target.classList.contains("ctrl-1") |
    e.target.classList.contains("ctrl-4") |
    e.target.classList.contains("ctrl-5") |
    e.target.classList.contains("ctrl-7")
  ) {
    if (height > e.y > 0) {
      e.target.style.top = `${e.y}px`;
    }
  }
  if ((e.target = ctrl1)) {
    borderRadiusDisplay.innerText = Number(ctrl1.style.top / 600) * 100;
  }
});
