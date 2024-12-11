export const toggleDarkMode: VoidFunction = () => {
  document.documentElement.classList.toggle("dark");
  const isDark = document.documentElement.classList.value === "dark";
  if (isDark) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.removeItem("dark-mode");
  }
};

export const getDarkValue: VoidFunction = () => {
  const getDarkFromLocalStorage = localStorage.getItem("dark-mode");
  if (getDarkFromLocalStorage) {
    document.documentElement.classList.add("dark");
  }
};
