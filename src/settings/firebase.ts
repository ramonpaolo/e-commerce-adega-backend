import admin from "firebase-admin";
import dotenv from "dotenv"

dotenv.config()

var serviceAccount = require("./drinks-nordic-firebase-adminsdk-o0p0q-29acfd3e3a.json")

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
  credential: admin.credential.cert(serviceAccount),
};

admin.initializeApp(firebaseConfig);

export default admin;