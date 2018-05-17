const path = require("path");

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
    // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    storybookBaseConfig.module.rules.push({
            test: [/\.eot$/,/\.woff$/,/\.woff2$/, /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/, /\.ttf$/],
            loader: require.resolve('url-loader'),
            options: {
                limit: 10000,
                name: 'static/media/[name].[hash:8].[ext]',
            },
        },
        {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../")
    },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                require.resolve('style-loader'),
                {
                    loader: require.resolve('css-loader'),
                    options: {
                        importLoaders: 1,
                        modules: true,
                        localIdentName: "[name]__[local]___[hash:base64:5]"
                    },
                }
            ],
        },
        {
            test: /\.css$/,
            include: /node_modules/,
            use: [
                require.resolve('style-loader'),
                {
                    loader: require.resolve('css-loader'),
                    options: {
                        importLoaders: 1,
                    },
                }
            ],
        },);

    // Return the altered config
    return storybookBaseConfig;
};