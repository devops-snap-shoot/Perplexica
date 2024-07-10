import React from "react";
import ContextItem from "./ContextItem";

interface ContextItemType {
  name: string;
  url: string;
  description: string;
  provider: {
    name: string;
    image?: {
      thumbnail: {
        contentUrl: string;
      };
    };
  }[];
  datePublished: string;
  image?: {
    contentUrl: string;
    thumbnail: {
      contentUrl: string;
      width: number;
      height: number;
    };
  };
  article?: string;
  score?: number;
}

interface NewsDetailProps {
  news: {
    title: string;
    sections: {
      title: string;
      content: string;
      context: ContextItemType[];
    }[];
  };
}

const NewsDetail: React.FC<NewsDetailProps> = ({ news }) => {
  return (
    <article className="prose lg:prose-xl">
      <h1>{news.title}</h1>
      {news.sections.map((section, index) => (
        <section key={index}>
          <h2>{section.title}</h2>
          <p>{section.content}</p>
          <div className="mt-4">
            <h3>Related Context:</h3>
            {section.context.map((item, i) => (
              <ContextItem key={i} item={item} />
            ))}
          </div>
        </section>
      ))}
    </article>
  );
};

export default NewsDetail;
