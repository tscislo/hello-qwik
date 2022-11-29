import { component$, useClientEffect$, useStore } from "@builder.io/qwik";

export const CounterAutoComponent = component$(({ auto }: { auto: boolean }) => {
  const counter = useStore({ count: 10 });

  if (auto) {
    useClientEffect$(() => {
      const update = () => {
        counter.count += 1;
      };
      update();
      const tmrId = setInterval(update, 1000);
      return () => clearInterval(tmrId);
    });
  }

  return (
    <div>
      <p>Counter: {counter.count}</p>
    </div>
  );
});
