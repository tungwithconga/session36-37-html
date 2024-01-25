function validateForm() {
    let studentId = document.getElementById('studentId').value;
    let studentName = document.getElementById('studentName').value;
    let age = document.getElementById('age').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;

    if (studentId.length !== 6) {
        alert('ID chi co 6 so');
        return;
    }

    if (studentName.trim() === '') {
        alert('Khong tim thay ten hs.');
        return;
    }

    if (age < 18) {
        alert('Phai tren 18 tuoi');
        return;
    }

    let phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(phone)) {
        alert('Khong dung dinh dang');
        return;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Khong tim thay email.');
        return;
    }

    let studentInfo = "Student ID: " + studentId + "<br>" +
                      "Student Name: " + studentName + "<br>" +
                      "Age: " + age + "<br>" +
                      "Phone: " + phone + "<br>" +
                      "Email: " + email;

    document.getElementById('studentInfo').innerHTML = studentInfo;
}