## RUN
in dev mode `npm run dev`

## TEST

## TECH STACK


## MDX

### blockquote
> To be honest, I couldn't succeed in
consistently publishing blog posts.
<span>Bora Oren</span>

# NEXTJS

## hightlight code
__LayoutJoutnal.tsx__
```javascript
import "highlight.js/styles/docco.css";
import gherkin from "highlight.js/lib/languages/gherkin";
import javascript from "highlight.js/lib/languages/javascript";
import hljs from "highlight.js";
```

__utils/mdx.tsx__
add
```javascript
import rehypeHighlight from "rehype-highlight";
...
const rehypePlugins = [rehypeHighlight];
```

