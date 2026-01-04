# Paw'nHoof

![Paw'nHoof Logo](Paw'nHoof.png)

> **Paw'nHoof "Connecting hearts with paws and hooves."**

---

## 📖 About Paw'nHoof

**Paw'nHoof** is a dedicated web platform designed to facilitate the adoption and care of stray and domestic animals. 

Our mission is to solve the problem of homeless animals by creating a bridge between compassionate humans and pets in need. Whether you are looking to adopt a new family member, report a stray in need of help, or find resources for pet care, Paw'nHoof provides a single, unified solution.

---

## 🌟 Key Features

* **Adoption Portal:** A streamlined interface to browse profiles of stray animals and pets waiting for a forever home.
* **Stray Animal Rescue:** Tools to report and track stray animals in your locality to help connect them with shelters or potential adopters.
* **Pet Care Resources:** Access to guides, tips, and resources for taking care of domestic animals and newly adopted pets.
* **Community Connection:** A platform for animal lovers to connect, share stories, and support the cause of animal welfare.

---

## 🛠 Tech Stack

**Frontend:**
* React.js 19.2.0
* Vite 7.2.4
* TailwindCSS 4.1.18
* React Icons 5.5.0

**Backend:**
* Node.js
* Express.js 5.2.1
* MongoDB with Mongoose 9.0.2

**Authentication & Security:**
* JWT (JSON Web Tokens)
* bcrypt for password hashing
* Joi for input validation

---

## 🚀 Getting Started

### Prerequisites
* Node.js (v18 or higher)
* npm or yarn
* MongoDB (local or cloud instance)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Paw'nHoof
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Environment Setup**
   - Create a `.env` file in the `server` directory
   - Add your MongoDB connection string and other environment variables

4. **Run the application**
   ```bash
   # Start both client and server in development mode
   npm run dev
   
   # Or start individually:
   npm run dev:client  # Frontend at http://localhost:5173
   npm run dev:server  # Backend at http://localhost:3000
   ```

---

## 📁 Project Structure

```
Paw'nHoof/
├── client/                 # React frontend application
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── server/                 # Express backend application
│   ├── index.js
│   ├── .env
│   └── package.json
├── README.md
├── package.json           # Root workspace configuration
└── Paw'nHoof.png
```

---

## 🛠 Available Scripts

**Root Level:**
- `npm run dev` - Start both client and server in development mode
- `npm run dev:client` - Start only the frontend
- `npm run dev:server` - Start only the backend
- `npm run build` - Build the frontend for production
- `npm run start` - Start the production server
- `npm run install:all` - Install dependencies for all packages

**Client Level:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

**Server Level:**
- `npm run dev` - Start with nodemon
- `npm run start` - Start production server

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

---

## 📄 License

This project is licensed under the ISC License.

---

## 📞 Contact

For any queries or support, please reach out to the project maintainers.

