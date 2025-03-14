  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getDatabase, ref, set, onValue } from
"https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyAjG-PPayWk4_VakL92e8Fcj7yQnHn9Ils",
    authDomain: "auth-53182.firebaseapp.com",
    databaseURL: "https://auth-53182-default-rtdb.firebaseio.com",
    projectId: "auth-53182",
    storageBucket: "auth-53182.firebasestorage.app",
    messagingSenderId: "337278273683",
    appId: "1:337278273683:web:2d34766d237902c18e2566",
    measurementId: "G-X5JX85Z9BL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const  db = getDatabase(app);
  const counterRef = ref(db , "counter");

  function updateCounter (value){
    set(counterRef , value);
  }

  document.getElementById("increment").addEventListener("click" , (e) =>{
    e.preventDefault();
    let count = Number(document.getElementById("counter").innerText);
    updateCounter(count +1);
  })

  document.getElementById("decrement").addEventListener("click" , (e) =>{
    e.preventDefault();
    let count = Number(document.getElementById("counter").innerText);
    updateCounter(count -1);
  })

  onValue(counterRef , function (snap){
    document.getElementById("counter").innerText = snap.val();
  })