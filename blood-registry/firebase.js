import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCIn5yNcJm_xIZOzW9xign5WUKUdYQyRhc",
  authDomain: "blood-donor-registry.firebaseapp.com",
  projectId: "blood-donor-registry",
  storageBucket: "blood-donor-registry.appspot.com",   // ✅ corrected
  messagingSenderId: "503302092341",
  appId: "1:503302092341:web:4a286c36904b907ea4637c",
  measurementId: "G-2XHHJ4HHF4"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Setup Firebase Authentication
const auth = getAuth(app);

// ✅ Export app and auth so other files can use them
export { app, auth };


