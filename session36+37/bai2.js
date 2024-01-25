function thayDoiNoiDung() {
    let nutBam = document.getElementById("nutBam");

    if (nutBam.innerHTML === "ON") {
      nutBam.innerHTML = "OFF";
    } else {
      nutBam.innerHTML = "ON";
    }
  }