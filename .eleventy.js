module.exports = function (eleventyConfig) {

  // Add passthrough copy for assets and CSS
  eleventyConfig.addPassthroughCopy("./src/assets/");
  eleventyConfig.addPassthroughCopy("./src/css/");

  // Add watch target for CSS
  eleventyConfig.addWatchTarget("./src/css/");

  // Set output directory
  return {
    dir: {
      input: "src",
      output: "public",
    }
  };
};
