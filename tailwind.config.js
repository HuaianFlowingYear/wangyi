/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    // glob语法
    // 当前目录下src目录下的所文件夹下的所有vue文件,都会被检查
    content: ["./src/**/*.vue"],
    theme: {
        extend: {},
    },
    plugins: [],
}