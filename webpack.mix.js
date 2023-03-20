let mix = require("laravel-mix");

mix
  .js(
    "sermon-central/scripts/gam-head.js",
    "sermon-central/dist/gam-head.min.js"
  )
  .js("faithit/scripts/gam-head.js", "faithit/dist/gam-head.min.js")
  .js("churchleaders/scripts/gam-head.js", "churchleaders/dist/gam-head.min.js")
  .js("foreverymom/scripts/gam-head.js", "foreverymom/dist/gam-head.min.js");
