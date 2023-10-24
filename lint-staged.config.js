module.exports = {
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "eslint"],
  "**/*.ts?(x)": () => "npm run check-types",
  "*.{json,yaml}": ["prettier --write"],
};

// module.exports = {
//   // Run ESLint with --fix and then without --fix on all JavaScript and TypeScript files
//   "*.{js,jsx,ts,tsx}": ["eslint --fix", "eslint", "prettier --write"],
//   // Run a type-checking tool on all TypeScript files
//   "**/*.ts?(x)": () => "npm run check-types",
//   // Run Prettier on all JSON and YAML files
//   "*.{json,yaml}": ["prettier --write"],
// };
