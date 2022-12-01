import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { QwikLogo } from "../icons/qwik";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        <Link href={"/"}>
          <QwikLogo />
        </Link>
      </div>
      <ul>
        <li>
          <Link href={"/counter"}> Counter</Link>
        </li>
        <li>
          <Link href={"/ssg"}> SSG/CSR</Link>
        </li>
        <li>
          <Link href={"/progressive"}> Progressive</Link>
        </li>
        <li>
          <Link href={"/react-basic"}> React Basic</Link>
        </li>
        <li>
          <Link href={"/react-table"}> React Table</Link>
        </li>
        <li>
          <Link href={"/serialization"}> Serialization</Link>
        </li>
      </ul>
    </header>
  );
});
