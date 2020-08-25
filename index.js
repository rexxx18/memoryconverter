const converttoGB = () => {
  let temp = document.getElementById("memory").value;
  temp = parseFloat(temp);

  if (isNaN(temp)) {
    console.log("this is not avalid input");
    return;
  }
  console.log("Button CLicked");
  let result = temp / 1073741824;
  let resulttext = `the converted memory in GB is ${result}`;
  document.getElementById("res").innerHTML = resulttext;
};
