function thayDoiMau() {
    var inputText = document.getElementById("inputText");

    if (inputText.value.trim() !== "") {
      inputText.style.backgroundColor = "white";
    } else {
      inputText.style.backgroundColor = "yellow";
    }
  }

  function themPhanTu() {
    var inputText = document.getElementById("inputText");
    var danhSachDiv = document.getElementById("danhSach");

    var inputValue = inputText.value.trim();

    if (inputValue !== "") {
      var newItem = document.createElement("div");
      newItem.classList.add("item");
      newItem.innerText = inputValue;

      danhSachDiv.appendChild(newItem);

      inputText.value = "";
      inputText.style.backgroundColor = "yellow";
    }
  }