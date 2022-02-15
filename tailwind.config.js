module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            animation: {
                slidein: 'slidein 0.2s ease forwards',
            },
            keyframes: {
                slidein: {
                    '0%': { transform: 'translate(0,20%)', opacity: 0 },
                    '100%': { transform: 'translate(0,0)', opacity: 1 },
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
}
