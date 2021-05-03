const prettierConfig = require("./prettier.config");

const componentGenerator = {
    prompts: [
        {
            type: "input",
            name: "name",
            message: "component name",
        },
    ],
    actions: [
        {
            type: "pretty-add",
            path: "src/components/{{name}}/index.tsx",
            templateFile: "templates/index.hbs",
        },
        {
            type: "pretty-add",
            path: "src/components/{{name}}/{{name}}.tsx",
            templateFile: "templates/component.hbs",
        },
        {
            type: "pretty-add",
            path: "src/components/{{name}}/{{name}}.test.tsx",
            templateFile: "templates/test.hbs",
        },
        {
            type: "pretty-add",
            path: "src/components/{{name}}/{{name}}.story.tsx",
            templateFile: "templates/tsx-story.hbs",
        },
    ],
};

const generateComponent = plop => {
    plop.load("plop-prettier", { ...prettierConfig, parser: "typescript" });
    plop.setGenerator("component", componentGenerator);
};

module.exports = generateComponent;
