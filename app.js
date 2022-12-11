const gbUsed = document.querySelector(".gb-num");
const range = document.querySelector(".range");
const gbLeft = document.querySelector(".gb-usageleft");

range.addEventListener("input", function (e) {
  gbUsed.innerText = range.value;
  gbLeft.innerText = 1000 - range.value;
});
