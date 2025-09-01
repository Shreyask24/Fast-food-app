# 🍔 Food Delivery App

A modern **React Native Food Delivery App** built following the JavaScript Mastery tutorial.  
It features authentication, search & filtering, cart management, and backend integration with **Appwrite**.

---

## Tech Stack

- **React Native (Expo)** – Cross-platform mobile framework  
- **NativeWind (Tailwind CSS)** – Utility-first styling  
- **Appwrite** – Authentication, database, and file storage  
- **Zustand** – Lightweight state management  
- **Sentry** – Error monitoring & performance tracking  
- **Expo Router** – Navigation and routing  

---

## Features

- 🔐 Authentication (Login / Signup with Appwrite)  
- 🏠 Home screen with categories and featured items  
- 🔎 Search & filter food items by category or keyword  
- 🍽️ Menu item components with dynamic rendering  
- 🛒 Cart functionality with global state  
- 🗄️ Database architecture and seeded collections via Appwrite  
- 📊 Error tracking with Sentry  
- 📱 Smooth tab navigation  

---

## Project Structure

```bash
/
├── assets/          # Images, fonts, icons
├── components/      # Reusable UI components
├── screens/         # App screens (Home, Auth, Search, Cart, etc.)
├── store/           # Zustand store (auth, cart, global state)
├── services/        # Appwrite config, API services
├── navigation/      # Routing & tab navigation setup
├── utils/           # Helpers (filters, constants)
├── App.tsx          # Entry point
├── tailwind.config.js
└── README.md
```

1. Clone the repo
```bash
git clone https://github.com/Shreyask24/Fast-food-app.git
cd food-delivery-app
```

2. Install dependencies
```bash
npm install
```

3. Setup environment variables

Copy .env.example to .env and add your Appwrite credentials:

EXPO_PUBLIC_APPWRITE_ENDPOINT=<your-endpoint>
EXPO_PUBLIC_APPWRITE_PROJECT_ID=<your-project-id>
EXPO_PUBLIC_APPWRITE_DATABASE_ID=<your-db-id>
EXPO_PUBLIC_APPWRITE_BUCKET_ID=<your-bucket-id>

4. Run the app
```bash
npx expo start
```
