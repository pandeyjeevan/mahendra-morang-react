function NewsCard({ news }) {
  return (
    <>
      <div
        className="group bg-white rounded-2xl overflow-hidden border border-gray-200 
                 shadow-sm hover:shadow-xl transition-all duration-300 
                 hover:-translate-y-1"
      >
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={news.urlToImage}
            alt={news.title}
            className="w-full h-full object-cover 
                     group-hover:scale-110 transition-transform duration-500"
          />

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-t 
                     from-black/60 via-transparent to-transparent"
          />

          {/* Category */}
          <span
            className="absolute top-4 left-4 bg-blue-600 text-white 
                     text-xs font-semibold px-3 py-1 rounded-full"
          >
            News
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Date */}
          <p className="text-xs text-gray-500 mb-2">Latest News</p>

          {/* Title */}
          <h2
            className="text-lg font-bold text-gray-900 line-clamp-2 
                     group-hover:text-blue-600 transition-colors"
          >
            {news.title}
          </h2>

          {/* Description */}
          <p className="mt-3 text-sm text-gray-600 line-clamp-3">
            {news.description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between mt-5 pt-4 border-t">
            <span className="text-xs text-gray-500">Read article</span>

            <button
              className="flex items-center gap-1 text-sm font-semibold 
                       text-blue-600 hover:text-blue-800 transition"
            >
              Read More
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsCard;
