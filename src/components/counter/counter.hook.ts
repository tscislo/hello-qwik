import { useStore } from "@builder.io/qwik";

export interface CounterStore {
  count: number;
}

export const useCounterStore = ({
  count,
}: {
  count: number;
}): { counter: CounterStore } => {
  const counter = useStore({ count });
  return { counter };
};
