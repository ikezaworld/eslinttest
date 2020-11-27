module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "warn",
    "prefer-template": "warn",
  },
};
