import { defaultTheme, Provider } from "@adobe/react-spectrum";
import { ColorScheme } from "@react-types/provider";
import { render, RenderResult } from "@testing-library/react";
import React, { ReactElement } from "react";

const customRender = (
    element: ReactElement,
    colorScheme: ColorScheme = "light",
): RenderResult => {
    return render(
        <Provider theme={defaultTheme} colorScheme={colorScheme}>
            {element}
        </Provider>,
    );
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
