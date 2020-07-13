import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './config';

class Firebase {
	constructor() {
		app.initializeApp(firebaseConfig);
		this.auth = app.auth();
		this.db = app.firestore();
	}

	async register(email, password, name) {
		await this.auth
			.setPersistence(app.auth.Auth.Persistence.LOCAL)
			.then(() => {
				const newUser = this.auth.createUserWithEmailAndPassword(
					email,
					password
				);

				return newUser.user.updateProfile({
					displayName: name
				});
			});
	}

	async login(email, password) {
		await this.auth
			.setPersistence(app.auth.Auth.Persistence.LOCAL)
			.then(async () => {
				await this.auth.signInWithEmailAndPassword(email, password);
			});
	}

	async logout() {
		await this.auth.signOut();
	}

	async resetPassword(email) {
		await this.auth.sendPasswordResetEmail(email);
	}
}

const firebase = new Firebase();
export default firebase;
