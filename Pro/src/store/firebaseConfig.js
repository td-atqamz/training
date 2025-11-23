export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  databaseURL: import.meta.env.VITE_FIREBASE_DB_URL || "",
};

export const requireFirebaseConfig = () => {
  if (!firebaseConfig.apiKey || !firebaseConfig.databaseURL) {
    console.warn(
      "Firebase config is missing. Please set VITE_FIREBASE_API_KEY and VITE_FIREBASE_DB_URL in your .env file."
    );
  }

  return firebaseConfig;
};

export const buildDbUrl = (path) => {
  if (!firebaseConfig.databaseURL) {
    throw new Error(
      "Firebase database URL is missing. Set VITE_FIREBASE_DB_URL in your .env file."
    );
  }

  return `${firebaseConfig.databaseURL}/${path}.json`;
};
