/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1d4ed8', // Deep Royal Blue (Trust/Professional)
                secondary: '#0f172a', // Slate 900 (Dark/Premium)
                accent: '#38bdf8', // Sky 400 (Electric Blue Highlight)
                action: '#2563eb', // Blue 600 (Vibrant Action)
                light: '#f1f5f9', // Slate 100 (Background)
                surface: '#ffffff', // White (Card Backgrounds)
                success: '#10b981', // Emerald 500
                danger: '#ef4444', // Red 500 (Keeping as standard warning, but distinct from brand colors)
            },
            fontFamily: {
                sans: ['Inter', 'Cairo', 'sans-serif'],
            },
            boxShadow: {
                'glow': '0 0 20px rgba(29, 78, 216, 0.5)',
                'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            }
        },
    },
    plugins: [],
}
