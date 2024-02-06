import React from "react";
import biryani from "../img/biryani.jpg";
import cake from "../img/cake.jpg";
import indianThali from "../img/indianThali.jpg";
import chicken from "../img/chicken.jpg";
import macaroons from "../img/macaroons.jpg";
import paneer from "../img/paneer.jpg";
import { RecipeCard } from "../Components/RecipeCard/RecipeCard";
import "..";
import { Link } from "react-router-dom";

const recipes = [
  {
    id: 0,
    title: "Spicy Chicken",
    image: chicken,
    time: "20 mins",
  },
  {
    id: 1,
    title: "Spicy Biryani",
    image: biryani,
    time: "50 mins",
  },
  {
    id: 2,
    title: "Rainbow Cake",
    image: cake,
    time: "30 mins",
  },
];

const popularRecipes = [
  {
    id: 3,
    title: "Indian Thali",
    image: indianThali,
    time: "40 mins",
  },
  {
    id: 4,
    title: "Paneer Handi",
    image: paneer,
    time: "25 mins",
  },
  {
    id: 5,
    title: "Sweet Macaroons",
    image: macaroons,
    time: "35 mins",
  },
];

export const Home = () => {
  return (
    <main class="px-16 py-6 md:col-span-5 bg-gray-100">
      <div class="flex justify-center md:justify-end">
        <Link
          to="/signin"
          class="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
        >
          Log in
        </Link>
        <a
          href="/"
          class="btn text-primary ml-2 border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
        >
          Sign up
        </a>
      </div>

      <header>
        <h2 class="text-gray-700 text-6xl font-semibold">Recipes</h2>
        <h3 class="text-2xl font-semibold">For Beginners</h3>
      </header>

      <div>
        <h4 class="font-bold pb-2 mt-12 border-b border-gray-200">Latest Recipes</h4>

        <div class="mt-8 grid lg:grid-cols-3 gap-10">
          {recipes.map((recipe) => (
            <RecipeCard title={recipe.title} time={recipe.time} id={recipe.id} image={recipe.image} />
          ))}
        </div>

        <h4 class="font-bold pb-2 mt-12 border-b border-gray-200">Most Popular</h4>

        <div class="mt-8 grid lg:grid-cols-3 gap-10">
          {popularRecipes.map((recipe) => (
            <RecipeCard title={recipe.title} time={recipe.time} id={recipe.id} image={recipe.image} />
          ))}
        </div>
      </div>

      <div class="mt-12 flex justify-center">
        <div class="btn bg-secondary-100 text-secondary-200 inline-block hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
          Load more
        </div>
      </div>
    </main>
  );
};
