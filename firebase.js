// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyAgO3NDaPAaO8auW-dfZasauz3g48L8_6s",
	authDomain: "whatsapp-clone-f3bb0.firebaseapp.com",
	projectId: "whatsapp-clone-f3bb0",
	storageBucket: "whatsapp-clone-f3bb0.appspot.com",
	messagingSenderId: "216463543578",
	appId: "1:216463543578:web:a879e74854ccd2704f30a3",
	measurementId: "G-94BNCP7VR9"
      };

     const firebaseApp = firebase.initializeApp(firebaseConfig);
     const db = firebaseApp.firestore();
     const auth = firebase.auth();
     const provider = new firebase.auth.GoogleAuthProvider();

     export {auth, provider};
     export default db;