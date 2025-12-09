'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ResearchArticle } from '@/types/research';

type ViewMode = 'cards' | 'table' | 'timeline';

export default function ResearchPage() {
  const [articles, setArticles] = useState<ResearchArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('cards');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedSource, setSelectedSource] = useState<string | null>(null);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch('/api/research?limit=100');
      if (!response.ok) throw new Error('Failed to fetch articles');
      const data = await response.json();
      setArticles(data.data || []);
      setError('');
    } catch (err) {
      setError('Failed to load research articles.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Filter articles based on search & selections
  const filtered = articles.filter((article) => {
    const matchesSearch =
      !searchTerm ||
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTag = !selectedTag || (article.tags && article.tags.includes(selectedTag));
    const matchesSource = !selectedSource || article.source === selectedSource;

    return matchesSearch && matchesTag && matchesSource;
  });

  // Extract unique tags and sources
  const allTags = Array.from(new Set(articles.flatMap((a) => a.tags || [])));
  const allSources = Array.from(new Set(articles.map((a) => a.source)));

  return (
    <div className="min-h-screen py-6 sm:py-12" style={{ background: 'linear-gradient(to bottom, #2a1a3f, #1a0f2e)' }}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <Link href="/insights" className="text-sm" style={{ color: '#824dbf' }}>
            ← Back to Insights
          </Link>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-2" style={{ color: '#f0e6ff' }}>
            Research & Evidence
          </h1>
          <p className="text-sm sm:text-base" style={{ color: '#c9b5e6' }}>
            Curated articles and latest data on men's mental health from reputable sources, updated weekly.
          </p>
        </div>

        {/* CDC Stats Banner */}
        <div className="mb-8 p-5 sm:p-6 rounded-lg shadow-md" style={{ backgroundColor: '#2a1a3f', borderLeft: '4px solid #824dbf' }}>
          <h2 className="text-lg sm:text-xl font-bold mb-3" style={{ color: '#f0e6ff' }}>
            Key Facts: Men's Mental Health
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-xl sm:text-2xl font-bold" style={{ color: '#9e7263' }}>
                3.5x
              </div>
              <p className="text-xs sm:text-sm mt-1" style={{ color: '#c9b5e6' }}>
                Men more likely to die by suicide (CDC)
              </p>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold" style={{ color: '#824dbf' }}>
                ~9.2M
              </div>
              <p className="text-xs sm:text-sm mt-1" style={{ color: '#c9b5e6' }}>
                U.S. men experience mental illness annually (NIMH)
              </p>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold" style={{ color: '#733ba0' }}>
                28%
              </div>
              <p className="text-xs sm:text-sm mt-1" style={{ color: '#c9b5e6' }}>
                Men seek mental health treatment (CDC, 2024)
              </p>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold" style={{ color: '#9e7263' }}>
                Stigma
              </div>
              <p className="text-xs sm:text-sm mt-1" style={{ color: '#c9b5e6' }}>
                Top barrier to care for men (APA)
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mb-6 sm:mb-8 space-y-4">
          {/* View Mode Toggle */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                viewMode === 'cards' ? 'opacity-100' : 'opacity-60'
              }`}
              style={{ backgroundColor: '#2a1a3f', color: '#f0e6ff' }}
            >
              Cards
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                viewMode === 'table' ? 'opacity-100' : 'opacity-60'
              }`}
              style={{ backgroundColor: '#2a1a3f', color: '#f0e6ff' }}
            >
              Table
            </button>
            <button
              onClick={() => setViewMode('timeline')}
              className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                viewMode === 'timeline' ? 'opacity-100' : 'opacity-60'
              }`}
              style={{ backgroundColor: '#2a1a3f', color: '#f0e6ff' }}
            >
              Timeline
            </button>
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-lg text-sm"
            style={{ backgroundColor: '#2a1a3f', color: '#f0e6ff', border: '1px solid #824dbf' }}
          />

          {/* Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs sm:text-sm mb-2" style={{ color: '#c9b5e6' }}>
                Source
              </label>
              <select
                value={selectedSource || ''}
                onChange={(e) => setSelectedSource(e.target.value || null)}
                className="w-full px-3 py-2 rounded-lg text-sm"
                style={{ backgroundColor: '#2a1a3f', color: '#f0e6ff', border: '1px solid #824dbf' }}
              >
                <option value="">All Sources</option>
                {allSources.map((source) => (
                  <option key={source} value={source}>
                    {source}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs sm:text-sm mb-2" style={{ color: '#c9b5e6' }}>
                Tag
              </label>
              <select
                value={selectedTag || ''}
                onChange={(e) => setSelectedTag(e.target.value || null)}
                className="w-full px-3 py-2 rounded-lg text-sm"
                style={{ backgroundColor: '#2a1a3f', color: '#f0e6ff', border: '1px solid #824dbf' }}
              >
                <option value="">All Tags</option>
                {allTags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-sm mb-4" style={{ color: '#c9b5e6' }}>
          Showing {filtered.length} of {articles.length} articles
        </p>

        {/* Loading/Error */}
        {loading && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{ borderColor: '#824dbf' }}></div>
            <p style={{ color: '#c9b5e6' }}>Loading research articles...</p>
          </div>
        )}

        {error && (
          <div className="p-4 rounded-lg mb-4" style={{ backgroundColor: 'rgba(200, 50, 50, 0.1)', color: '#ff6b6b' }}>
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            {/* Cards View */}
            {viewMode === 'cards' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filtered.map((article) => (
                  <a
                    key={article._id || article.link}
                    href={article.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 sm:p-5 rounded-lg shadow-md flex flex-col gap-3 hover:shadow-lg transition-shadow"
                    style={{ backgroundColor: '#2a1a3f' }}
                  >
                    <div className="flex items-center gap-2 text-xs sm:text-sm" style={{ color: '#c9b5e6' }}>
                      <span className="px-2 py-1 rounded-full" style={{ backgroundColor: 'rgba(130, 77, 191, 0.15)', color: '#f0e6ff' }}>
                        {article.source}
                      </span>
                      <span>{article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : ''}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold hover:underline" style={{ color: '#f0e6ff' }}>
                      {article.title}
                    </h3>
                    <p className="text-sm flex-grow" style={{ color: '#c9b5e6' }}>
                      {article.summary}
                    </p>
                    {article.tags && article.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 text-xs" style={{ color: '#c9b5e6' }}>
                        {article.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-1 rounded" style={{ backgroundColor: 'rgba(130, 77, 191, 0.15)' }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </a>
                ))}
              </div>
            )}

            {/* Table View */}
            {viewMode === 'table' && (
              <div className="overflow-x-auto rounded-lg shadow-md">
                <table className="w-full" style={{ backgroundColor: '#2a1a3f' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'rgba(130, 77, 191, 0.2)' }}>
                      <th className="p-3 text-left text-sm font-semibold" style={{ color: '#f0e6ff' }}>
                        Title
                      </th>
                      <th className="p-3 text-left text-sm font-semibold" style={{ color: '#f0e6ff' }}>
                        Source
                      </th>
                      <th className="p-3 text-left text-sm font-semibold" style={{ color: '#f0e6ff' }}>
                        Date
                      </th>
                      <th className="p-3 text-center text-sm font-semibold" style={{ color: '#f0e6ff' }}>
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((article) => (
                      <tr key={article._id || article.link} style={{ borderTop: '1px solid rgba(130, 77, 191, 0.2)' }}>
                        <td className="p-3 text-sm" style={{ color: '#f0e6ff' }}>
                          {article.title}
                        </td>
                        <td className="p-3 text-sm" style={{ color: '#c9b5e6' }}>
                          {article.source}
                        </td>
                        <td className="p-3 text-sm" style={{ color: '#c9b5e6' }}>
                          {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : ''}
                        </td>
                        <td className="p-3 text-center">
                          <a
                            href={article.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs sm:text-sm px-2 py-1 rounded hover:opacity-80"
                            style={{ backgroundColor: 'rgba(130, 77, 191, 0.2)', color: '#f0e6ff' }}
                          >
                            View
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Timeline View */}
            {viewMode === 'timeline' && (
              <div className="space-y-4">
                {filtered.map((article, idx) => (
                  <a
                    key={article._id || article.link}
                    href={article.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex gap-4 p-4 sm:p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    style={{ backgroundColor: '#2a1a3f' }}
                  >
                    {/* Timeline dot */}
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full mt-1" style={{ backgroundColor: '#824dbf' }}></div>
                      {idx < filtered.length - 1 && (
                        <div className="w-1 h-12" style={{ backgroundColor: 'rgba(130, 77, 191, 0.2)' }}></div>
                      )}
                    </div>
                    {/* Content */}
                    <div className="flex-grow pb-4">
                      <div className="flex items-center gap-2 mb-2 text-xs" style={{ color: '#c9b5e6' }}>
                        <span className="font-semibold">{article.source}</span>
                        <span>•</span>
                        <span>{article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : ''}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold hover:underline mb-2" style={{ color: '#f0e6ff' }}>
                        {article.title}
                      </h3>
                      <p className="text-sm mb-3" style={{ color: '#c9b5e6' }}>
                        {article.summary}
                      </p>
                      {article.tags && article.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 text-xs">
                          {article.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="px-2 py-1 rounded" style={{ backgroundColor: 'rgba(130, 77, 191, 0.15)', color: '#c9b5e6' }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            )}

            {filtered.length === 0 && (
              <div className="text-center py-8" style={{ color: '#c9b5e6' }}>
                No articles match your filters.
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
