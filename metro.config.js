// module.exports = {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: true,
//         resolver: {
//         sourceExts: ['js', 'json', 'ts', 'tsx', 'cjs'],
//         },
//       },
//     }),
//   },
// };

const { getDefaultConfig } = require('@expo/metro-config');
const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.assetExts.push('cjs');
module.exports = defaultConfig;