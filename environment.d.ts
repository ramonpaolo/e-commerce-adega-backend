import typescript from "typescript"

declare global {
  namespace NodeJS {
    interface ProcessEnv {
       //Config JWT
       JWT_KEY: string;

       //Config MongoDB
       MONGODB_URL: string;
 
       //   Config Firebase
       API_KEY: string;
       AUTH_DOMAIN: string;
       PROJECT_ID: string;
       STORAGE_BUCKET: string;
       MESSAGING_SENDER_ID: string;
       APP_ID: string;
       MEASUREMENT_ID: string;
    }
  }
}