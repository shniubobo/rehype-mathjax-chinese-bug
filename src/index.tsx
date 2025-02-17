import rehypeMathjax from "rehype-mathjax/svg";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

const content = await unified()
  .use(remarkParse)
  .use([remarkMath, remarkGfm])
  .use(remarkRehype, { allowDangerousHtml: true })
  .use([rehypeRaw, [rehypeMathjax, {}]])
  .use(rehypeStringify)
  .process("$$ \\text{路程} = \\text{速度} \\cdot \\text{时间} $$\n");

console.log(String(content).split("\n", 1)[0]);
