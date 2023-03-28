/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#0E0E10",
                secondary: "#FDFDFD",
                "primary-60": "#9999a5",
                "primary-15": "#303036",
                "primary-5": "#19191d"
            },
            fontFamily: {
                ubuntu: ["Ubuntu", "sans-serif"],
                lora: ["Lora", "serif"],
            },
            fontSize: {
                8: "2rem",
                10: "2.5rem",
            },
            transitionTimingFunction: {
                easeOutExpo: "cubic-bezier(0.16, 1, 0.3, 1)"
            },
            animation: {
                current: 'current 7s ease-in-out infinite'
            },
            keyframes: {
                current: {
                    from: { offsetDistance: "0%"},
                    to: { offsetDistance: "100%"}
                }
            }
        },
    },
    plugins: [],
    darkMode: "class"
};
