import { Button, defaultTheme, Provider } from "@adobe/react-spectrum";
import * as React from "react";
import { FC } from "react";

interface HelloWorldProps {
    text: string;
}

const App: FC<HelloWorldProps> = props => (
    <Provider theme={defaultTheme}>
        <h1>{props.text}</h1>
        <Button variant="cta">Save</Button>
    </Provider>
);

export default App;
