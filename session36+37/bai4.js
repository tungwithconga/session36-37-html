// Cách 1:
document.getElementById("input1").addEventListener("input", tinhTong);
document.getElementById("input2").addEventListener("input", tinhTong);

function tinhTong() {
  let soThuNhat = parseFloat(document.getElementById("input1").value) || 0;
  let soThuHai = parseFloat(document.getElementById("input2").value) || 0;

  document.getElementById("output").value = "Cách 1: " + (soThuNhat + soThuHai);
}

// Cách 2:
document.getElementById("input1").addEventListener("input", function() {
  let soThuNhat = parseFloat(document.getElementById("input1").value) || 0;
  let soThuHai = parseFloat(document.getElementById("input2").value) || 0;

  document.getElementById("output").value = "Cách 2: " + (soThuNhat + soThuHai);
});

document.getElementById("input2").addEventListener("input", function() {
  let soThuNhat = parseFloat(document.getElementById("input1").value) || 0;
  let soThuHai = parseFloat(document.getElementById("input2").value) || 0;

  document.getElementById("output").value = "Cách 2: " + (soThuNhat + soThuHai);
});