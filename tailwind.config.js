/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#0E0E10",
                secondary: "#FDFDFD",
            },
            fontFamily: {
                ubuntu: ["Ubuntu", "sans-serif"],
            },
        },
    },
    plugins: [],
};
