import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyCalXLFFjDd9WQneun4HvV-8Gkv8nDehsA",
      authDomain: "sandbox-ee7ac.firebaseapp.com",
      databaseURL: "https://sandbox-ee7ac-default-rtdb.firebaseio.com",
      projectId: "sandbox-ee7ac",
      storageBucket: "sandbox-ee7ac.appspot.com",
      messagingSenderId: "730893394855",
      appId: "1:730893394855:web:48dac85c1c743900b90c82",
      measurementId: "G-JCZ4QSBXPF"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }

}
