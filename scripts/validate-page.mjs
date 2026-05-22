import { readFileSync } from "node:fs";

const html = readFileSync("index.html", "utf8");

const checks = [
  ["页面应声明中文语言", /<html[^>]+lang=["']zh-CN["']/i],
  ["页面应包含标题", /<title>[^<]+<\/title>/i],
  ["页面应包含页面描述", /<meta\s+name=["']description["']\s+content=["'][^"']+["']/i],
  ["页面应包含主内容区域", /<main[\s>]/i],
  ["页面应包含主标题", /<h1[\s>][\s\S]*?<\/h1>/i],
  ["页面应包含可视图片资产", /<img[\s\S]+alt=["'][^"']+["']/i],
  ["页面应包含行动按钮或链接", /class=["'][^"']*\bprimary-action\b[^"']*["']/i],
  ["页面应包含键盘焦点样式", /:focus-visible/i],
  ["页面应包含页脚信息", /<footer[\s>][\s\S]*?<\/footer>/i],
];

const failures = checks.filter(([, pattern]) => !pattern.test(html));

if (failures.length > 0) {
  console.error("页面校验失败：");
  for (const [message] of failures) {
    console.error(`- ${message}`);
  }
  process.exit(1);
}

console.log("页面校验通过。");
