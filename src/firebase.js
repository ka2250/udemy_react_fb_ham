import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDprfPUC0QTP15lBvPhNWu_O9BWfXBcmQ8",
	authDomain: "udemy-react-fb-ham.firebaseapp.com",
	projectId: "udemy-react-fb-ham",
	storageBucket: "udemy-react-fb-ham.appspot.com",
	messagingSenderId: "9539916367",
	appId: "1:9539916367:web:0146950584082d3fcd503a",
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const messageRef = database.ref("messages");

export const pushMessage = ({ name, text }) => {
	messageRef.push({ name, text });
};
