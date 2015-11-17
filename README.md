## gis-demo

> 运行 [gis](https://github.com/JackieLin/gis) 的实际项目 demo

## 简介
gis-demo 是使用 gis 构建工具构建生成的单页应用项目，可直接在这个基础上开发，填充业务代码。依赖 RequireJs。

## 运行

### 1. 安装 gis
如何安装 gis 请到 [gis](https://github.com/JackieLin/gis) 项目查阅

### 2. 运行
直接运行 ```gis```, 项目会监听 ```./js/pack``` 和 ```./tpl``` 下面目录信息，并编译打包。

#### 注意事项
监听目录下面只支持一级目录：比如：```./js/pack/gis```，```./tpl/test```。如果需要建立二级目录，请建立新的目录，重新拆分业务逻辑。

### 3. 应用目录结构

```
.
├── README.md
├── gis.json
├── index.html                               // 单页应用首页
├── js
│   ├── config.dev.js                        // RequireJs dev 配置
│   ├── config.js					           // RequireJs production 配置
│   ├── pack
│   │   └── common
│   │       ├── dist                         // js pack 目录
│   │       │   ├── common.all.js
│   │       │   ├── common.all.min_a5c525.js
│   │       │   ├── excludefile.js
│   │       │   └── excludefile_dee487.js
│   │       └── src                         // js 源代码
│   │           ├── excludefile.js
│   │           ├── index.js
│   │           └── util.js
│   ├── tpl                                 // 模板编译
│   │   └── gis
│   │       └── gis.min_6b4210.js
│   └── vendor                              // 第三方应用
│       ├── jquery
│       │   └── 2.1.4
│       │       └── jquery-2.1.4.min.js
│       └── require
│           └── 2.1.9
│               └── require.min.js
└── tpl                                    // html 目录
    └── gis
        └── index.html
```