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
  var mail = document.getElementById("mail").value;
  var pass = document.getElementById("pass").value;
  let male = document.getElementById("male");
  let female = document.getElementById("female");
  let other = document.getElementById("other");

  let gender = "";
  if (male.selected == true) {
    gender = "male";
  } else if (female.selected == true) {
    gender = "female";
  } else if (other.selected == true) {
    gender = "other";
  } else if (gender == "") {
    return false;
  }

  document.getElementById("gender").value;

  let dob = document.getElementById("birth").value;
  let blood = "";
  if (A.selected == true) {
    blood = "A+";
  } else if (O.selected == true) {
    blood = "O+";
  } else if (B.selected == true) {
    blood = "B+";
  } else if (AB.selected == true) {
    blood = "AB+";
  } else if (An.selected == true) {
    blood = "A-";
  } else if (On.selected == true) {
    blood = "O-";
  } else if (Bn.selected == true) {
    blood = "B-";
  } else if (ABn.selected == true) {
    blood = "AB-";
  }

  document.getElementById("blood").value;

  let number = document.getElementById("number").value;
  let sts = document.getElementById("sts").value;
  let state = document.getElementById("state").value;
  let address = document.getElementById("address").value;
  let date = document.getElementById("date").value;

  if (
    user == "" ||
    mail == "" ||
    pass == "" ||
    gender == "" ||
    dob == "" ||
    blood == "" ||
    number == "" ||
    number.value.length !== 10 ||
    sts == "" ||
    state == "" ||
    address == "" ||
    date == ""
  ) {
    alert("Please enter valid values");
  } else {
    db.ref("data/" + number)
      .set({
        user: user,
        mail: mail,
        pass: pass,
        gender: gender,
        dob: dob,
        blood: blood,
        number: number,
        sts: sts,
        state: state,
        address: address,
        date: date,
      })

      // db.ref("users/")
      //   .push({
      //     user: user,
      //     mail: mail,
      //     pass: pass,
      //     gender: gender,
      //     dob: dob,
      //     blood: blood,
      //     number: number,
      //     sts: sts,
      //     state: state,
      //     address: address,
      //     date: date,
      //   })
      .then((onResolved) => {
        alert("Register Success");
      });
    reset_input();
  }
}

function reset_input() {
  document.querySelectorAll("input").value = "";
}
