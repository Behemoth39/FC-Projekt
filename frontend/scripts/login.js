/*
const loginForm = () => {
  app.nav.insertAdjacentHTML(
    "afterend",
    `<div class="loginContainer">
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
          <input
            type="button"
            value="Create Account"
            id="create-btn"
            class="btn"
          />
        </div>
      </div>
    </form>`
  );
};*/

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
  errorMsgUser: document.getElementById("error-msg-login"),
  errorMsgCreate: document.getElementById("error-msg-create"),
  userLogged: localStorage.getItem("userLogged"),
  savedUsername: [],
  savedPassword: [],
};

function errorMsg() {
  app.errorMsgUser.classList.remove("error-msg");
  setTimeout(function () {
    app.errorMsgUser.classList.add("error-msg");
  }, 2000);
  app.loginForm.user.value = null;
  app.loginForm.pass.value = null;
}

function removeSignInUP() {
  app.signIn.style.display = "none";
  app.signUpBtn.style.display = "none";
  app.h1SignIn.style.display = "none";
  app.h1SignUp.style.display = "block";
  app.createBtn.style.display = "block";
  app.errorMsgUser.classList.add("error-msg");
}

function addSignInUP() {
  app.signIn.style.display = "inline-block";
  app.signUpBtn.style.display = "inline-block";
  app.createBtn.style.display = "none";
  app.h1SignIn.style.display = "block";
  app.h1SignUp.style.display = "none";
  app.errorMsgCreate.classList.add("error-msg");
}

app.login.addEventListener("click", (e) => {
  e.preventDefault;
  app.loginMenu.style.display = "flex";
});

document.getElementById("closebtn").addEventListener("click", (e) => {
  e.preventDefault;
  app.loginMenu.style.display = "none";
});

document.getElementById("login-btn-in").addEventListener("click", (e) => {
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

document.getElementById("login-btn-up").addEventListener("click", (e) => {
  e.preventDefault;
  removeSignInUP();
});

document.getElementById("create-btn").addEventListener("click", (e) => {
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

// Taget från en tidigare meny jag gjort //
/*document.getElementById("login-btn").addEventListener("click", (e) => {
  e.preventDefault;
  let username = app.loginForm.user.value;
  let password = app.loginForm.pass.value;

  if (username == "Sara" && password == "qwe123") {
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
