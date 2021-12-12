// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//     apiKey: "AIzaSyBYI67rcRjVF4buNNUCqWj4uGYnuyRMm7g",
//     authDomain: "doemaisapi-efd9c.firebaseapp.com",
//     projectId: "doemaisapi-efd9c",
//     storageBucket: "doemaisapi-efd9c.appspot.com",
//     messagingSenderId: "223198834046",
//     appId: "1:223198834046:web:acbe0d8e9bb6f5aae6972f"
// };

// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
// const storage = getStorage(firebaseApp);

// export { db, storage };


const admin = require('firebase-admin')

// Initialize firebase admin SDK
admin.initializeApp({
  credential: admin.credential.cert("./doemaisapi-efd9c-firebase-adminsdk-z8245-1c946fa6c9.json"),
  storageBucket: "doemaisapi-efd9c.appspot.com"
})
// Cloud storage
const bucket = admin.storage().bucket()

module.exports = {
  bucket
}