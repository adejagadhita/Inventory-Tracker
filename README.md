# Project Description

Inventroy Tracker adalah aplikasi manajemen inventaris yang memungkinkan pengguna untuk mencatat, menghapus, serta memonitor stok barang secara real-time.
	Aplikasi ini dibuat untuk memenuhi kebutuhan pengelola stok sederhana namun efisien, dengan antarmuka yang mudah digunakan dan system autentikasi berbasi role (Admin, Staff, Viewer).


Fitur utama:

- Login dengan role (Admin/Staff/Viewer)
- CRUD Inventory
- Dashboard ringkas
- Manjemen Pengguna (khusus Admin)


## Tech Stack

Frontend:
- React.js
- React Router Dom
- State Manager: useState, useEffect
-	UI Framework: Tailwin CSS + Lucide Icons
-	Firebase : Firestore Database, Firebase Storage

## How to Run

1.Clone repository:

  - git clone https://github.com/your-repo/inventory-tracker.git
  
  - cd inventory-tracker

2.Install dependencies:

  - npm install

3.Setup Firebase
  - Buat file: src/firebase.js
  - Isi dengan konfigurasi Firebase kamu:
    import { initializeApp } from "firebase/app";
    
    import { getFirestore } from "firebase/firestore";
    
    import { getStorage } from "firebase/storage";

    const firebaseConfig = {
    
    apiKey: "YOUR_API_KEY",
    
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    
    projectId: "YOUR_PROJECT_ID",
    
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    
    messagingSenderId: "ID",
    
    appId: "APP_ID",
    };

    const app = initializeApp(firebaseConfig);

    export const db = getFirestore(app);
    
    export const storage = getStorage(app);

4.Jalankan aplikasi: npm run dev

5.Aplikasi akan berjalan di: http://localhost:5173

## Demo Screenshots

### Landing Page
![Landing](./screenshots/ss%201.png)

### Login Page
![Login](./screenshots/ss%202.png)

### Register
![Register](./screenshots/ss%203.png)

### Dashboard
![Dashboard](./screenshots/ss%204.png)

### Inventory Page
![Inventory](./screenshots/ss%205.png)

### Sales Page
![Sales](./screenshots/ss%206.png)

### Users Page
![Users](./screenshots/ss%207.png)


