# 🎬 MovieFlix

MovieFlix is a sleek and modern movie browsing web application built with **React**, **Tailwind CSS**, and the **TMDB (The Movie Database) API**. Users can discover popular, top-rated, and upcoming movies, search by title, and view detailed information about each movie.

---

## 🚀 Features

- 🔍 Search for movies by title

- 🎞️ Browse popular, top-rated, and upcoming movies

- 📖 View detailed movie information (overview, release date, rating, etc.)

- 📱 Fully responsive design using Tailwind CSS

- ⚡ Fast and smooth user experience with Vite

---

## 🛠️ Tech Stack

| Frontend  | Styling       | API       | Build Tool |
|-----------|---------------|-----------|------------|
| React     | Tailwind CSS  | TMDB API  | Vite       |

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/anirudha-8/04-movieflix.git
cd movieflix

# Install dependencies
npm install

# Create environment file
touch .env
```

## Inside .env, add your TMDB API key

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

## Now run the development server

```bash
npm run dev
```

*The app will be available at **`http://localhost:5173`***.

---

## 📂 Project Structure

```bash
    src/
    ├── components/       # Reusable UI components
    ├── pages/            # Route-based pages
    ├── layouts/          # Layout components (e.g., Navbar, Footer)
    ├── services/         # API calls
    ├── utils/            # Utility functions/helpers
    ├── App.jsx           # Main app routing
    └── main.jsx          # App entry point
```

---

## 🙌 Acknowledgements

- TMDB API

- React

- Tailwind CSS

- Vite

---

## 📜 License

This project is licensed under the MIT License.
