// ./tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_drafts/**/*.md",
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_pages/*.{html,md}",
    "./_posts/*.md",
    "./*.{html,md}",
  ],
  prefix: "tw-",
  important: true,
  corePlugins: {
  preflight: false,
  }
  // ...
};