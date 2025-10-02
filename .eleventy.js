module.exports = async function (eleventyConfig) {
    const { HtmlBasePlugin } = await import("@11ty/eleventy");

    eleventyConfig.addPlugin(HtmlBasePlugin);

    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/js");

    // SHORTCODES
    eleventyConfig.addNunjucksShortcode("year", () => `${new Date().getFullYear()}`);

    return {
        pathPrefix: process.env.ELEVENTY_ENV === "production" ? "" : "/acm/",
        // deploy to docs folder, so github pages will recognize the output code as the "root"
        dir: { input: "src", output: "docs", includes: "_includes" }
    };
};
