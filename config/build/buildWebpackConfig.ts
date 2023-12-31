import { BuildOptions } from "./types/config";
import webpack from 'webpack';
import { buildLoader } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions):webpack.Configuration{
    const {mode,paths,isDev} = options
    return {
  mode,
  entry: paths.entry,
  module: {
    rules: buildLoader(options),
  },
  resolve: buildResolvers(options),
  output: {
    filename: '[name].[contenthash].js',
    path: paths.build,
    clean: true,
  },
  plugins: buildPlugins(options),
  devtool: isDev ? 'inline-source-map' : undefined,
  devServer: isDev ? buildDevServer(options) : undefined 
};
}