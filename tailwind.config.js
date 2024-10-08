/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],

    theme: {
        extend: {
            colors: {
                'blue': '#0d6efd',
                'indigo': '#6610f2',
                'purple': '#6f42c1',
                'pink': '#d63384',
                'red': '#dc3545',
                'orange': '#fd7e14',
                'yellow': '#ffc107',
                'green': '#198754',
                'teal': '#20c997',
                'cyan': '#0dcaf0',
                'white': '#fff',
                'gray': {
                  DEFAULT: '#6c757d',
                  'light': '#f5f7f8',
                  'medium': '#667280',
                  'dark': '#343a40',
                  '100': '#f8f9fa',
                  '200': '#e9ecef',
                  '300': '#dee2e6',
                  '400': '#ced4da',
                  '500': '#adb5bd',
                  '600': '#6c757d',
                  '700': '#495057',
                  '800': '#343a40',
                  '900': '#212529',
                },
                'primary': '#2a7de1',
                'secondary': '#051c2c',
                'success': '#00a450',
                'info': '#0dcaf0',
                'warning': '#ffc107',
                'danger': '#dc3545',
                'light': '#f8f9fa',
                'dark': '#212529',
              },
              fontFamily: {
                'sans': ['Open Sans', 'sans-serif'],
              },
              fontSize: {
                'base': '1rem',
              },
              fontWeight: {
                'normal': '400',
              },
              lineHeight: {
                'body': '1.75',
              },
              backgroundImage: {
                'lightblue-gradient': 'linear-gradient(180deg, #e6f2ff, #ffffff)',
                'lightgray-gradient': 'linear-gradient(180deg,#e7e7e7 0,#fff)',
              },
              boxShadow: {
                'custom': '0 2px 6px rgba(0, 0, 0, 0.2)',
              },
            maxWidth: {
                'custom': '1210px',
              },
            width: {
                custom: "1210px",
            },
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
