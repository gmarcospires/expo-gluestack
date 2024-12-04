const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");

const config = getDefaultConfig(__dirname, {
  isCSSEnabled: true,
});

const projectRoot = __dirname;
// config.resolver.nodeModulesPaths = [path.resolve(projectRoot, "node_modules")];
// config.resolver.assetExts.push("cjs");

// config.resolver.sourceExts.push("js", "json", "ts", "tsx", "cjs");

module.exports = withNativeWind(config, { input: "./global.css" });
