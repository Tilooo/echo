Echo! - A Global Radio Map
Echo! is an interactive web application that allows users to explore and listen to live internet radio stations from around the world on a beautiful, dark-themed map. 
This project demonstrates a full-stack application built with a modern technology stack, combining a powerful Python/Django backend with a dynamic React frontend.

Features
Interactive World Map: Explore a visually appealing dark-themed map populated with hundreds of live radio stations.
Live Radio Streaming: Click on any station marker to bring up a player and listen to its live stream directly in your browser.
Dynamic Station Loading: The application automatically fetches and populates the map with the most popular and compatible radio stations from around the globe.
Real-time Search & Filtering: Instantly find stations by searching for a name or country. The map dynamically updates to show only matching results.
Custom-Styled UI: A clean, modern interface with custom map markers, a sleek audio player, and a loading indicator for a professional user experience.
Responsive Design: The application is designed to be usable across different screen sizes.

Backend
Framework: Python with Django & Django Rest Framework
Database: SQLite (for development)
API: A RESTful API to serve radio station data in JSON format.
Data Seeding: A custom Django management command to automatically fetch and populate the database.

Frontend
Framework: React.js (with Vite for a fast development experience)
Mapping Library: Leaflet with React-Leaflet for rendering the interactive map.
Styling: Tailwind CSS for a utility-first, modern, and clean design.
HTTP Client: Axios for making requests to the backend API.
State Management: React Hooks (useState, useEffect, useMemo) for managing application state.

Getting Started
To run this project on your local machine, follow these steps.
Prerequisites
Python (3.8 or higher)
Node.js and npm
Git

