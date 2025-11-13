🌿 Eco Bill – Utility Bill Management System

Eco Bill একটি MERN Stack ভিত্তিক ওয়েব অ্যাপ্লিকেশন যা ব্যবহারকারীদের মাসিক বিল (Electricity, Gas, Water, Internet ইত্যাদি) দেখা, ম্যানেজ করা ও পরিশোধ করার সুযোগ দেয়।

🔗 Eco Bill Live Site https://stunning-beijinho-9afe4e.netlify.app

🔗 Server Live (Vercel) https://eco-bill-server.vercel.app/

💻 ব্যবহৃত টেকনোলজি 🧩 Frontend (Client)

React.js – SPA (Single Page Application) তৈরির জন্য

React Router Data Mode – Dynamic Routing

Tailwind CSS + DaisyUI – Responsive UI Design

Firebase Authentication – Login / Registration / Google Login

SweetAlert2 – Success & Error Message

Framer Motion – Animation

jsPDF + jsPDF-AutoTable – PDF Report Download

React Icons – আইকন ডিজাইন

Dark/Light Theme Toggle – থিম পরিবর্তনের সুবিধা

⚙️ Backend (Server)

Node.js + Express.js – RESTful API তৈরি

MongoDB + Mongoose – Database সংরক্ষণ

Cors, Dotenv, JWT – Secure Access Control

🌟 ফিচারসমূহ

🔐 User Authentication System

Email/Password ও Google Login

Login/Register এর পর redirect

🏠 Home Page

Banner Slider, 4 Category Section (Electricity, Gas, Water, Internet)

Recent 6 Bills (.limit(6))

2টি Meaningful Extra Section

Responsive & Animated Design

💡 Bills Page (Public Route)

All Bills in 3-column grid

Category Filter (Dynamic backend query)

“See Details” বাটনে বিল ডিটেইল পেজে রিডাইরেক্ট

📄 Bill Details Page (Private Route)

সম্পূর্ণ বিল তথ্য দেখাবে

শুধুমাত্র Current Month এর বিল পেমেন্ট করা যাবে

Modal Form দিয়ে “Pay Bill” সাবমিট

💰 My Pay Bills Page (Private Route)

শুধুমাত্র লগইন ইউজারের বিল দেখা যাবে

Table View সহ Update / Delete অপশন

মোট বিল সংখ্যা ও পরিমাণ দেখানো

PDF Download Report (jsPDF ব্যবহার করে)

⚙️ Extra Features

Dynamic Page Title

Loading Spinner

404 Not Found Page

Dark/Light Theme

Toast / SweetAlert Notification

Responsive Navbar + Footer

Smooth Animation (Framer Motion)

🧱 Database Collections

1️⃣ bills Collection:

{ "title": "Frequent Power Outage in Mirpur", "category": "Electricity", "email": "creator@gmail.com", "location": "Mirpur-10, Dhaka", "description": "Power cuts occur daily in the evening.", "image": "https://example.com/power.jpg", "date": "2025-10-26", "amount": 260 }

2️⃣ myBills Collection:

{ "billsId": "abc123", "username": "Mr. X", "phone": "017XXXXXXX", "address": "Dhaka", "email": "mrx@gmail.com", "amount": 260, "date": "2025-10-26" }

📦 Deployment

Client: Netlify

Server: Vercel

🧑‍💻 GitHub Commits

Client Side → 15+ Notable Commits

Server Side → 8+ Notable Commits

👨‍🎨 Developer

Developed by: [Mohebur] Project Name: Eco Bill 🌿
