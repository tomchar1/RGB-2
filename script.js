// RGB colors with JS by TOMAS

// Variables to store HTML elements
let previewBTNEl = document.getElementById("preview");
let redINEl = document.getElementById("redIN");
let greenINEl = document.getElementById("greenIN");
let blueINEl = document.getElementById("blueIN");
let rgbStrOutEl = document.getElementById("rgbStrOut");
let displayEl = document.getElementById("display");
// Event listener
document.getElementById("preview").addEventListener("click", rgbPreview);
document.getElementById("prev1").addEventListener("change", previewsize);
document.getElementById("prev2").addEventListener("change", previewsize);

// Event Funtion
function rgbPreview() {
  // Input: get red green blue values
  let rValue = +redINEl.value;
  let gValue = +greenINEl.value;
  let bValue = +blueINEl.value;

  // Validate Colours
  if (rValue < 0) {
    rValue = 0;
    redINEl.value = 0;
  } else if (rValue > 255) {
    rValue = 255;
    redINEl.value = 255;
  }

  // Process: build rgb string rgb (_' _' _)
  let rgbString = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";

  // Output: display rgb string and update the colour preview
  rgbStrOutEl.innerHTML = rgbString;
  displayEl.style.background = rgbString;
}

function previewsize() {
  var heightValue = +document.getElementById("prev1").value;
  var widthValue = +document.getElementById("prev2").value;
  displayEl.style.width = `${heightValue}px`;
  displayEl.style.height = `${widthValue}px`;
}
