const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('click', checkMode);

function checkMode() {
  console.log('checking');
  if(checkbox.checked) {
    console.log('light on');
    darkModeOn();
  }
  else{
    console.log('light off');
    darkModeOff();
  }
}

function darkModeOn() {
  document.body.classList.add("light");
}
 
function darkModeOff() {
  document.body.classList.remove("light");
}