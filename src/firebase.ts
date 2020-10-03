import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = firebase.initializeApp({
	apiKey: 'AIzaSyAmVqRR6dEuYDzutleDcacD3Twu2bCTWY4',
	authDomain: 'todoist-95fca.firebaseapp.com',
	databaseURL: 'https://todoist-95fca.firebaseio.com',
	projectId: 'todoist-95fca',
	storageBucket: 'todoist-95fca.appspot.com',
	messagingSenderId: '437858368508',
	appId: '1:437858368508:web:0ce56182042d2100add079',
});

export { firebaseConfig as firebase };
