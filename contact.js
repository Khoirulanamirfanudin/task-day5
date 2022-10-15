function showData() {
  let showName = document.getElementById("input-name").value;
  let showEmail = document.getElementById("input-email").value;
  let showPhone = document.getElementById("input-phone").value;
  let showSubject = document.getElementById("input-subject").value;
  let showMessage = document.getElementById("input-message").value;

  console.log(showName);
  console.log(showEmail);
  console.log(showPhone);

  if (showName == "") {
    return alert("Nama belum diisi");
  }

  if (showEmail == "") {
    return alert("Email belum diisi");
  }

  if (showPhone == "") {
    return alert("Phone belum diisi");
  }

  if (showSubject == "") {
    return alert("Subject belum diisi");
  }

  let emailReciever = "choianam75@gmail.com";
  let a = document.createElement("a");
  a.href = `mailto:${emailReciever}?Subject=${showSubject}&body= hello, my name is${showName},${showMessage}`;

  a.click();
}
