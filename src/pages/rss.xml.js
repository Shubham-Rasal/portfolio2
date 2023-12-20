import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();
export function GET(context) {
  const postImportResult = import.meta.glob("../content/posts/*.md", {
    eager: true,
  });
  const posts = Object.values(postImportResult);
  console.log(posts);

  return rss({
    // `<title>` field in output xml
    title: "Blue Qubits’s Blog",
    // `<description>` field in output xml
    description: "A curious programmer's blog",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: posts.map((post) => ({
      title: post.frontmatter.title,
      link: `https://bluequbits.vercel.app/posts/${post.frontmatter.slug}`,
      content: sanitizeHtml(post.compiledContent()),
      pubDate: post.frontmatter.date,
    })),    
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
    stylesheet: `/rss-styles.xsl`,
  });
}
