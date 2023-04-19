export const handleDarkMode = () => {
  const button = document.querySelector(".dark-mode__btn");
  const buttonImg = document.querySelector(".dark-mode__btn > img");
  const root = document.querySelector("html");

  const themePreference = JSON.parse(localStorage.getItem("dark__mode"));

  if (themePreference) {
    buttonImg.src = "./src/assets/vectors/sun.svg";
    root.classList.add("dark__mode");
  } else {
    buttonImg.src = "./src/assets/vectors/moon.svg";
    root.classList.remove("dark__mode");
  }

  button.addEventListener("click", () => {
    root.classList.toggle("dark__mode");

    if (root.classList.contains("dark__mode")) {
      buttonImg.src = "./src/assets/vectors/sun.svg";
      localStorage.setItem("dark__mode", true);
    } else {
      buttonImg.src = "./src/assets/vectors/moon.svg";
      localStorage.setItem("dark__mode", false);
    }
  });
};
