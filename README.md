# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

npm create @vite/latest surfflix-app (Note name of the app should be in small letters...)
npm install to install the dependencies
npm run dev to run the application

Configure Tailwind Css
Install tailwind Packages
npm install tailwindcss @tailwindcss/vite
Update vite Config to include  tailwindcss() in plugins
@import "tailwindcss"; in the css files.

Surfflix App Features:
SignUp/Login
Browse(Available Media Files)
    -Header
    -Main Movie
    -Traiker in the Background
    -Title & Description
    -Movie Suggestions
        -Movies and reviews
SurfFlixGPT
    -SearchBar
    -Moview Suggestion

Git Commands
Create repository "surfflix-app"
    git init
    git remote add origin https://github.com/SudhakarGarikipati/surfflix-app.git
    git branch
    git branch -M main
    git add .
    git commit -m "Initial commit"
    git push -u origin main

Routing implementation
npm install react-router-dom 
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
const appRouter = createBrowserRouter([
    {
      path: "/",
      element:<Component/>
    },
    {

    }
    ])

return(
    <div>
     <RouterProvider router={appRouter} />
    <div>
)
https://assets.nflxext.com/ffe/siteui/vlv3/c81956f1-5750-454c-9b3c-7a4d990d3d06/web/US-en-20251208-TRIFECTA-perspective_bcd79522-5a87-4df0-9d4e-88afa5c7a5c2_large.jpg

https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-df0c-7f5c-bf9d-7c8da3876c6e/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png
