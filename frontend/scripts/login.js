const app = {
  login: document.getElementById("log-in"),
  logout: document.getElementById("log-out"),
  username: document.getElementById("user"),
  password: document.getElementById("pass"),
  againBtn: document.getElementById("again-btn"),
  loginBtn: document.getElementById("login-btn"),
  loginForm: document.getElementById("login-form"),
  loginMenu: document.getElementById("login-menu"),
  loginH2: document.getElementById("log-h2"),
  userLogged: localStorage.getItem("userLogged"),
  errorMsgUser: document.getElementById("error-msg-login"),
  nav: document.querySelector(".navbar-screen"),
};

const loginForm = () => {  
  app.nav.insertAdjacentHTML(
    "afterend",
    ` <div class="loginContainer hidden" id="login-menu">
        <div id="closebtn">X</div>
        <form class="login-windows" id="login-form">
          <p id="error-msg-login" class="hidden">Felaktigt användarnamn/lösenord!</p>
          <h2 id="log-h2">LOGIN</h2>
          <input id="user" class="login-window" placeholder="namn" type="text" />
          <input id="pass" class="login-window" placeholder="lösenord" type="password" />
          <div class="btn-row">
            <div>
              <input type="button" value="LOGGA IN" id="login-btn" class="btn" />
            </div>
            <div>
              <input type="button" value="FÖRSÖK IGEN" id="again-btn" class="btn hidden" />
            </div>
          </div>
        </form>
      </div>`
  );
};

 loginForm()

function clearForm() {
  app.loginForm.user.value = null;
  app.loginForm.pass.value = null;
}

function errorMsg() {
  app.loginBtn.classList.add("hidden");
  app.username.classList.add("hidden");
  app.password.classList.add("hidden");
  app.againBtn.classList.add("hidden");
  app.loginH2.classList.add("hidden");
  app.againBtn.classList.remove("hidden");
  app.errorMsgUser.classList.remove("hidden");
}

function removeErrorMsg() {
  app.loginBtn.classList.remove("hidden");
  app.username.classList.remove("hidden");
  app.password.classList.remove("hidden");
  app.againBtn.classList.remove("hidden");
  app.loginH2.classList.remove("hidden");
  app.againBtn.classList.add("hidden");
  app.errorMsgUser.classList.add("hidden");
}

function removeLoginMenu() {
  app.loginMenu.classList.add("hidden");
  app.login.classList.add("hidden");
  app.logout.classList.remove("hidden");
}

function addLoginMenu() {
  app.login.classList.remove("hidden");
  app.logout.classList.add("hidden");
}

document.getElementById("log-in").addEventListener("click", (e) => {
  e.preventDefault;
  app.loginMenu.classList.remove("hidden");
});

document.getElementById("closebtn").addEventListener("click", (e) => {
  e.preventDefault;
  app.loginMenu.classList.add("hidden");
});

document.getElementById("login-btn").addEventListener("click", (e) => {
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

document.getElementById("again-btn").addEventListener("click", (e) => {
  e.preventDefault;
  removeErrorMsg();
  clearForm();
});

document.getElementById("log-out").addEventListener("click", (e) => {
  e.preventDefault;
  addLoginMenu();
  clearForm();
  localStorage.clear();
});
