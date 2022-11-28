import {component$, useClientEffect$, useStore} from "@builder.io/qwik";

export const CounterAutoComponent = component$(({auto}: { auto: boolean }) => {
    const counter = useStore({count: 0});
    const items = new Array(60).fill(null).map((_, index) => 'item ' + index);

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
            <ul>
                {items.map((i) => (
                    <li>{i}</li>
                ))}
            </ul>
        </div>
    );
});
