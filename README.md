# 简介

vue3-pc-tmp 基于 Vue3.x setup + TypeScript + Vite + Pinia + naiveui + sass + unocss + axios（封装）+
Eslint + Prettier + dayjs 等流行技术栈构建 PC 端模板脚手架，开箱即用。

# 技术规范

## 环境要求

-   node >14
-   pnpm >=7
-   支持现代浏览器以及 Chrome >= 51、iOS >= 10.0（与 Vue 3 一致）。

## 编辑器以及对应扩展

-   Visual Studio v69+
-   Vetur v0.35.0+
-   Eslint v2.2.6+
-   Prettier - Code formatter v9.5.0+
-   UnoCSS v0.47.6+

## 快速开发

```
#安装项目依赖
pnpm install
#开发环境启动
pnpm start
#打包 test 环境代码
pnpm build:test
#打包生产环境代码
pnpm build or pnpm build:prod
#执行 js 类型检查
pnpm lint:fix
#执行 prettier 批量格式化代码
pnpm lint:prettier

##注：详细请阅读package.json 以及对应的环境配置文件（即.env 文件）！
```

## 开发基础规范

-   🚀 重要、复杂逻辑一定要写注释；
-   🚀 代码规范按照 eslint 的规则来，做到 no waring 和 no error；
-   🚀 项目业务开发，优先使用 vue 全家桶技术栈开发项目，预编译使用 sass；
-   🚀 操作成功或失败后要有提示，比如新增成功、新增失败运行时间长的任务（计算量大、请求后台接口），要有 loadding 效果；
-   🚀 vue 单文件组件代码规范，html、script、style 的位置顺序 html > script > style；
-   🚀 公共的状态才放到 store；
-   🚀 代码尽量往纵向发展，一行不要太长；
-   🚀 不要在钩子函数中写大量业务代码；
-   🚀 异步使用 aysnc await 语法；
-   🚀 不是常用的方法不要全局挂载；
-   🚀 文件命名如果是多单词则采用驼峰命名或者烤肉串大小写，尽量简洁明了；

### 基础组件名。 【注：src/components 目录。】

> 基础组件文件命名应该以 base 为前缀命名，以示其唯一性，并且以横线连接。

```
例子：
src
└─ resources
   └─ components
      └─ base-button
         ├─ index.vue      //源码
         └─ README.md      //组件使用说明文档
```

### 业务组件名。 【注：src/views/components 目录。】

> 业务组件文件命名应该以 the 为前缀命名，以示其唯一性，并且以横线连接。

```
例子：
src
└─ views
   └─ components
      └─ the-button
         ├─ index.vue      //源码
         └─ README.md      //组件使用说明文档
```

### 路由文件创建与命名。 【注：src/config/router 目录。】

为了方便维护与开发，建议路由文件命名与对应的页面文件命名保持一致，尽量简洁明了。

```
例子：
src
└─ config
   └─ router
      |- index.js
      |- dev.js
      |- home.js
```

### 接口文件创建与命名。 【注：src/config/apis 目录。】

为了方便维护与开发，建议接口文件命名与对应的页面文件命名保持一致，尽量简洁明了。

```
例子：
src
└─ config
   └─ apis
      |- index.js
      |- home.js
```

### 状态切片文件创建与命名。 【注：src/config/store 目录。】

为了方便维护与开发，建议以当前对应模块或者功能命名文件夹，采用驼峰命名或者烤肉串大小写，尽量简洁明了。

```
例子：
src
└─ config
   └─ store
      └─ dev
         |- index.js
      └─ home
         |- index.js
```

### 图片资源。 【注：src/assets/img 目录。】

建议图片文件夹命名与对应的页面文件命名保持一致，公共图片资源放置到 src/assets/img/base 目录下即可。

```
例子：
src
└─ assets
   └─ img
      |- index
      |- dev
      |- base
```

## git 版本规范

### 分支管理

一般项目分主分支（master）和其他分支。 当有团队成员要开发新功能(Feather)或改 BUG(Fix) 时，就从 master 分支开一个新的分支。

### Commit 规范

-   feat 新增功能
-   fix 修复 bug
-   docs 文档变更
-   style 代码格式（不影响功能，例如空格、分号等格式修正）
-   refactor 代码重构
-   perf 改善性能
-   test 测试
-   build 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）
-   ci 更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等
-   chore 变更构建流程或辅助工具
-   revert 代码回退

### Tag 版本号

版本号以 v 开头，根据当前仓库的 tag 编号进行累加，如：v1.10.45。

## 项目目录说明

```
vue3-pc-tmp
├─ .env.development                      // 开发环境配置文件
├─ .env.production                       // 生产环境配置文件
├─ .env.test                             // 测试、灰度(预发布|预上线) 模式
├─ .eslintignore                         // eslint白名单
├─ .eslintrc-auto-import.json            //
├─ .eslintrc.cjs                         // eslint配置文件
├─ .npmrc                                // npm配置文件
├─ .prettierrc.js                        // prettier配置文件
├─ .vscode                               // 覆盖默认vscode配置（项目级）
│  ├─ extensions.json                    //
│  └─ settings.json                      //
├─ env.d.ts                              // 环境类型声明文件
├─ index.html                            // templat模板
├─ package.json                          // 项目自述文件
├─ pnpm-lock.yaml                        // pnpm自锁文件
├─ public                                // 公共资源文件（不会hash处理）
│  └─ static                             // 静态资源目录
│     ├─ css                             //
│     ├─ img                             //
│     │  └─ favicon.ico                  //
│     └─ js                              //
├─ README.md                             // 项目使用说明文档
├─ src                                   // 业务层
│  ├─ App.vue                            // 顶级router-view
│  ├─ assets                             // 静态资源（hash处理）
│  │  ├─ css                             // css放置目录
│  │  │  ├─ global.scss                  // 全局css
│  │  │  └─ reset.css                    // 重置css
│  │  ├─ img                             // 图片资源放置目录
│  │  └─ js                              // js资源放置目录
│  ├─ config                             // 业务配置目录
│  │  ├─ apis                            // 所以接口相关
│  │  │  ├─ dev                          // 接口切片
│  │  │  │  ├─ index.ts                  // 接口创建文件
│  │  │  │  └─ validation                // 接口验证器相关
│  │  │  │     ├─ index.ts               // 接口验证器统一导出文件
│  │  │  │     └─ module                 // 接口验证器切片
│  │  │  │        └─ getListDev.ts       // 接口验证器核心文件
│  │  │  └─ README.md                    // 接口创建说明文档
│  │  ├─ router                          // 所有路由相关
│  │  │  ├─ dev.ts                       //
│  │  │  ├─ errpage.ts                   //
│  │  │  └─ index.ts                     //
│  │  └─ store                           // 状态商店（所有全局状态管理相关）
│  │     ├─ dev                          // store模块
│  │     │  ├─ index.ts                  // store核心代码
│  │     │  ├─ README.md                 // store 模块使用说明
│  │     │  └─ validation                // ts 校验器
│  │     │     └─ index.ts               //
│  │     └─ README.md                    // store模块创建说明
│  ├─ layout                             // 布局相关
│  │  ├─ app-main                        // app布局组件
│  │  └─ devLayout                       // 开发者中心布局组件
│  │     ├─ index.vue                    //
│  │     └─ leftMenu                     //
│  │        └─ index.vue                 //
│  ├─ main.ts                            // 入口js文件
│  ├─ packages                           // 依赖的第三方包或插件
│  │  ├─ request                         // axios请求库封装
│  │  │  ├─ cancel                       // 请求取消
│  │  │  │  ├─ index.ts                  //
│  │  │  │  └─ utils                     //
│  │  │  │     └─ generateReqKey.ts      //
│  │  │  ├─ httpErrorStatusHandle        // http错误处理
│  │  │  │  └─ index.ts                  //
│  │  │  ├─ index.ts                     // 请求库导出文件
│  │  │  ├─ loading                      // 请求库loading
│  │  │  │  └─ index.ts                  //
│  │  │  ├─ README.md                    // 请求库使用说明文档
│  │  │  ├─ retry                        // 请求重试
│  │  │  │  └─ index.ts                  //
│  │  │  └─ type                         // 请求库类型补充
│  │  │     └─ index.ts                  //
│  │  └─ router                          // vue-router封装
│  │     ├─ index.ts                     //
│  │     └─ routes.ts                    //
│  ├─ resources                          // 全局基础组件、全局插件、全局自定义指令配置
│  │  ├─ components                      // 全局基础组件
│  │  │  └─ base-form                    // 全局基础组件-form表单组件
│  │  │     ├─ components                //
│  │  │     │  ├─ password-field         //
│  │  │     │  │  └─ index.vue           //
│  │  │     │  ├─ text-field             //
│  │  │     │  │  └─ index.vue           //
│  │  │     │  └─ textarea-field         //
│  │  │     │     └─ index.vue           //
│  │  │     ├─ index.vue                 //
│  │  │     └─ README.md                 // 全局基础组件-form表单组件使用说明文档
│  │  └─ plugin                          // 全局自定义插件
│  │     ├─ index.ts                     // 全局自定义插件导出文件
│  │     └─ message                      // 全局自定义插件-message
│  │        ├─ index.ts                  //
│  │        └─ README.md                 // 全局自定义插件-message使用说明文档
│  ├─ types                              // 全局类型补充文件
│  │  ├─ README.md                       //
│  │  └─ window.d.ts                     //
│  ├─ utils                              // 工具类
│  │  ├─ dayjs.ts                        // dayjs二次封装
│  │  ├─ getCurrentUrlAssignKey.ts       // 获取 当前url 指定参数的值
│  │  ├─ handle-local.ts                 // 操作local
│  │  ├─ handle-session.ts               // 操作session
│  │  ├─ regex-utils.ts                  // 正则工具函数
│  │  ├─ sleep.ts                        // 睡眠函数
│  │  └─ validate.ts                     // 校验器函数
│  └─ views                              // 视图层
│     ├─ components                      // 业务组件
│     │  └─ the-sendsms-button           // 业务组件-发送短信验证码按钮
│     │     ├─ index.vue                 //
│     │     └─ README.md                 //
│     ├─ dev                             // 开发者中心相关视图
│     │  ├─ base                         //
│     │  │  ├─ form                      //
│     │  │  │  ├─ jiChuYongFa.vue        //
│     │  │  │  └─ ziDingYiButton.vue     //
│     │  │  └─ index.vue                 //
│     │  ├─ info                         //
│     │  │  └─ index.vue                 //
│     │  ├─ pinia                        //
│     │  │  └─ index.vue                 //
│     │  ├─ plugin                       //
│     │  │  └─ index.vue                 //
│     │  └─ unocss                       //
│     │     └─ index.vue                 //
│     ├─ errPage                         // 全局错误页
│     │  └─ err404.vue                   //
│     └─ index                           // 首页
│        └─ index.vue                    //
├─ tsconfig.app.json                     //
├─ tsconfig.config.json                  //
├─ tsconfig.json                         //
├─ tsconfig.vitest.json                  //
├─ unocss.config.js                      // unocss配置文件
└─ vite.config.ts                        // vite配置文件

```
