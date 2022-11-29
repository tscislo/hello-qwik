import { component$, useStore } from "@builder.io/qwik";

export const CounterComponent = component$(() => {
  const counter = useStore({ count: 0 });
  return (
    <div>
      <p>Counter: {counter.count}</p>
      <p>
        <button onClick$={() => counter.count++}>Count UP</button>
      </p>
    </div>
  );
});
