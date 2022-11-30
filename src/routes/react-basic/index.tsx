import { component$ } from "@builder.io/qwik";
import { MUIButton, MUITextField } from "~/integrations/react/mui";

export default component$(() => {
  const variant = "contained";
  const label = "Edit me please!";
  return (
    <>
      <h1>React Basic</h1>
      <div style={{ marginBottom: "10px" }}>
        <MUIButton variant={variant} host:onClick$={() => alert("click")}>
          Im React Material button!
        </MUIButton>
      </div>
      <div>
        <MUITextField label={label}></MUITextField>
        <a
          href={"https://mui.com/material-ui/react-text-field/#basic-textfield"}
          target={"_blank"}
        >
          MUI doc
        </a>
      </div>
    </>
  );
});
