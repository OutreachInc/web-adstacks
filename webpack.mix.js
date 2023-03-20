let mix = require("laravel-mix");

mix
  .minify(
    "sermon-central/scripts/gam-head.js",
    "sermon-central/dist/gam-head.min.js",
    false
  )
  .minify("faithit/scripts/gam-head.js", "faithit/dist/gam-head.min.js", false)
  .minify(
    "churchleaders/scripts/gam-head.js",
    "churchleaders/dist/gam-head.min.js",
    false
  )
  .minify(
    "foreverymom/scripts/gam-head.js",
    "foreverymom/dist/gam-head.min.js",
    false
  );
