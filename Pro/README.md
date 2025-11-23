# 🍳 Tasty Recipes - Vue.js Recipe App

A modern, responsive recipe sharing application built with Vue 3, Vite, Firebase, and Bootstrap. It guides you from local development through deployment while highlighting the core recipe management, authentication, and UI features.

## 🌟 Features

- **Recipe Management**: Browse, create, edit, and delete recipes with images
- **User Authentication**: Secure login/signup powered by Firebase Auth
- **Responsive Design**: Mobile-first layouts with Bootstrap 5
- **Real-time Database**: Firebase Realtime Database keeps data in sync
- **User Profiles**: Personal collections, favorites, and profile images
- **Recipe Search**: Filter recipes by category and ingredients

## 🛠️ Tech Stack

- **Frontend**: Vue 3, Vue Router, Vuex
- **Styling**: Bootstrap 5, FontAwesome
- **Backend**: Firebase Authentication + Realtime Database
- **Tooling**: Vite, ESLint
- **Deployment**: Vercel (or any static host that supports Vite builds)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) with [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (disable Vetur for best type support).

## Customize Configuration

See the [Vite Configuration Reference](https://vite.dev/config/) for advanced build tweaks.

## 🏗️ Installation & Setup

1. Clone the repository and switch into the project directory.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure Firebase (details below).
4. Start the dev server:

   ```bash
   npm run dev
   ```

5. Build for production when you are ready to deploy:

   ```bash
   npm run build
   ```

## 📱 Available Scripts

- `npm run dev` – Compile and hot-reload for development
- `npm run build` – Compile and minify for production
- `npm run preview` – Preview the production build locally

## 🔧 Firebase Configuration

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com).
2. Enable Email/Password Authentication.
3. Create a Realtime Database and set rules to allow public read and authenticated write.
4. Add your Firebase config (API key and Realtime Database URL) to a `.env` file based on `.env.example` so the app points to your fresh Firebase project.
5. (Optional) Enable Firebase Storage if you prefer managing uploads there instead of base64 strings.

## 📁 Project Structure

```
src/
├── assets/            # Static assets
├── components/
│   ├── auth/          # Login & Signup components
│   ├── detail/        # Recipe detail views
│   ├── header/        # Navigation components
│   ├── pages/         # Main page components
│   ├── recipe/        # Recipe list & card components
│   ├── ui/            # Reusable UI components
│   └── user/          # User profile components
├── store/
│   ├── auth.js        # Authentication state management
│   ├── recipe.js      # Recipe state management
│   └── index.js       # Vuex store configuration
└── routes.js          # Vue Router configuration
```

## 🎯 Feature Highlights

### Authentication System

- Secure user registration/login with Firebase
- Token handling (JWT) stored in cookies for route protection
- Profile management and password handling patterns

### Recipe Management

- CRUD operations on recipes with image uploads
- Categorized browsing, ingredient search, and filtering
- Favorite and personal recipe collections per user

### Responsive Design

- Bootstrap grid + utility classes for mobile-first UI
- Cross-browser compatible layout
- Touch-friendly components and navigation

## 🚀 Deployment (Netlify)

### Using the Netlify Dashboard

1. Push the latest code to GitHub/GitLab/Bitbucket.
2. In [Netlify](https://app.netlify.com/), click **Add new site → Import an existing project**.
3. Choose your repo and set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Add the Firebase environment variables under **Site settings → Environment variables**.
5. Deploy; Netlify will run the build and host the generated assets.

### Using Netlify CLI (optional)

```bash
npm install -g netlify-cli
npm run build
netlify deploy --dir=dist          # Create a draft deploy
netlify deploy --dir=dist --prod   # Promote to production
```

Follow the CLI prompts to link the site the first time you deploy. Update this README with the live URL once the deployment succeeds.

## 👨‍💻 Author

**Atqa Munzir**

- GitHub: https://github.com/atqamz
- LinkedIn: https://www.linkedin.com/in/atqamunzir

## 🙏 Acknowledgments

- Vue.js core team for the framework
- Firebase for backend services
- Bootstrap for responsive styling
- FontAwesome for iconography
