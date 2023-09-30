//========================================================================================================================================================================
//========================================================================================================================================================================

let mainForm = document.forms.main;
let minInput = mainForm.minInput;
let maxInput = mainForm.maxInput;

let mainFormInputPlace1 = minInput.placeholder;
let mainFormInputPlace2 = maxInput.placeholder;

minInput.addEventListener("focus", (e) => {
  minInput.placeholder = "";
});

minInput.addEventListener("blur", (e) => {
  minInput.placeholder = mainFormInputPlace1;
});
maxInput.addEventListener("focus", (e) => {
  maxInput.placeholder = "";
});

maxInput.addEventListener("blur", (e) => {
  maxInput.placeholder = mainFormInputPlace2;
});
