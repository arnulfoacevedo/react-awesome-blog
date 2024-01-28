import { createContext, useState } from 'react';

const ThemeContext = createContext();
const lsUser = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null;
const lsTheme = localStorage.getItem('theme')
  ? localStorage.getItem('theme')
  : 'light';
const lsBackendAPI = localStorage.getItem('backendAPI')
  ? localStorage.getItem('backendAPI')
  : 'https://jsonplaceholder.typicode.com';
function ThemeContextProvider(props) {
  const [theme, setTheme] = useState(lsTheme);
  const [user, setUser] = useState(lsUser);
  const [backendAPI, setBackendAPI] = useState(lsBackendAPI);
  const toggleBackendAPI = () => {
    setBackendAPI(
      backendAPI === '/api' ? 'https://jsonplaceholder.typicode.com' : '/api'
    );
    localStorage.setItem(
      'backendAPI',
      backendAPI === '/api' ? 'https://jsonplaceholder.typicode.com' : '/api'
    );
  };
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
  };
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        user,
        setUser,
        backendAPI,
        toggleBackendAPI,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
