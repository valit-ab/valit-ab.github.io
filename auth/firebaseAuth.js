import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js'
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js'

const firebaseConfig = {
    apiKey: "AIzaSyA8uz1JS8XWNegdxJSgUecooJ7UuZ305gE",
    authDomain: "valit-43470.firebaseapp.com",
    projectId: "valit-43470",
    storageBucket: "valit-43470.appspot.com",
    messagingSenderId: "183314646013",
    appId: "1:183314646013:web:21b795c906dd5ce2944f94"
};


const app = initializeApp(firebaseConfig);

window.authSignIn = function authSignIn() {
    const auth = getAuth(app);
    var email = document.getElementById("email")
    var pass = document.getElementById("pass")
    signInWithEmailAndPassword(auth, email.value, pass.value)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)

    });
}