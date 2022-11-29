import {
  component$,
  useClientEffect$,
  useStore,
  useStyles$,
} from "@builder.io/qwik";
import styles from "./clock.scss";

export const Clock = component$(() => {
  useStyles$(styles);

  const store = useStore({
    hour: {},
    minute: {},
    second: {},
  });

  useClientEffect$(() => {
    const getStyle = (deg: number) => ({ transform: `rotate(${deg}deg)` });
    const update = () => {
      const now = new Date();
      store.second = getStyle(now.getSeconds() * (360 / 60));
      store.minute = getStyle(now.getMinutes() * (360 / 60));
      store.hour = getStyle(now.getHours() * (360 / 12));
    };
    update();
    const tmrId = setInterval(update, 1000);
    return () => clearInterval(tmrId);
  });

  console.log("Render Clock");
  return (
    <div class="clock">
      <div class="twelve"></div>
      <div class="three"></div>
      <div class="six"></div>
      <div class="nine"></div>
      <div class="hour" style={store.hour}></div>
      <div class="minute" style={store.minute}></div>
      <div class="second" style={store.second}></div>
    </div>
  );
});
