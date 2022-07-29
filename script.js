const fNameInput = document.querySelector("#exampleFormControlInput1");
const lNameInput = document.querySelector("#exampleFormControlInput2");
const passInput = document.querySelector("#exampleFormControlInput3");
const cPassInput = document.querySelector("#exampleFormControlInput4");
const emailInput = document.querySelector("#exampleFormControlInput5");
const sendBtn = document.querySelector(".submit");
const imgInput = document.querySelector("#formFile");
const card = document.querySelector(".cards");
const letters = /^[A-Za-z]*$/;

class User {
  firstName;
  lastName;
  pass;
  cPass;
  static email;
  constructor(firstName, lastName, pass, cPass, email) {
    if (firstName.match(letters) && lastName.match(letters)) {
      this.firstName = firstName;
      this.lastName = lastName;
    } else {
      this.firstName = undefined;
      this.lastName = undefined;
    }
    if (pass.length > 6 && pass.length < 12) {
      if (pass === cPass) {
        this.pass = pass;
        this.cPass = pass;
      } else {
        this.pass = undefined;
        this.cPass = undefined;
      }
    } else {
      this.pass = undefined;
    }
    this.email = email;
  }
}

let user = new User(
  "reef",
  "goldberg",
  "12345432",
  "12345432",
  "reefgb23@gmail.com"
);

console.log("user: ", user);

sendBtn.addEventListener("click", () => {
  if (fNameInput.value.match(letters) && lNameInput.value.match(letters)) {
    user.firstName = fNameInput.value;
    user.lastName = lNameInput.value;
  }
  if (
    passInput.value.toString().length > 6 &&
    passInput.value.toString().length < 12
  ) {
    if (passInput.value === cPassInput.value) {
      user.pass = passInput.value;
    } else {
      console.log("Passwords does not match!");
      alert("Passwords does not match!");
    }
  }
  if (
    emailInput.value.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    user.email = emailInput.value;
  } else {
    console.log("Invalid email");
    alert("Invalid email");
  }

  card.innerHTML += `
  <div class="card m-3" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Name: ${fNameInput.value} ${lNameInput.value}</h5>
    <p class="card-text">Some quick example text.</p>
    <a href="mailto:${emailInput.value}" class="btn btn-primary">Mail me</a>
  </div>
</div>
`;
  console.log("user: ", user);
});
