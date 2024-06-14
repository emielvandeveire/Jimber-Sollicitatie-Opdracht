import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
import {
  collection,
  getDocs,
  addDoc,
  Timestamp
} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDdC19NLUUua4UCjux05lXSLGm1D2Vo2XM",
  authDomain: "jimber-sollicitatie.firebaseapp.com",
  projectId: "jimber-sollicitatie",
  storageBucket: "jimber-sollicitatie.appspot.com",
  messagingSenderId: "132831623469",
  appId: "1:132831623469:web:47e5f3d3fa07132aea3ba4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function addData() {
  console.log("test")
  try {
    const docRef = await addDoc(collection(db, "blogposts"), {
      date: Timestamp.fromDate(new Date()),
      subject: document.getElementById("subject").value,
      content: document.getElementById("content").value,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
window.addData = addData;
