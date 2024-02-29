function registerUser() {
  let name = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;
  let personalID = document.getElementById("personalID").value;
  let birth = document.getElementById("birth").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let mobileNumber = document.getElementById("mobileNumber").value;
  let gender = document.getElementById("gender").value;
  let address = document.getElementById("address").value;

  let userData = localStorage.getItem("userData");

  let person = {
    name,
    surname,
    personalID,
    birth,
    email,
    password,
    mobileNumber,
    gender,
    address,
  };

  if (userData !== null && userData.length) {
    userData = JSON.parse(userData);
    userData.push(person);
    localStorage.setItem("userData", JSON.stringify(userData));
  } else {
    userData = [];
    userData.push(person);

    localStorage.setItem("userData", JSON.stringify(userData));
  }
}

function userLogin() {
  let personalID = document.getElementById("personId").value;
  let password = document.getElementById("psw").value;
  let log = document.querySelector(".log");
  let message = document.getElementById("message");

  let users = localStorage.getItem("userData");

  if (users) {
    users = JSON.parse(users);

    let foundUser;
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].personalID === personalID &&
        users[i].password === password
      ) {
        foundUser = users[i];
        break;
      }
    }
    if (!foundUser) {
      message.style.color = "red";
      message.textContent = `Invalid personal ID or password`;
      log.addEventListener("submit", function (event) {
        event.preventDefault();
      });
    }
  } else {
    message.style.color = "red";
    message.textContent = `Invalid personal ID or password`;
    log.addEventListener("submit", function (event) {
      event.preventDefault();
    });
  }
}
