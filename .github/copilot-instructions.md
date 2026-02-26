# Copilot Instructions: Asset Management Application

## Overview

This project is a full-stack Asset Management application with a .NET 8 Web API backend and a React (with React Router) frontend. It allows users to manage assets, desks, cubicles, and user assignments efficiently.

## Backend

- **Tech:** ASP.NET Core 8 Web API
- **Location:** `app/backend/AssetManagement/AssetManagement/`
- **Features:**
  - Asset CRUD operations (in-memory for demo)
  - RESTful endpoints
  - Example controller: `AssetController`

## Frontend

- **Tech:** React 19, React Router DOM
- **Location:** `app/frontend/`
- **Features:**
  - SPA navigation (Dashboard, Desks, Assets, Cubicles, Users)
  - Components: Header, NavBar, WelcomeSection, DesksOverview, AssetList, CubiclesOverview, UserAssignments
  - Uses utility classes (Tailwind planned, not yet installed)
  - **The application should use Tailwind CSS v4. Follow the official installation guide for Vite at https://tailwindcss.com/docs/installation/using-vite**

## How to Run

1. **Backend:**
   - Open `AssetManagement.sln` in Visual Studio or run with `dotnet run` in the backend folder.
2. **Frontend:**
   - Install dependencies: `npm install` in `app/frontend`
   - Start dev server: `npm run dev`

## Notes

- React Router is used for SPA navigation.
- Tailwind CSS is referenced in components but not yet installed/configured.
- Sample data is used for demonstration.

---

_Last updated: February 26, 2026_
