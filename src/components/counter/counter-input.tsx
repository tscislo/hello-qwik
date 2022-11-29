import { component$ } from "@builder.io/qwik";
import { CounterStore } from "~/components/counter/counter.hook";

export const CounterInput = component$(
  ({ counter }: { counter: CounterStore }) => {
    return (
      <div>
        <input
          type={"number"}
          value={counter.count}
          onInput$={(ev) =>
            (counter.count = Number((ev.target as HTMLInputElement).value))
          }
        />
      </div>
    );
  }
);
