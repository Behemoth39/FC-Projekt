// This isnt a working way, rework when there is time

/*const begin = document.querySelector("header");
const loginForm = () => {
  begin.insertAdjacentHTML(
    "beforeend",
    `<div class="loginContainer hidden" id="login-menu">
        <div id="closebtn">X</div>
        <h1 id="h1-sign-in">Sign In</h1>
        <h1 class="hidden" id="h1-sign-up">Sign Up</h1>
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
              <input type="button" value="Create Account" id="create-btn" class="btn hidden" />
            </div>
            <div>
              <input type="button" value="Back" id="back-btn" class="btn hidden" />
            </div>
          </div>
        </form>
      </div>`
  );
};

loginForm();*/

/***************************************************************************************************/

// Reused/Rewritten code that i wrote in the first course
// Does not work fully yet
const app = {
  loginForm: document.querySelector("#login-form"),
  loginMenu: document.querySelector("#login-menu"),
  login: document.querySelector("#log-in"),
  logout: document.querySelector("#log-out"),
  signIn: document.querySelector("#login-btn-in"),
  signUpBtn: document.querySelector("#login-btn-up"),
  h1SignIn: document.querySelector("#h1-sign-in"),
  h1SignUp: document.querySelector("#h1-sign-up"),
  createBtn: document.querySelector("#create-btn"),
  backBtn: document.querySelector("#back-btn"),
  errorMsgUser: document.querySelector("#error-msg-login"),
  errorMsgCreate: document.querySelector("#error-msg-create"),
  userLogged: localStorage.getItem("userLogged"), // to keep user logged in, continue to use?
  savedUsername: [],
  savedPassword: [],
};

function clearForm() {
  app.loginForm.user.value = null;
  app.loginForm.pass.value = null;
}

function loggedIn() {
  app.loginMenu.classList.add("hidden");
  app.login.classList.add("hidden");
  app.logout.classList.remove("hidden");
}

function loggedOut() {
  app.login.classList.remove("hidden");
  app.logout.classList.add("hidden");
}

// doesn't work, why?
function errorMsg() {
  app.errorMsgUser.classList.remove("error-msg");
  setTimeout(function () {
    app.errorMsgUser.classList.add("error-msg");
  }, 3000);
  app.loginForm.user.value = null;
  app.loginForm.pass.value = null;
}

function removeSignInUP() {
  app.signIn.classList.add("hidden");
  app.signUpBtn.classList.add("hidden");
  app.h1SignIn.classList.add("hidden");
  app.h1SignUp.classList.remove("hidden");
  app.createBtn.classList.remove("hidden");
  app.backBtn.classList.remove("hidden");
  app.errorMsgUser.classList.add("error-msg");
}

function addSignInUP() {
  app.signIn.classList.remove("hidden");
  app.signUpBtn.classList.remove("hidden");
  app.createBtn.classList.add("hidden");
  app.backBtn.classList.add("hidden");
  app.h1SignIn.classList.remove("hidden");
  app.h1SignUp.classList.add("hidden");
  app.errorMsgCreate.classList.add("error-msg");
}

app.login.addEventListener("click", (e) => {
  e.preventDefault;
  app.loginMenu.classList.toggle("hidden");
});

document.getElementById("closebtn").addEventListener("click", (e) => {
  e.preventDefault;
  app.loginMenu.classList.add("hidden");
});

app.signIn.addEventListener("click", (e) => {
  e.preventDefault;
  username = app.loginForm.user.value;
  password = app.loginForm.pass.value;

  for (let i = 0; i < app.savedUsername.length; i++) {
    if (username == app.savedUsername[i] && password == app.savedPassword[i]) {
      localStorage.setItem("userLogged", "true");
      loggedIn();
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
    clearForm();
    addSignInUP();
  }
});

if (app.userLogged) {
  loggedIn();
} else {
  loggedOut();
}

app.logout.addEventListener("click", (e) => {
  e.preventDefault;
  clearForm();
  localStorage.clear(); // clear all or only userLogged?
});

/* to save locally instead
  
localStorage.setItem('username'); //save in array 
localStorage.setItem('password'); //save in array 
let saveduser =  localStorage.setItem('username');
let savedpass =  localStorage.setItem('password');
localStorage.removeItem('password');
localStorage.clear;  

*/
