import { component$ } from "@builder.io/qwik";
import { CounterComponent } from "~/components/counter";
import { CounterAutoComponent } from "~/components/counter-auto";

export default component$(() => {

  return (
    <div>
      <CounterAutoComponent auto={true} />
      <CounterComponent />
    </div>
  );
});
