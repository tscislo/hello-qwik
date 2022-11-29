import { component$ } from "@builder.io/qwik";
import { CounterComponent } from "~/components/counter/counter";
import { CounterAutoComponent } from "~/components/counter/counter-auto";

export default component$(() => {
  return (
    <div>
      <CounterAutoComponent />
      <CounterComponent />
    </div>
  );
});
