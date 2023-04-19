import { renderCards } from "./render.js";

export const handleGenreFilter = (array) => {
  const inputs = document.querySelectorAll(".filters input");
  const slider = document.querySelector(".filter__input input");
  const maxPrice = document.querySelector(".filter__max-price");

  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      const filteredAlbums = array.filter((album) => {
        return album.category === Number(input.id);
      });

      renderCards(filteredAlbums);
      handlePriceFilter(filteredAlbums);

      if (input.id === "0") {
        renderCards(array);
        handlePriceFilter(array);
      }

      slider.value = 0;
      const progressBarColor = `linear-gradient(90deg, var(--color-brand-1) ${slider.value}%, var(--color-grey-5) ${slider.value}%)`;
      slider.style.background = progressBarColor;
      maxPrice.innerText = `Até R$ ${slider.value}`;
    });
  });
};

export const handlePriceFilter = (array) => {
  const slider = document.querySelector(".filter__input input");
  const maxPrice = document.querySelector(".filter__max-price");

  slider.addEventListener("input", () => {
    maxPrice.innerText = `A partir de R$ ${slider.value}`;

    const filteredAlbums = array.filter((album) => {
      return album.price >= slider.value;
    });

    renderCards(filteredAlbums);
  });
};
