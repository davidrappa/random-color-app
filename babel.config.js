module.exports = {
  presets: ["babel-preset-expo"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@hooks": "./src/hooks",
          "@services": "./src/services",
          "@utils": "./src/utils",
        },
      },
    ],
  ],
};
