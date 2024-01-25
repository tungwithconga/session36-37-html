function validateAnswer() {
    var answer = document.getElementById('userAnswer').value;

    if (answer.length > 10) {
        document.getElementById('result').innerHTML = 'Khong hop le';
    } else {
        document.getElementById('result').innerHTML = 'Khong hop le';
    }
}