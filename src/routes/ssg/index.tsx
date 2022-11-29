import { component$ } from "@builder.io/qwik";
import { getRandomFacts } from "~/components/random-dog-facts";

export default component$(() => {
  return (
    <div>
      <h1>Random Dog facts</h1>
      <ul>
        {getRandomFacts().map((i) => (
          <li>{i}</li>
        ))}
      </ul>
    </div>
  );
});
