import { Grid, lightTheme, Provider as ProviderV3, repeat, View } from "@adobe/react-spectrum";
import { BackgroundColor } from "@react-types/shared";
import React, { FC } from "react";

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

    const colors: BackgroundColor["5"][] = [];
    for (const color of baseColors) {
        for (let i = 4; i <= 7; i++) {
            colors.push(`${color}-${i}00` as BackgroundColor["5"]);
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
                    <View colorVersion={5} key={color?.toString()} backgroundColor={color} />
                ))}
            </Grid>
        </ProviderV3>
    );
};

export { App };
