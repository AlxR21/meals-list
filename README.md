# 🍽️ Meals List

A modern React application that fetches and displays meal recipes from the free TheMealDB API with a beautiful yellow-themed user interface.

## ✨ Features

- **Meal Search**: Browse meals based on search query (currently showing rice-based meals)
- **Responsive Grid**: Auto-responsive card grid layout for different screen sizes
- **Yellow Aesthetic**: Warm, inviting color scheme with smooth hover animations
- **Real-time Data**: Fetches meal data from [TheMealDB API](https://www.themealdb.com/api.php)
- **Meal Cards**: Each card displays:
  - Meal thumbnail image
  - Meal name
  - Category information

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/AlxR21/meals-list.git
cd meals-list

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:5173` by default.

## 📁 Project Structure

```
meals-list/
├── src/
│   ├── App.jsx         # Main component with meal fetching logic
│   ├── App.css         # Yellow-themed styles
│   ├── index.css       # Global styles
│   ├── main.jsx        # React entry point
│   └── assets/         # Static images and icons
├── public/             # Public assets
├── index.html          # HTML template
├── package.json        # Dependencies
└── vite.config.js      # Vite configuration
```

## 🎨 Design Highlights

- **Color Palette**: 
  - Primary Yellow: `#ffd454`
  - Light Yellow: `#fff9db`
  - Dark Brown: `#6b5b00`
- **Interactions**: Card hover lift effect with smooth transitions
- **Typography**: Clean, modern sans-serif fonts for readability

## 🔧 Build & Deploy

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 📚 Technologies Used

- **React** - UI library
- **Vite** - Fast build tool
- **CSS3** - Styling with gradients and animations
- **TheMealDB API** - Meal database

## 🌐 API Reference

Fetches data from:
```
https://api.freeapi.app/api/v1/public/meals?page=1&limit=10&query=rice
```

Returns paginated meal data with detailed recipe information.

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork, modify, and submit pull requests. Suggestions for improvements are welcome!

---

**Created by**: Alok  
**Repository**: [AlxR21/meals-list](https://github.com/AlxR21/meals-list)
