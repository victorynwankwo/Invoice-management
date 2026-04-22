// import {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
//   ReactNode,
// } from "react";

// type Theme = "light" | "dark";

// type ThemeContextType = {
//   theme: Theme;
//   toggleTheme: () => void;
// };


// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


// export function ThemeProvider({ children }: { children: ReactNode }) {
//   const [theme, setTheme] = useState<Theme>("light");

  
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");

//     if (savedTheme === "light" || savedTheme === "dark") {
//       setTheme(savedTheme);
//       document.documentElement.setAttribute("data-theme", savedTheme);
//     } else {
//       document.documentElement.setAttribute("data-theme", "light");
//     }
//   }, []);

//   // Toggle theme
//   const toggleTheme = () => {
//     setTheme((prev) => {
//       const newTheme: Theme = prev === "light" ? "dark" : "light";

//       localStorage.setItem("theme", newTheme);
//       document.documentElement.setAttribute("data-theme", newTheme);

//       return newTheme;
//     });
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// // Custom hook to use theme
// export function useTheme() {
//   const context = useContext(ThemeContext);

//   if (!context) {
//     throw new Error("useTheme must be used inside ThemeProvider");
//   }

//   return context;
// }