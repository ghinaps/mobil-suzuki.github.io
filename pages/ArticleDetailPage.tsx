import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ARTICLES } from "../constants";
import { Article } from "../types";

const ArticleDetailPage: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const foundArticle = ARTICLES.find((a) => a.id.toString() === articleId);
    setArticle(foundArticle || null);
  }, [articleId]);

  if (!article) {
    return (
      <div className="text-center py-20 text-gray-600">
        Artikel tidak ditemukan.
      </div>
    );
  }

  const otherArticles = ARTICLES.filter((a) => a.id.toString() !== articleId);

  const pageUrl = window.location.href;
  const shareText = encodeURIComponent(
    `Lihat artikel menarik ini: ${article.title}`,
  );

  const socialShareLinks = {
    whatsapp: `https://api.whatsapp.com/send?text=${shareText} ${pageUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${pageUrl}&text=${shareText}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
  };

  return (
    <div className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center text-suzukiBlue hover:text-suzukiRed font-semibold transition-colors bg-white px-4 py-2 rounded-md shadow-sm"
            >
              ← Kembali ke Beranda
            </Link>
          </div>

          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-gray-500 bg-white px-4 py-2 rounded-md shadow-sm w-fit">
            <Link to="/" className="hover:text-suzukiBlue">
              Home
            </Link>
            <span className="mx-2">/</span>
            <a href="/#artikel" className="hover:text-suzukiBlue">
              Artikel
            </a>
            <span className="mx-2">/</span>
            <span className="text-gray-700 truncate inline-block max-w-xs">
              {article.title}
            </span>
          </nav>

          {/* Article */}
          <article className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-snug">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center text-sm text-gray-500 mb-6 border-b pb-3">
              <span>
                Oleh <strong>{article.author}</strong>
              </span>
              <span className="mx-2">|</span>
              <span>{article.publishDate}</span>
            </div>

            {/* Image */}
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-auto max-h-[420px] object-cover rounded-md mb-6 shadow-sm"
            />

            {/* Content */}
            <div className="text-gray-800 leading-relaxed space-y-4">
              {article.content.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </article>

          {/* Share */}
          <div className="mt-8 p-5 bg-white rounded-lg shadow-md flex flex-col sm:flex-row items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 sm:mb-0">
              Bagikan Artikel:
            </h3>
            <div className="flex space-x-3">
              <a
                href={socialShareLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={socialShareLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors"
              >
                Twitter
              </a>
              <a
                href={socialShareLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Other Articles */}
          {otherArticles.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Artikel Lainnya
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherArticles.map((otherArticle) => (
                  <Link
                    to={`/article/${otherArticle.id}`}
                    key={otherArticle.id}
                    className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="flex h-full">
                      <img
                        src={otherArticle.imageUrl}
                        alt={otherArticle.title}
                        className="w-1/3 object-cover"
                      />
                      <div className="p-4 flex flex-col justify-center">
                        <h3 className="text-sm font-bold text-gray-900">
                          {otherArticle.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-2">
                          {otherArticle.excerpt.substring(0, 60)}...
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
