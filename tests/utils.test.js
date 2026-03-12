import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PokemonCard from "../src/components/PokemonCard";

describe("PokemonCard", () => {
  test("affiche les informations du Pokémon", () => {
    const pokemon = {
      name: "pikachu",
      image: "pikachu.png",
      types: ["electric"],
      height: 4,
      weight: 60,
    };

    render(<PokemonCard pokemon={pokemon} />);

    expect(screen.getByText("pikachu")).toBeInTheDocument();
    expect(screen.getByText(/electric/i)).toBeInTheDocument();
  });
});