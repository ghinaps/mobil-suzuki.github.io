import React from "react";
import { Link } from "react-router-dom";
import { Article } from "../types";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badge */}
        <span className="absolute top-3 left-3 bg-suzukiRed text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          Artikel
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 line-clamp-2 min-h-[3rem]">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 mt-3 text-sm line-clamp-3 min-h-[4.5rem]">
          {article.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-5">
          <span className="text-xs text-gray-400">📅 {article.date}</span>

          <Link
            to={`/article/${article.id}`}
            className="text-suzukiRed font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
          >
            Baca Selengkapnya
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
