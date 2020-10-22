import {
    Grid,
    lightTheme,
    Provider as ProviderV3,
    repeat,
    View,
} from "@adobe/react-spectrum";
import React, { ComponentProps, FC } from "react";

import "./App.css";

const App: FC = () => {
    const baseColors = [
        "celery",
        "chartreuse",
        "yellow",
        "magenta",
        "fuchsia",
        "purple",
        "indigo",
        "seafoam",
        "red",
        "orange",
        "green",
        "blue",
    ];

    type BackgroundColor = ComponentProps<typeof View>["backgroundColor"];
    const colors: BackgroundColor[] = [];
    for (const color of baseColors) {
        for (let i = 4; i <= 7; i++) {
            colors.push(`${color}-${i}00` as BackgroundColor);
        }
    }

    return (
        <ProviderV3 theme={lightTheme} colorScheme={"light"}>
            <View paddingTop="size-400">
                <h1 className="App">Welcome to React Spectrum!</h1>
            </View>

            <Grid
                columns={repeat("auto-fit", "size-800")}
                autoRows="size-800"
                justifyContent="center"
                gap="size-100"
                marginX="size-200"
                marginTop="size-300"
                marginBottom="size-400"
            >
                {colors.map(color => (
                    <View key={color} backgroundColor={color} />
                ))}
            </Grid>
        </ProviderV3>
    );
};

export default App;
