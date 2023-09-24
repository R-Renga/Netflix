PS D:\netflix\netflix-app> git remote add origin https://github.com/R-Renga/Netflix.git
PS D:\netflix\netflix-app> git branch -M main
PS D:\netflix\netflix-app> git push -u origin main


1.Npx create-react-app netflix-app

2.make a folder structure

3.Install tailwind

4.npm install -D tailwindcss

5.npx tailwindcss init - for config

6. Tailwind.config.file ->
 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,html}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

7.index.css 

@tailwind base;
@tailwind components;
@tailwind utilities;


8.   Features : 

   login/signup
   Home page - after auth
     Header
     Main movie
     Title,desc
  Movie suggestions
      Movie list


