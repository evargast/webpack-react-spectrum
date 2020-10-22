import { Button, lightTheme, Provider } from "@adobe/react-spectrum";
import * as React from "react";
import { FC } from "react";

interface AppProps {
    text?: string;
    disabled?: boolean;
    onClick?: VoidFunction;
}

const App: FC<AppProps> = ({
    onClick,
    text = "Welcome to Adobe Spectrum !",
    disabled = false,
}) => {
    return (
        <Provider theme={lightTheme} colorScheme="light">
            <Button variant="cta" isDisabled={disabled} onPress={onClick}>
                {text}
            </Button>
        </Provider>
    );
};

export default App;
