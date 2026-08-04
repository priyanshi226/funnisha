import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/content";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Blog() {
  return (
    <section id="blog" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Insights"
          title="Recent thinking on tax, compliance and finance."
          description="Notes and explainers drawn from real client work, written for founders and finance teams who want the real picture, not the jargon."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug}
              delay={i * 0.08}>
              <Link
                to={`/blog/${post.slug}`}
                className="paper-shadow group flex h-full flex-col rounded-3xl border border-ink/5 bg-ivory p-7 transition-colors duration-300 hover:border-olive/30"
              >
                <span className="w-fit rounded-full bg-olive/10 px-3 py-1 text-xs font-medium tracking-wide text-olive uppercase">
                  {post.series || post.category}
                </span>
                <h3 className="mt-5 font-display text-2xl leading-snug text-ink">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between gap-4 border-t border-ink/10 pt-5 text-xs text-ink-soft">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} /> {post.readTime}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-olive transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
