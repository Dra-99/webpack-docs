export const data = {
  "key": "v-34029aa3",
  "path": "/base/development.html",
  "title": "开发模式介绍",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "contributors": [
      {
        "name": "dra-99",
        "email": "wbl111@aliyun.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "base/development.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
