import { component$ } from "@builder.io/qwik";
import { Clock } from "~/components/clock/clock";
import { RandomDogFacts } from "~/components/random-dog-facts/random-dog-facts";

export default component$(() => {
  return (
    <div>
      <RandomDogFacts />
      <Clock />
    </div>
  );
});
