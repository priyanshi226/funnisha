import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts } from "../data/content";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Pill from "./ui/Pill";

function BlogBody({ blocks }) {
  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, i) => {
        if (block.type === "heading") {
          return (
            <h2 key={i} className="mt-4 font-display text-2xl leading-snug text-ink sm:text-3xl">
              {block.text}
            </h2>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote
              key={i}
              className="border-l-2 border-olive/50 pl-5 font-display text-xl italic leading-relaxed text-olive sm:text-2xl"
            >
              {block.text}
            </blockquote>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={i} className="flex flex-col gap-2 pl-1">
              {block.items.map((item, j) => (
                <li key={j} className="flex gap-3 text-base leading-relaxed text-ink-soft sm:text-lg">
                  <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-olive/60" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-base leading-relaxed text-ink-soft sm:text-lg">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main className="bg-paper pb-24 pt-36 sm:pt-44">
        <article className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-olive transition-colors hover:text-forest"
          >
            <ArrowLeft size={16} /> Back to Insights
          </Link>

          <div className="mt-8 flex flex-col gap-5">
            <Pill tone="cream" className="w-fit">
              {post.series || post.category}
            </Pill>
            <h1 className="font-display text-4xl leading-[1.08] text-ink sm:text-5xl">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-xs text-ink-soft">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} /> {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} /> {post.readTime}
              </span>
            </div>
          </div>

          <div className="mt-10 border-t border-ink/10 pt-10">
            <BlogBody blocks={post.body} />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
