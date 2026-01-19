# React Navigation Project (Vite)

This project is a **basic React application** created using **Vite**. Till now, the main focus of this project is to understand **project setup, folder structure, routing, components, and pushing code to GitHub**.

---

## 📌 What I Have Done Till Now

### 1️⃣ Project Setup

- Created a React project using **Vite**
- Installed required dependencies using `npm install`
- Started the development server using `npm run dev`

---

### 2️⃣ Folder Structure

```
FSD-2/Experiment1
│
├── public
├── src
│   ├── components
│   │   ├── Home.jsx
│   │   └── About.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

### 3️⃣ Components Created

#### 🔹 Home Component (`Home.jsx`)

- Created a functional React component
- Added a navigation bar
- Used **Link** from `react-router-dom`
- Displayed:

  - Home page heading
  - Navigation links (Home & About)
  - Name heading

#### 🔹 About Component (`About.jsx`)

- Created a separate component for About page
- Used routing to navigate to this page

---

### 4️⃣ Routing Implementation

- Installed `react-router-dom`
- Used:

  - `BrowserRouter`
  - `Routes`
  - `Route`
  - `Link`

- Enabled navigation between **Home** and **About** pages without page reload

---

### 5️⃣ Styling

- Used `index.css` for styling
- Applied CSS classes using `className`
- Styled:

  - Navigation bar
  - Headings
  - Links

---

### 6️⃣ Running the Project

To run the project locally:

```bash
npm install
npm run dev
```

---

### 7️⃣ Git & GitHub

- Initialized Git repository using `git init`
- Added files using `git add .`
- Committed code using `git commit`
- Created a GitHub repository
- Pushed the complete project to GitHub using:

```bash
git push -u origin main
```

---

## 🏗️ Architecture of MPA and SPA

### 🔹 MPA (Multi Page Application) Architecture

In an MPA, the browser **continuously sends requests** to the application server for both **static and dynamic content**.

**Flow:**

1. User requests a page from the browser
2. Request goes to the **Application Server**
3. Server:

   - Fetches **static content** (HTML, CSS)
   - Generates **dynamic content** (using server-side logic)

4. Server sends a **complete new HTML page** back to the browser
5. Browser reloads the page

➡️ This process happens **on every page click**.

**Key Points:**

- Repeated requests to the same application server
- Full page reload every time
- Slower user experience

---

### 🔹 SPA (Single Page Application) Architecture

In an SPA, **static content is requested only once** from the frontend server, while **dynamic data is fetched separately** from the backend server.

**Flow:**

1. Browser requests the application
2. **Frontend Server** sends static files **once**:

   - HTML
   - CSS
   - JavaScript

3. JavaScript loads the UI in the browser
4. When data is needed:

   - Request goes to **Backend Server (API)**

5. Backend server fetches data from the **Database Server**
6. Data (JSON) is sent back to the browser
7. UI updates **without page reload**

➡️ Only data changes, not the entire page.

**Key Points:**

- One-time request for static content
- Dynamic data comes from backend APIs
- Faster and smoother experience

---

### 🔄 Why This Project is an SPA

- Built using **React + Vite**
- Uses `react-router-dom` for client-side routing
- Static content loads once from frontend
- Dynamic navigation happens without page refresh

---

## 🚀 Technologies Used

- React.js
- Vite
- JavaScript (JSX)
- HTML5
- CSS3
- Git & GitHub

---

## 📚 Learning Outcome

- Understood React project structure
- Learned how components work
- Learned routing using `react-router-dom`
- Learned how to push a project to GitHub

---

## 👤 Author

**Shubham Rana**

---

<!-- ✅ This README will be updated as the project progresses. -->
