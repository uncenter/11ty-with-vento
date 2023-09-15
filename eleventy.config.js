const vento = require("ventojs").default;
const vto = vento({
	includes: "./src/_includes",
});

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/assets/css");
	eleventyConfig.addPassthroughCopy("src/assets/js");
	eleventyConfig.addPassthroughCopy("src/assets/img");

	eleventyConfig.addTemplateFormats("vto");
	eleventyConfig.addExtension("vto", {
		compile: async (inputContent) => {
			return async (data) => {
				const { content } = await vto.runString(inputContent, data);
				return content;
			};
		},
	});

	return {
		dir: {
			input: "src",
			includes: "_includes",
			data: "_data",
			output: "dist",
		},
	};
};
