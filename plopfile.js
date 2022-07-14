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
            type: "add",
            path: "src/components/{{name}}/index.tsx",
            templateFile: "templates/index.hbs",
        },
        {
            type: "add",
            path: "src/components/{{name}}/{{name}}.tsx",
            templateFile: "templates/component.hbs",
        },
        {
            type: "add",
            path: "src/components/{{name}}/{{name}}.test.tsx",
            templateFile: "templates/test.hbs",
        },
        {
            type: "add",
            path: "src/components/{{name}}/{{name}}.story.tsx",
            templateFile: "templates/tsx-story.hbs",
        },
    ],
};

const generateComponent = plop => {
    plop.setGenerator("component", componentGenerator);
};

module.exports = generateComponent;
