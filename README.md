This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

KEVINSBLOG/
|-- node_modules/
|-- public/
|   |-- images/               # 存放公共图片资源
|-- src/
|   |-- components/           # 通用UI组件
|   |   |--_atoms/            # 最小粒度的组件（原子组件）
|   |   |--_molecules/        # 由原子组件构成的分子组件
|   |   |--_organisms/        # 由分子组件构成的有机体组件
|   |   |--_templates/        # 页面模板
|   |   |--_pages/            # 页面专用组件
|   |   |--index.ts           # 组件导出的索引文件
|   |-- layouts/              # 页面布局组件
|   |   |-- MainLayout.tsx    # 主布局
|   |-- pages/                # Next.js 页面
|   |   |-- api/               # API 路由
|   |   |-- [slug].tsx         # 动态路由页面
|   |   |-- index.tsx         # 首页
|   |   |-- about.tsx         # 关于页面
|   |   |-- contact.tsx       # 联系页面
|   |-- utils/                # 工具函数和自定义钩子
|   |   |-- api.ts            # API 调用工具
|   |   |-- hooks.ts          # 自定义React钩子
|   |   |-- constants.ts      # 常量定义
|   |-- services/             # 业务逻辑服务层
|   |   |-- postService.ts    # 博客文章服务
|   |   |-- userService.ts    # 用户服务
|   |-- types/                # TypeScript 类型定义
|   |   |-- post.d.ts          # 博客文章类型定义
|   |   |-- user.d.ts          # 用户类型定义
|   |-- styles/               # 全局样式文件
|   |   |-- tailwind.css       # Tailwind CSS配置
|   |-- assets/               # 静态资源如字体、图标等
|   |-- lib/                  # 第三方库或服务封装
|   |   |-- analytics.ts       # 网站分析逻辑
|   |-- config/               # 配置文件
|   |   |-- config.ts          # 应用配置
|   |-- app/                  # Next.js 应用目录，用于定义路由和布局
|   |   |-- blog/              # 博客相关路由和布局
|   |   |-- [slug].page.tsx   # 博客文章页面
|   |-- hooks/                # 自定义React钩子
|   |   |-- useFetch.ts       # 数据获取钩子
|   |-- publicRuntimeConfig/  # 运行时公共配置文件
|   |   |-- config.ts          # 公共配置
|-- .env
|-- .eslintrc.json
|-- .gitignore
|-- next-env.d.ts
|-- next.config.mjs
|-- package.json
|-- postcss.config.mjs
|-- README.md
|-- tailwind.config.ts
|-- tsconfig.json

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# official-website
