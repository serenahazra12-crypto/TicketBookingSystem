var firebaseConfig = {
  apiKey: "AIzaSyCCRAOrk_mtGK0xk6B27PEk3ffxrtLE_yg",
  authDomain: "ticket-test-ad257.firebaseapp.com",
  databaseURL: "https://ticket-test-ad257-default-rtdb.firebaseio.com",
  projectId: "ticket-test-ad257",
  storageBucket: "ticket-test-ad257.appspot.com",
  messagingSenderId: "645253935083",
  appId: "1:645253935083:web:ef2a477b1b8392fa6733ae"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.addEventListener("DOMContentLoaded", function() {
    const registerBtn = document.getElementById("register-btn");
    const loginBtn = document.getElementById("login-btn");

    if (registerBtn) {
        registerBtn.addEventListener("click", function() {
            const user_name = document.getElementById("user-name").value;
            const email = document.getElementById("user-email").value;
            const password = document.getElementById("user-password").value;

            localStorage.setItem("user_name", user_name);
            localStorage.setItem("email", email);

            auth.createUserWithEmailAndPassword(email, password)
                .then(userCredential => {
                    alert("Registration successful! Welcome " + userCredential.user.email);
                    window.location.href = "event_selection.html";
                })
                .catch(error => {
                    alert(error.message);
                });
        });
    }

    if (loginBtn) {
        loginBtn.addEventListener("click", function() {
            const user_name = document.getElementById("user-name").value;
            const email = document.getElementById("user-email").value;
            const password = document.getElementById("user-password").value;

            localStorage.setItem("user_name", user_name);
            localStorage.setItem("email", email);

            auth.signInWithEmailAndPassword(email, password)
                .then(userCredential => {
                    alert("Login successful! Welcome back " + userCredential.user.email);
                    window.location.href = "event_selection.html";
                })
                .catch(error => {
                    alert(error.message);
                });
        });
    }
});
