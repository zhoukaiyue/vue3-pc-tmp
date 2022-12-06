/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-11-28 16:42:22
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-12-06 15:12:00
 */
import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { createHtmlPlugin } from 'vite-plugin-html';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import { visualizer } from 'rollup-plugin-visualizer';
/**
 * * unocss插件，原子css
 * https://github.com/antfu/unocss
 */
import Unocss from 'unocss/vite';

const RegImg = /\.(png|jpe?g|gif|svg)(\?.*)?$/;
const RegMedia = /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/;
const RegFonts = /\.(woff2?|eot|ttf|otf)(\?.*)?$/;

// https://vitejs.dev/config/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineConfig(({ command, mode }) => {
    // 根据当前工作目录中的 `mode` 加载 .env 文件
    // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const env = loadEnv(mode, process.cwd(), '');
    return {
        plugins: [
            vue(),
            vueJsx(),
            Unocss(),
            AutoImport({
                imports: [
                    'vue',
                    {
                        'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar']
                    }
                ]
            }),
            Components({
                resolvers: [NaiveUiResolver()]
            }),
            // 对html模板做压缩处理。文档【https://www.npmjs.com/package/vite-plugin-html】
            createHtmlPlugin({
                minify: true,
                inject: {
                    data: {
                        title: 'vue3-pc-tmp'
                    }
                }
            }),
            // rollup打包分析插件。文档【https://www.npmjs.com/package/rollup-plugin-visualizer】
            env.VITE_APP_BUNDLE_ANALYZE === '1' &&
                visualizer({
                    open: true,
                    gzipSize: true,
                    brotliSize: true
                })
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        // esbuild配置。文档【https://cn.vitejs.dev/config/shared-options.html#esbuild】
        esbuild: {
            // 删除所有断点。
            drop: env.VITE_APP_DROP_DEBUGGER === '1' ? ['debugger'] : [],
            //删除console.log。
            pure: env.VITE_APP_PURE_CONSOLE === '1' ? ['console.log'] : [],
            // 移除代码注释
            ignoreAnnotations: false,
            legalComments: 'none'
        },
        // 构建选项
        build: {
            cssCodeSplit: false, //打包为一个 CSS 文件
            //构建时清空outDir目录。
            emptyOutDir: true,
            //指定生成静态资源的存放路径
            assetsDir: 'assets',
            // Rollup 打包配置
            rollupOptions: {
                plugins: [],
                output: {
                    entryFileNames: 'assets/js/[name]-[hash].js',
                    chunkFileNames: 'assets/js/[name]-[hash].js',
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    // 按file type分包
                    assetFileNames: (assetInfo: { name?: string }) => {
                        // img
                        if (assetInfo.name && RegImg.test(assetInfo.name)) {
                            return 'assets/img/[name]-[hash][extname]';
                        }
                        // media
                        if (assetInfo.name && RegMedia.test(assetInfo.name)) {
                            return 'assets/media/[name]-[hash][extname]';
                        }
                        // fonts
                        if (assetInfo.name && RegFonts.test(assetInfo.name)) {
                            return 'assets/fonts/[name]-[hash][extname]';
                        }
                        return 'assets/[ext]/[name]-[hash][extname]';
                    },
                    chunkSizeWarningLimit: 1500, //上调单个模块文件限制的上限
                    emptyOutDir: true, //清空root下dist文件夹内容
                    // 分包配置，配置完成自动按需加载
                    manualChunks: {
                        vue: ['vue', 'vue-router'],
                        tool: ['qs']
                    }
                }
            }
        },
        // 开发服务器选项
        server: {
            host: '0.0.0.0',
            port: 24000,
            hmr: true, //热更新
            // 为开发服务器配置自定义代理规则。文档【https://cn.vitejs.dev/config/server-options.html#server-proxy】
            proxy: {
                '/proxy_url': {
                    target: env.VITE_APP_PROXY_URL,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/proxy_url/, '')
                }
            }
        }
    };
});
