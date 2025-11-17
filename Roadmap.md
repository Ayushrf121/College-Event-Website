# 🚀 College Event Management System – Roadmap

A modern, responsive event management platform built with **Next.js**, **Tailwind CSS**, and **Lucide Icons** — designed for college communities to discover, register, and manage events.

---

## 📁 Project Structure & Routes

We'll use the **Next.js App Router** with the following routes:

| Route        | Description                                  |
|--------------|----------------------------------------------|
| `/`          | 🏠 Home page – event feed, categories, search |
| `/events`    | 📅 All events – list or calendar view         |
| `/about`     | 📖 About College Events – mission, stats      |
| `/myevents`  | 📋 User dashboard – registered events         |
| `/profile`   | 🙋 User profile – name, email, badges         |

---

## 🧱 Component Plan

Reusable components to keep the UI clean and modular:

| Component         | Purpose                                      |
|------------------|----------------------------------------------|
| `Navbar.js`       | Top navigation with search bar and icons     |
| `Footer.js`       | Bottom section with links and contact info   |
| `EventCard.js`    | Card layout for each event                   |
| `EventList.js`    | Grid or list of events                       |
| `EventDetails.js` | Full page for a single event                 |
| `SearchBar.js`    | Search input with Lucide icon                |
| `ProfileCard.js`  | User info and stats                          |
| `EventForm.js`    | Admin form to create events                  |

---

## 🏗️ Step-by-Step Build Plan

### ✅ Step 1: Home Page (`/`)
- Featured events
- Categories: Hackathon, Cultural, Sports, Career
- Search bar (connected to event list)
- Trending/Upcoming section

### 🔜 Step 2: Events Page (`/events`)
- All events listed
- Filter by category, date
- Search integration

### 🔜 Step 3: About Page (`/about`)
- Mission, stats, features
- Lucide icons for visual storytelling

### 🔜 Step 4: My Events (`/myevents`)
- Events user registered for
- Status: upcoming, past
- Cancel or view details

### 🔜 Step 5: Profile Page (`/profile`)
- User info
- Participation badges
- Edit profile option

---

## 🔍 Search Bar Logic

The search bar in `Navbar.js` will:
- Filter events from a global list (state or mock API)
- Match by title, tags, or category
- Show results on `/events` or inline dropdown
- Use Lucide `Search` icon for styling

---

## 🎨 Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State**: useState, useEffect (initially)
- **Data**: Static JSON or mock API (expandable)

---

## 📌 Notes

- No external UI libraries (e.g., shadcn, MUI)
- Fully responsive and mobile-friendly
- Dark theme by default
- Clean, accessible, and semantic HTML

---

Let’s start with the Home Page layout and build from there!