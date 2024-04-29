import { Metadata } from 'next';
import { BlogItem, LetsTalk } from "@/components";
import { ArticleI, blockArticlesData } from "@/components/blog-item/constants";

export const metadata: Metadata = {
  title: "My Blog",
};

function Blog() {
  return (
    <div className="flex__column gap-16 md:gap-24 pt-12 pb-8 px-4 md:px-8 max-w-screen-xxxl mx-auto ">
      <section className="w-full max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <p className="text-white-light pb-4 text-xl">My Blog</p>
          <h1 className="header__h1 text-white-foreground">
            A collection of my insights{" "}
          </h1>
        </div>

        <div className="flex__between flex-wrap gap-1 mb-12">
          <h2 className="header__h2 text-white-foreground">My latest Insight</h2>
        </div>

        <ul className="w-full flex__column gap-8">
          {blockArticlesData.map((article: ArticleI) => (
            <BlogItem key={article.id} article={article} />
          ))}
        </ul>
      </section>

      <LetsTalk />
    </div>
  );
}

export default Blog;
