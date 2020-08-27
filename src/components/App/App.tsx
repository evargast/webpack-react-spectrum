import { Button, Provider } from "@adobe/react-spectrum";
import * as React from "react";
import { FC } from "react";
import SpectrumWhiteTheme from "spectrum-white-theme";

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
        <Provider theme={SpectrumWhiteTheme} colorScheme="light">
            <Button variant="cta" isDisabled={disabled} onPress={onClick}>
                {text}
            </Button>
        </Provider>
    );
};

export default App;
