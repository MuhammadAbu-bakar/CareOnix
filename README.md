CareOnix – Welfare Organization Platform

Project Overview

CareOnix is a comprehensive MERN-based web platform that bridges the gap between **donors**, **volunteers**, and **deserving families**. It simplifies the donation process and enhances transparency and management for welfare organizations. Designed with user-friendliness and scalability in mind, CareOnix empowers users to make a meaningful social impact.



Features (Inclusions)

- Online Donations & Payment Processing**  
  Secure donation system with support for multiple payment gateways (Stripe, etc.).

- Donor Management**  
  Track past donations, donor profiles, and donor activity analytics.

- Family Verification System**  
  Transparent process to verify families using document uploads and need assessments.

- Volunteer & Campaign Management**  
  Tools for managing campaigns, donor communication, and donation tracking.

- Dashboard & Reporting**  
  Real-time analytics for administrators, donors, and volunteers.

- Responsive User Interface**  
  Modern, mobile-friendly, and accessible UI for all users.

---

Exclusions

- Direct cash transfers between donors and families.
- Government approvals – managed via partnered organizations.
- Delivery logistics of donated goods – handled by external partners.

---

Tech Stack

- Frontend: React, React Router, Axios, TailwindCSS / Bootstrap
- Backend: Node.js, Express.js
- Database: MongoDB (Mongoose ODM)
- Authentication: JWT (JSON Web Tokens)


 Getting Started

Prerequisites

- Node.js (v18+ recommended)
- MongoDB instance (local or MongoDB Atlas)
- Stripe or other payment gateway keys
- Git



Project Setup

1. Clone the repository


git clone https://github.com/yourusername/careonix.git
cd careonix


2. Setup Backend


cd backend
npm install


Create a `.env` file in `/backend` with the following variables:

PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret



Then run:


npm run dev


3. Setup Frontend

bash
cd ../frontend
npm install


Create a `.env` file in `/frontend` with:

env
VITE_API_URL=http://localhost:5000/api


Then run:

bash
npm run dev


Contribution

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request



