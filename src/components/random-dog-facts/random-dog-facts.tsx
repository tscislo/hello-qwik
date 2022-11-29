import { component$ } from "@builder.io/qwik";
// @ts-ignore
import dogFacts from "dog-facts";

export const shuffleArray = (array: string[]): string[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const getRandomFacts = () => shuffleArray(dogFacts.all);

export const RandomDogFacts = component$(() => {
  return (
    <div>
      <h1>Random Dog facts</h1>
      <ul>
        {getRandomFacts().map((i: string) => (
          <li>{i}</li>
        ))}
      </ul>
    </div>
  );
});
