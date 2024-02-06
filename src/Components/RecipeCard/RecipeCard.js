import React from "react";

export const RecipeCard = ({ title, time, id, image }) => {
  return (
    <div class="card hover:shadow-lg" key={id}>
      <img src={image} alt="chicken" class="h-32 sm:h-48 w-full object-cover" />
      <div class="m-4">
        <span class="font-bold">{title}</span>
        <span class="block text-gray-500 text-sm">Recipe by Mario</span>
      </div>
      <div class="badge flex justify-center items-center">
        <svg
          className="w-6 inline-block mr-1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <span>{time}</span>
      </div>
    </div>
  );
};
