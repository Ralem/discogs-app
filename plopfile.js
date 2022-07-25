module.exports = plop => {
  plop.setGenerator("component", {
    description: "Component generator",
    prompts: [
      { type: "input", name: "name", message: "What's the component's name" },
    ],
    actions: [
      {
        type: "addMany",
        destination: "src/components/{{pascalCase name}}",
        base: "generators/component",
        templateFiles: "generators/component/*.hbs",
      },
    ],
  });
};
