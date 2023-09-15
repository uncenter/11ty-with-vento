const vento = require("ventojs").default;
const vto = vento();

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/assets/css");
	eleventyConfig.addPassthroughCopy("src/assets/js");
	eleventyConfig.addPassthroughCopy("src/assets/img");

	eleventyConfig.addTemplateFormats("vto");
	eleventyConfig.addExtension("vto", {
		compile: async (content, path) => {
			return async (data) => {
				const result = await vto.runString(content, data);
				return result.content;
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
