var db = firebase.database();

function get_data() {
  var sts = document.getElementById("sts").value;
  var city = document.getElementById("state").value;
  var blood = document.getElementById("blood").value;
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

  db.ref("data/")
    .once("value", (value) => {
      console.log(value.val());
      value.forEach((ele) => {
        if (
          ele.val().sts == sts &&
          ele.val().state == city &&
          ele.val().blood == blood
        ) {
          var tr = document.createElement("tr");
          var td = document.createElement("td");
          var td1 = document.createElement("td");
          var td2 = document.createElement("td");
          var td3 = document.createElement("td");
          var td4 = document.createElement("td");
          var td5 = document.createElement("td");
          td.innerHTML = ele.val().user;
          td1.innerHTML = ele.val().number;
          td2.innerHTML = ele.val().mail;
          td3.innerHTML = ele.val().blood;
          td4.innerHTML = ele.val().state;
          td5.innerHTML = ele.val().sts;
          tr.append(td, td1, td2, td3, td4, td5);

          document.getElementById("root").appendChild(tr);
        } else {
          alert("Data not available");
          window.location.href = "searchdonor.html";
        }
      });
    })
    .then((onResolved) => {
      document.getElementById("container").style.display = "none";
      document.getElementsByClassName("container4")[0].style.display = "block";
    });
}

function get_data1() {
  var sts = document.getElementById("sts").value;
  var city = document.getElementById("state").value;

  db.ref("bloodbankdata/")
    .once("value", (value) => {
      console.log(value.val());
      value.forEach((ele) => {
        if (ele.val().sts == sts && ele.val().state == city) {
          var tr = document.createElement("tr");
          var td = document.createElement("td");
          var td1 = document.createElement("td");
          var td2 = document.createElement("td");
          var td3 = document.createElement("td");
          var td4 = document.createElement("td");
          var td5 = document.createElement("td");
          td.innerHTML = ele.val().user;
          td1.innerHTML = ele.val().number;
          td2.innerHTML = ele.val().mail;
          td3.innerHTML = ele.val().state;
          td4.innerHTML = ele.val().sts;
          td5.innerHTML = ele.val().address;
          tr.append(td, td1, td2, td3, td4, td5);

          document.getElementById("root").appendChild(tr);
        } else {
          alert("Data not available");
          window.location.href = "searchbloodbank.html";
        }
      });
    })
    .then((onResolved) => {
      document.getElementById("container").style.display = "none";
      document.getElementsByClassName("container4")[0].style.display = "block";
    });
}
