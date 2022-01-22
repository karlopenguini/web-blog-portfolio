const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            width: {
                52.5: "52.5rem",
            },
            colors: {
                "light-blue": colors.lightBlue,
                cyan: colors.cyan,
            },
        },
    },
    plugins: [],
};
