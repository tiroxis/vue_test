const { join, resolve } = require('path');
const { createReadStream } = require('fs');

const webpack = require('webpack');

const HtmlPlugin = require('html-webpack-plugin');
const HtmlTemplatePlugin = require('html-webpack-template');

module.exports = {
    context: __dirname,

    entry: join( __dirname, 'src/index.js' ),

    output: join( __dirname, 'public/bundle.js' ),

    resolve: {
        modules: [
            resolve('./src/'),
            resolve('./node_modules'),
        ],
        alias: {
            '@' : resolve('./src/')
        }
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            scss: 'vue-style-loader!css-loader!sass-loader?' +
                            JSON.stringify({
                                "includePaths":[
                                    resolve('./assets/scss'),
                                    resolve('./node_modules/compass-sass-mixins/lib'),
                                ]
                            })
                        }
                    }
                }]
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },

            {
                test: /\.scss$/,
                use: [{
                    loader : 'sass-loader',
                    options: {
                        includePaths : [
                            resolve('./assets/scss'),
                            resolve('./node_modules/compass-sass-mixins/lib'),
                        ]
                    }
                }],

            },

        ],
    },

    plugins: [
        new HtmlPlugin({
            filename: 'index.html',
            template: HtmlTemplatePlugin,
            inject: false,
            mobile: true,
            appMountId: 'app',
        }),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: `"${process.env.NODE_ENV}"`,
            },
        }),
    ],

    devServer: {
        contentBase: './public/',
        hot: true,
        port: 9000,
        setup(app) {
            app.get('/api/tiles', function(req, res)  {
                res.writeHead(200, { 'Content-Type' : 'application/json' });
                createReadStream(join(process.cwd(), 'api/tiles.json'), { encoding: 'utf-8' })
                    .pipe(res);
            });
        },
    },
};
