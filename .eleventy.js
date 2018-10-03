const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = (eleventyConfig) => {

	eleventyConfig.addPlugin(syntaxHighlight);

	eleventyConfig.addCollection("posts", (collection) => {
		return collection.getFilteredByGlob("_posts/**/*.md");
	});

	eleventyConfig.addCollection("products", (collection) => {
		return collection.getFilteredByGlob("_products/**/*.md");
	});

	return {
		templateFormats: [
			"md",
			"ejs",
			"css",
			"svg",
			"png",
			"mustache",
		],
		passthroughFileCopy: true,
	};
};
