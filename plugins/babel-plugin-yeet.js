const { default: template } = require("@babel/template");

module.exports = function (babel) {
  const { types: t } = babel;

  return {
    name: "yeet",
    visitor: {
      Identifier(path) {
        if (path.node.name === "Yeet") {
          path.replaceWith(t.identifier("throw"));
        }
        if (path.node.name === "Sus") {
          path.replaceWith(t.identifier("Error"));
        }
      },
    },
  };
};
