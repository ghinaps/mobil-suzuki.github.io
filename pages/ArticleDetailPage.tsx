import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ARTICLES } from '../constants';
import { Article } from '../types';

const ArticleDetailPage: React.FC = () => {
    const { articleId } = useParams<{ articleId: string }>();
    const [article, setArticle] = useState<Article | null>(null);

    useEffect(() => {
        const foundArticle = ARTICLES.find(a => a.id.toString() === articleId);
        setArticle(foundArticle || null);
    }, [articleId]);

    if (!article) {
        return <div className="text-center py-20">Artikel tidak ditemukan.</div>;
    }

    const otherArticles = ARTICLES.filter(a => a.id.toString() !== articleId);
    const pageUrl = window.location.href;
    const shareText = encodeURIComponent(`Lihat artikel menarik ini: ${article.title}`);

    const socialShareLinks = {
        whatsapp: `https://api.whatsapp.com/send?text=${shareText} ${pageUrl}`,
        twitter: `https://twitter.com/intent/tweet?url=${pageUrl}&text=${shareText}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
    };

    return (
        <div 
            className="py-8 md:py-12"
            style={{ backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/uploads/light-grey-terrazzo.png')" }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6">
                        <Link to="/" className="inline-flex items-center text-suzukiBlue hover:text-suzukiRed font-semibold transition-colors duration-300 group bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow">
                            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                            Kembali ke Beranda
                        </Link>
                    </div>

                    {/* Breadcrumbs */}
                    <nav className="mb-6 text-sm text-gray-500 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow w-fit">
                        <Link to="/" className="hover:text-suzukiBlue">Home</Link>
                        <span className="mx-2">/</span>
                        <a href="/#artikel" className="hover:text-suzukiBlue">Artikel</a>
                        <span className="mx-2">/</span>
                        <span className="text-gray-700 truncate w-64 inline-block">{article.title}</span>
                    </nav>

                    <article className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-suzukiBlue mb-4 leading-tight">{article.title}</h1>
                        
                        {/* Meta Info */}
                        <div className="flex items-center text-sm text-gray-500 mb-6 border-b pb-4">
                            <span>Oleh <strong>{article.author}</strong></span>
                            <span className="mx-2">|</span>
                            <span>{article.publishDate}</span>
                        </div>

                        <img src={article.imageUrl} alt={article.title} className="w-full h-auto max-h-[500px] object-cover rounded-lg mb-8 shadow-md" />
                        
                        {/* Article Content */}
                        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
                            {article.content.split('\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </article>

                    {/* Share Section */}
                    <div className="mt-8 p-6 bg-white rounded-lg shadow-lg flex flex-col sm:flex-row items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 sm:mb-0">Bagikan Artikel Ini:</h3>
                        <div className="flex space-x-3">
                            <a href={socialShareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="text-white bg-green-500 hover:bg-green-600 font-bold py-2 px-4 rounded-full transition-colors duration-300 text-sm">WhatsApp</a>
                            <a href={socialShareLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-white bg-sky-500 hover:bg-sky-600 font-bold py-2 px-4 rounded-full transition-colors duration-300 text-sm">Twitter</a>
                            <a href={socialShareLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-white bg-blue-800 hover:bg-blue-900 font-bold py-2 px-4 rounded-full transition-colors duration-300 text-sm">Facebook</a>
                        </div>
                    </div>

                    {/* Other Articles Section */}
                    {otherArticles.length > 0 && (
                        <div className="mt-12">
                            <h2 className="text-2xl font-bold text-center text-suzukiBlue mb-8">Baca Artikel Lainnya</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {otherArticles.map(otherArticle => (
                                    <Link to={`/article/${otherArticle.id}`} key={otherArticle.id} className="block bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 group">
                                        <div className="flex h-full">
                                            <img className="w-1/3 h-full object-cover" src={otherArticle.imageUrl} alt={otherArticle.title} />
                                            <div className="p-4 flex flex-col justify-center">
                                                <h3 className="text-md font-bold text-gray-900 group-hover:text-suzukiRed transition-colors duration-300">{otherArticle.title}</h3>
                                                <p className="text-sm text-gray-500 mt-2">{otherArticle.excerpt.substring(0, 60)}...</p>
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