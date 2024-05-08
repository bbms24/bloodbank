var db = firebase.database();

let form = document.getElementById("helloo");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (form.checkValidity() === false) {
    form.reportValidity();
    return;
  }
});

function register() {
  var user = document.getElementById("user").value;
  var license = document.getElementById("license").value;
  let number = document.getElementById("number").value;
  var mail = document.getElementById("mail").value;
  var pass = document.getElementById("pass").value;
  let sts = document.getElementById("sts").value;
  let state = document.getElementById("state").value;
  let address = document.getElementById("address").value;

  if (
    user == "" ||
    license == "" ||
    mail == "" ||
    pass == "" ||
    number == "" ||
    sts == "" ||
    state == "" ||
    address == ""
  ) {
    alert("Please enter valid values");
  } else {
    db.ref("bloodbankdata/" + license)
      .set({
        user: user,
        license: license,
        mail: mail,
        pass: pass,
        number: number,
        sts: sts,
        state: state,
        address: address,
      })
      .then((onResolved) => {
        alert("Register Success");
      });
    reset_input();
  }
}

function reset_input() {
  document.querySelectorAll("input").value = "";
}
