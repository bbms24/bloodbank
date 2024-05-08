var db = firebase.database();

function delUser(id) {
  document.getElementById(id).style.display = "none";
  // db.ref("data/" + id).remove();
}

function login() {
  var user = document.getElementById("user_log").value;
  var pass = document.getElementById("pass_log").value;

  db.ref("admin/")
    .once("value", (value) => {
      if (user == value.val().user && pass == value.val().pass) {
        var edit = document.createElement("button");
        var logout = document.createElement("button");
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var td1 = document.createElement("td");
        td.innerHTML = value.val().user;
        td1.innerHTML = value.val().pass;
        edit.innerHTML = "Manage Data";
        logout.innerHTML = "Log Out";
        welcome.innerHTML = value.val().user;

        edit.addEventListener("click", (e) => {
          db.ref("data/").once("value", (value) => {
            console.log(value.val());
            value.forEach((e) => {
              var tr = document.createElement("tr");
              tr.id = e.val().number;
              var delete1 = document.createElement("button");
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
              delete1.innerHTML = "Delete";
              delete1.setAttribute(
                "onClick",
                "delUser(" + e.val().number + ")"
              );
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
                td10,
                delete1
              );

              document.getElementById("root1").appendChild(tr);

              document.getElementsByClassName("container4")[0].style.display =
                "block";
              document.getElementsByClassName("container3")[0].style.display =
                "none";
            });
          });
        });

        logout.addEventListener("click", (e) => {
          location.href = "./adminlogin.html";
        });

        tr.append(td, td1);

        document.getElementById("root").appendChild(tr);
        document.getElementsByClassName("footer1")[0].appendChild(edit);
        document.getElementsByClassName("footer1")[0].appendChild(logout);

        alert("Login Successful");
      } else {
        alert("Try Again");
      }
    })
    .then((onResolved) => {
      document.getElementsByClassName("container")[0].style.display = "none";
      document.getElementsByClassName("header")[0].style.display = "none";
      document.getElementsByClassName("header1")[0].style.display = "block";
      document.getElementsByClassName("container3")[0].style.display = "block";
      document.getElementsByClassName("container5")[0].style.display = "block";
      document.getElementsByClassName("container4")[0].style.display = "none";
    });
}
