import { component$, useClientEffect$, useStore } from "@builder.io/qwik";

export const CounterAutoComponent = component$(() => {
  const counter = useStore({ count: 0 });

  useClientEffect$(() => {
    const tmrId = setInterval(() => (counter.count += 1), 1000);
    return () => clearInterval(tmrId);
  });

  return (
    <div>
      <p>Counter: {counter.count}</p>
    </div>
  );
});
