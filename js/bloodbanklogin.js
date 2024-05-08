var db = firebase.database();

function login() {
  let license = document.getElementById("license_log").value;
  let pass = document.getElementById("pass_log").value;

  if (license == "" || pass == "") {
    alert("Please write valid values");
  } else {
    db.ref("bloodbankdata/")
      .once("value", (value) => {
        // console.log(value.val());
        value.forEach((e) => {
          if (e.key == license) {
            var username = e.val();
            if (username.pass == pass) {
              var edit = document.createElement("button");
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
              td.innerHTML = e.val().user;
              td1.innerHTML = e.val().license;
              td2.innerHTML = e.val().number;
              td3.innerHTML = e.val().mail;
              td4.innerHTML = e.val().pass;
              td5.innerHTML = e.val().sts;
              td6.innerHTML = e.val().state;
              td7.innerHTML = e.val().address;
              edit.innerHTML = "Edit Data";
              logout.innerHTML = "Log Out";
              done.innerHTML = "Save Edit";
              welcome.innerHTML = e.val().user;

              edit.addEventListener("click", (e) => {
                alert("Edit data by clicking on what you want to change");
                document.getElementsByClassName("footer1")[0].appendChild(done);
                td.setAttribute("contenteditable", "true");
                td.id = "user";
                td1.setAttribute("contenteditable", "true");
                td1.id = "license1";
                td2.setAttribute("contenteditable", "true");
                td2.id = "number";
                td3.setAttribute("contenteditable", "true");
                td3.id = "mail";
                td4.setAttribute("contenteditable", "true");
                td4.id = "pass";
                td5.setAttribute("contenteditable", "true");
                td5.id = "sts";
                td6.setAttribute("contenteditable", "true");
                td6.id = "state";
                td7.setAttribute("contenteditable", "true");
                td7.id = "address";

                done.addEventListener("click", (e) => {
                  var user = document.getElementById("user").innerHTML;
                  var license1 = document.getElementById("license1").innerHTML;
                  var number = document.getElementById("number").innerHTML;
                  var mail = document.getElementById("mail").innerHTML;
                  var pass = document.getElementById("pass").innerHTML;
                  var sts = document.getElementById("sts").innerHTML;
                  var state = document.getElementById("state").innerHTML;
                  var address = document.getElementById("address").innerHTML;

                  db.ref("bloodbankdata/" + license).set({
                    user: user,
                    license: license1,
                    number: number,
                    mail: mail,
                    pass: pass,
                    sts: sts,
                    state: state,
                    address: address,
                  });
                  alert("Edit done");
                });
              });

              logout.addEventListener("click", (e) => {
                location.href = "./bloodbanklogin.html";
              });

              tr.append(td, td1, td2, td3, td4, td5, td6, td7);

              document.getElementById("root").appendChild(tr);
              document.getElementsByClassName("footer1")[0].appendChild(edit);
              document.getElementsByClassName("footer1")[0].appendChild(logout);

              alert("Login Successful");
            } else {
              alert("Try Again");
              location.href = "./bloodbanklogin.html";
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
