let inputTextElement = document.getElementById("inputText");
let outputDivElement = document.getElementById("outputDiv");

  inputTextElement.addEventListener("input", function() {
    outputDivElement.innerText = "Nội dung: " + inputTextElement.value;
  });