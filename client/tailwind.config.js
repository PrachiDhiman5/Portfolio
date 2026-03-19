/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--color-background)',
                surface: 'var(--color-surface)',
                navy: 'var(--color-deep-blue)',
                forest: 'var(--color-deep-green)',
                primary: 'var(--color-primary)',
                cobalt: 'var(--color-cobalt)',
                emerald: 'var(--color-emerald)',
                amber: 'var(--color-amber)',
                border: 'var(--color-border)',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['"JetBrains Mono"', 'monospace'],
            }
        },
    },
    plugins: [],
}
