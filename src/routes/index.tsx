import {component$} from "@builder.io/qwik";
import {CounterAutoComponent} from "~/components/counter-auto";
import {CounterComponent} from "~/components/counter";
import {MUIButton, TableApp} from "~/integrations/react/mui";

export default component$(() => {

    return (
        <>
            <h1>Hello Qwik!</h1>
            <div>
                <CounterAutoComponent auto={true}/>
                <CounterComponent/>
                <MUIButton color={'primary'} variant={"contained"}>AAAA</MUIButton>
                <TableApp/>
            </div>
        </>
    );
});
