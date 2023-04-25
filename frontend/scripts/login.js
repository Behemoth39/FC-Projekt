/*
// can´t get it to work this way
const loginForm = () => {
  app.nav.insertAdjacentHTML(
    "afterend",
    `<div class="loginContainer" id="login-menu">
        <div id="closebtn">X</div>
        <h1 id="h1-sign-in">Sign In</h1>
        <h1 id="h1-sign-up">Sign Up</h1>
        <form id="login-form" class="login-windows">
          <p id="error-msg-login" class="error-msg">Invalid Username/Password!</p>
          <p id="error-msg-create" class="error-msg">
            Username and password needs to be at least 5 characters in lenght!
          </p>
          <input
            id="user"
            class="login-window"
            name="array[]"
            placeholder="User Name"
            type="text"
          />
          <input
            id="pass"
            class="login-window"
            name="array[]"
            placeholder="Password"
            type="password"
          />
          <div class="btn-row">
            <div>
              <input type="button" value="SIGN IN" id="login-btn-in" class="btn" />
            </div>
            <div>
              <input type="button" value="SIGN UP" id="login-btn-up" class="btn" />
            </div>
            <div>
              <input type="button" value="Create Account" id="create-btn" class="btn" />
            </div>
            <div>
              <input type="button" value="Back" id="back-btn" class="btn" />
            </div>
            </div>
            </form>`
  );
};
*/

const app = {
  loginForm: document.getElementById("login-form"),
  loginMenu: document.getElementById("login-menu"),
  login: document.getElementById("log-in"),
  logout: document.getElementById("log-out"),
  signIn: document.getElementById("login-btn-in"),
  signUpBtn: document.getElementById("login-btn-up"),
  h1SignIn: document.getElementById("h1-sign-in"),
  h1SignUp: document.getElementById("h1-sign-up"),
  createBtn: document.getElementById("create-btn"),
  backBtn: document.getElementById("back-btn"),
  errorMsgUser: document.getElementById("error-msg-login"),
  errorMsgCreate: document.getElementById("error-msg-create"),
  //userLogged: localStorage.getItem("userLogged"), to keep user logged in
  savedUsername: [],
  savedPassword: [],
};

// doesent work, why?
function errorMsg() {
  app.errorMsgUser.classList.remove("error-msg");
  setTimeout(function () {
    app.errorMsgUser.classList.add("error-msg");
  }, 3000);
  app.loginForm.user.value = null;
  app.loginForm.pass.value = null;
}

function removeSignInUP() {
  app.signIn.style.display = "none";
  app.signUpBtn.style.display = "none";
  app.h1SignIn.style.display = "none";
  app.h1SignUp.style.display = "block";
  app.createBtn.style.display = "inline-block";
  app.backBtn.style.display = "inline-block";
  app.errorMsgUser.classList.add("error-msg");
}

function addSignInUP() {
  app.signIn.style.display = "inline-block";
  app.signUpBtn.style.display = "inline-block";
  app.createBtn.style.display = "none";
  app.backBtn.style.display = "none";
  app.h1SignIn.style.display = "block";
  app.h1SignUp.style.display = "none";
  app.errorMsgCreate.classList.add("error-msg");
}

app.login.addEventListener("click", (e) => {
  e.preventDefault;
  app.loginMenu.style.display = "flex"; // doesent work, why?
});

document.getElementById("closebtn").addEventListener("click", (e) => {
  e.preventDefault;
  app.loginMenu.style.display = "none";
});

app.signIn.addEventListener("click", (e) => {
  e.preventDefault;
  username = app.loginForm.user.value;
  password = app.loginForm.pass.value;

  for (let i = 0; i < app.savedUsername.length; i++) {
    if (username == app.savedUsername[i] && password == app.savedPassword[i]) {
      app.loginMenu.style.display = "none";
      app.login.style.display = "none";
      app.logout.style.display = "block";
    } else {
      errorMsg();
    }
  }
});

app.signUpBtn.addEventListener("click", (e) => {
  e.preventDefault;
  removeSignInUP();
});

app.backBtn.addEventListener("click", (e) => {
  e.preventDefault;
  addSignInUP();
});

app.createBtn.addEventListener("click", (e) => {
  e.preventDefault;
  if (app.loginForm.user.value.length < 5 || app.loginForm.pass.value.length < 5) {
    app.errorMsgCreate.classList.remove("error-msg");
    setTimeout(function () {
      app.errorMsgCreate.classList.add("error-msg");
    }, 4000);
  } else {
    app.savedUsername.push(app.loginForm.user.value);
    app.savedPassword.push(app.loginForm.pass.value);
    app.loginForm.user.value = null;
    app.loginForm.pass.value = null;
    addSignInUP();
  }
});

/* save locally instead
  
localStorage.setItem('username'); //save in array 
localStorage.setItem('password'); //save in array 
let saveduser =  localStorage.setItem('username');
let savedpass =  localStorage.setItem('password');
localStorage.removeItem('password');
localStorage.clear;  
*/

// My older code to use as reference for the above //
/*document.getElementById("login-btn").addEventListener("click", (e) => {
  e.preventDefault;
  let username = app.loginForm.user.value;
  let password = app.loginForm.pass.value;

  if (username == "Sara" && password == "qwe123") { // <= dont
    localStorage.setItem("userLogged", "true");
    removeLoginMenu();
  } else {
    errorMsg();
  }
});

if (app.userLogged) {
  removeLoginMenu();
} else {
  addLoginMenu();
}

document.getElementById("log-out").addEventListener("click", (e) => {
  e.preventDefault;
  addLoginMenu();
  clearForm();
  localStorage.clear();
});

*/
