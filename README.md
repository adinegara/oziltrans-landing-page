# Ozil Trans354 Tour & Travel Landing Page

A modern, responsive, and beautifully animated landing page for **Ozil Trans354 Tour & Travel**, a premier car rental and travel service provider. Built with React, Vite, and Tailwind CSS.

![Project Preview](./public/preview.png) *(Note: Add a preview screenshot of the hero section here)*

## 🚀 Features

- **Modern UI/UX**: Clean, professional design tailored for a premium car rental service.
- **Smooth Animations**: Uses `framer-motion` for fluid page transitions, scroll animations, and interactive hover effects.
- **Responsive Layout**: Fully optimized for mobile, tablet, and desktop devices.
- **Dynamic Fleet Display**: A draggable/scrollable carousel showcasing 13 available rental vehicles with their specific details (seats, fuel type, transmission).
- **Interactive Booking**: Integrated "Booking Sekarang" buttons that link directly to WhatsApp for seamless customer conversion.
- **Accessible Components**: Built on top of Radix UI primitives (`shadcn/ui`) for accessibility and robustness.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/) with SWC compilation for lightning-fast HMR
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: React Router DOM

## 📂 Project Structure

```text
src/
├── assets/         # Images, logos, and car photos
├── components/     # Reusable UI components and page sections
│   ├── HeroSection.tsx
│   ├── FleetSection.tsx
│   ├── FeaturesSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ui/         # Base shadcn components
├── pages/          # Full page layouts (e.g., Layanan.tsx)
├── index.css       # Global styles and Tailwind directives
└── main.tsx        # Application entry point
```

## 💻 Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your machine.
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ozil-trans-landing-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local URL provided in your terminal (usually `http://localhost:8080` or `http://localhost:5173`).

### Building for Production

To create a production-ready build, run:
```bash
npm run build
```
This will generate optimized static files in the `dist` directory, ready to be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## 📞 Customization

- **WhatsApp Link**: To change the destination WhatsApp number, update the `WA_LINK` constant found at the top of several component files (e.g., `HeroSection.tsx`, `FleetSection.tsx`, `Navbar.tsx`).
- **Theme Colors**: The primary accent colors are defined using CSS variables in `src/index.css`. Adjust `--primary` and `--accent` to change the global color scheme.

## 📄 License

This project is proprietary and created specifically for Ozil Trans354 Tour & Travel.
