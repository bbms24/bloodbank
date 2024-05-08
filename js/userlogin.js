var db = firebase.database();

function login() {
  var number = document.getElementById("number_log").value;
  var pass = document.getElementById("pass_log").value;

  if (number == "" || pass == "") {
    alert("Please write valid values");
  } else {
    db.ref("data/")
      .once("value", (value) => {
        console.log(value.val());
        value.forEach((e) => {
          if (e.key != number) {
          } else {
            if (e.key == number) {
              var username = e.val();
              if (username.pass != pass) {
                alert("Please write valid password");
              } else {
                if (username.pass == pass) {
                  var edit = document.createElement("button");
                  var donate = document.createElement("button");
                  var logout = document.createElement("button");
                  var done = document.createElement("button");
                  var tr = document.createElement("tr");
                  var td = document.createElement("td");
                  var td1 = document.createElement("td");
                  var td2 = document.createElement("td");
                  var td3 = document.createElement("td");
                  var td4 = document.createElement("td");
                  var td5 = document.createElement("td");
                  var td6 = document.createElement("td");
                  var td7 = document.createElement("td");
                  var td8 = document.createElement("td");
                  var td9 = document.createElement("td");
                  var td10 = document.createElement("td");
                  td.innerHTML = e.val().user;
                  td1.innerHTML = e.val().gender;
                  td2.innerHTML = e.val().dob;
                  td3.innerHTML = e.val().blood;
                  td4.innerHTML = e.val().number;
                  td5.innerHTML = e.val().mail;
                  td6.innerHTML = e.val().pass;
                  td7.innerHTML = e.val().sts;
                  td8.innerHTML = e.val().state;
                  td9.innerHTML = e.val().address;
                  td10.innerHTML = e.val().date;
                  edit.innerHTML = "Edit Data";
                  done.innerHTML = "Save Edit";
                  donate.innerHTML = "Donate Blood";
                  logout.innerHTML = "Log Out";
                  welcome.innerHTML = e.val().user;

                  edit.addEventListener("click", (e) => {
                    alert("Edit data by clicking on what you want to change");
                    document
                      .getElementsByClassName("footer1")[0]
                      .appendChild(done);
                    td.setAttribute("contenteditable", "true");
                    td.id = "user";
                    td1.setAttribute("contenteditable", "true");
                    td1.id = "gender";
                    td2.setAttribute("contenteditable", "true");
                    td2.id = "dob";
                    td3.setAttribute("contenteditable", "true");
                    td3.id = "blood";
                    td4.setAttribute("contenteditable", "true");
                    td4.id = "number1";
                    td5.setAttribute("contenteditable", "true");
                    td5.id = "mail";
                    td6.setAttribute("contenteditable", "true");
                    td6.id = "pass";
                    td7.setAttribute("contenteditable", "true");
                    td7.id = "sts";
                    td8.setAttribute("contenteditable", "true");
                    td8.id = "state";
                    td9.setAttribute("contenteditable", "true");
                    td9.id = "address";
                    td10.setAttribute("contenteditable", "true");
                    td10.id = "date";

                    done.addEventListener("click", (e) => {
                      var user = document.getElementById("user").innerHTML;
                      var gender = document.getElementById("gender").innerHTML;
                      var dob = document.getElementById("dob").innerHTML;
                      var blood = document.getElementById("blood").innerHTML;
                      var number1 =
                        document.getElementById("number1").innerHTML;
                      var mail = document.getElementById("mail").innerHTML;
                      var pass = document.getElementById("pass").innerHTML;
                      var sts = document.getElementById("sts").innerHTML;
                      var state = document.getElementById("state").innerHTML;
                      var address =
                        document.getElementById("address").innerHTML;
                      var date = document.getElementById("date").innerHTML;

                      db.ref("data/" + number).set({
                        user: user,
                        mail: mail,
                        pass: pass,
                        gender: gender,
                        dob: dob,
                        blood: blood,
                        number: number1,
                        sts: sts,
                        state: state,
                        address: address,
                        date: date,
                      });
                      alert("Edit done");
                    });
                  });

                  donate.addEventListener("click", (e) => {
                    location.href = "./where.html";
                  });

                  logout.addEventListener("click", (e) => {
                    location.href = "./userlogin.html";
                  });

                  tr.append(
                    td,
                    td1,
                    td2,
                    td3,
                    td4,
                    td5,
                    td6,
                    td7,
                    td8,
                    td9,
                    td10
                  );

                  document.getElementById("root").appendChild(tr);
                  document
                    .getElementsByClassName("footer1")[0]
                    .appendChild(edit);
                  document
                    .getElementsByClassName("footer1")[0]
                    .appendChild(donate);
                  document
                    .getElementsByClassName("footer1")[0]
                    .appendChild(logout);

                  document.getElementsByClassName(
                    "container"
                  )[0].style.display = "none";
                  document.getElementsByClassName("header")[0].style.display =
                    "none";
                  document.getElementsByClassName("header1")[0].style.display =
                    "block";
                  document.getElementsByClassName(
                    "container3"
                  )[0].style.display = "block";

                  alert("Login Successful");
                } else {
                  alert("Try Again");
                  location.href = "./userlogin.html";
                }
              }
            }
          }
        });
      })
      .then((onResolved) => {
        document.getElementsByClassName("container")[0].style.display = "none";
        document.getElementsByClassName("header")[0].style.display = "none";
        document.getElementsByClassName("header1")[0].style.display = "block";
        document.getElementsByClassName("container3")[0].style.display =
          "block";
      });
  }
}
