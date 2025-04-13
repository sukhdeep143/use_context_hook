# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

 Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Here’s a `README.md` file for your [use_context_hook](https://github.com/sukhdeep143/use_context_hook) repo — simple, clean, and informative:

---

```markdown
# 🧠 React useContext Hook Example

This is a simple React project demonstrating how to use the `useContext` hook to avoid **prop drilling** and manage state more efficiently.

 📁 Project Structure

```
/use_context_hook
├── App.js        // Main component providing the context value
├── CompA.js      // Intermediate component
├── CompB.js      // Intermediate component
├── CompC.js      // Component that consumes the context
└── Context.js    // Context is created here
```

 🚀 What You’ll Learn

- How to create and use `React.createContext`
- How to provide context using `<Context.Provider>`
- How to consume context using `useContext`
- How to eliminate unnecessary prop drilling

 🧩 How It Works

1. `Context.js` — Creates a context using `createContext()`
2. `App.js` — Wraps `CompA` in the Context Provider and passes a value
3. `CompC.js` — Directly consumes the context using `useContext`, without receiving props from `App → CompA → CompB`

 🧪 Output Example

```jsx
My name is Sukhdeep Singh
```

 💡 Why useContext?

Using `useContext` improves your code by:

- Making it cleaner and easier to maintain
- Avoiding the hassle of passing props through multiple levels
- Promoting better separation of concerns

 🛠️ Getting Started

1. Clone the repo:

```bash
git clone https://github.com/sukhdeep143/use_context_hook.git
cd use_context_hook
```

2. Install dependencies (if needed):

```bash
npm install
```

3. Run the app:

```bash
npm start
```

 ✨ Author

Made with ❤️ by [Sukhdeep Singh](https://github.com/sukhdeep143)

---

Happy Coding! 🚀
```

---

