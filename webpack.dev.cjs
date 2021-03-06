const { HotModuleReplacementPlugin, DefinePlugin } = require("webpack");
const merge = require("webpack-merge");

module.exports = merge(require("./webpack.conf.cjs"), {
	mode: "development",
	output: {
		filename: "app/[name].dev.js"
	},
	plugins: [
		new HotModuleReplacementPlugin(),
		new DefinePlugin({ PRODUCTION: JSON.stringify(false) })
	],
	devtool: "eval-source-map",
	devServer: {
        port: 8080,
        contentBase: "./src",
		index: "index.html",
        watchContentBase: true,
		writeToDisk: false,
		historyApiFallback: {
			index: "/index.html",
			disableDotRule: true
		},
		proxy: {
        	"/api": {
            	target: "http://localhost:4000/",
            	secure: false
        	}
    	},
		hot: true,
		inline: true,
		open: true,
		host: "localhost",
    }
});
