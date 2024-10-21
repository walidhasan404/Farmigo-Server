import React, { useState, useEffect } from 'react';

interface Category {
  _id: string;
  category_name: string;
}

interface Author {
  _id: string;
  name: string;
}

interface Blog {
  _id: string;
  title: string;
  content: string;
  author: Author;
  categories: Category[];
  createdAt: string;
  updatedAt: string;
  images?: string;
}

const BlogCard: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [expandedBlogs, setExpandedBlogs] = useState<string[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://farmigo-backend.onrender.com/api/v1/blogs');
        const result = await response.json();
        if (result.success) {
          setBlogs(result.data);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const toggleExpandBlog = (id: string) => {
    setExpandedBlogs((prev) => 
      prev.includes(id) ? prev.filter((blogId) => blogId !== id) : [...prev, id]
    );
  };

  return (
    <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-12 lg:grid-cols-4 lg:max-w-full">
      {blogs.map((blog) => {
        const imageUrls = blog.images ? blog.images.split('\n') : [];  // Check if images exists
        const firstImage = imageUrls.length > 0 ? imageUrls[0] : '/fallback-image.jpg';  // Use first image or fallback

        return (
          <div key={blog._id} className="overflow-hidden bg-white rounded shadow">
            <div className="relative">
                <img
                  className="object-cover w-full h-60"
                  src={firstImage}
                  alt={blog.title}
                />
              <div className="absolute top-4 left-4">
                {blog.categories?.map((category) => (
                  <span key={category._id} className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
                    {category.category_name}
                  </span>
                ))}
              </div>
            </div>
            <div className="px-5 pb-3">
              <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                {new Date(blog.createdAt).toLocaleDateString()} {/* Formatting the date */}
              </span>
              <p className="mt-5 text-2xl font-semibold">
                <a href={`/blog/${blog._id}`} title={blog.title} className="text-black">
                  {blog.title}
                </a>
              </p>
              <p className="mt-4 text-base text-gray-600">
                {expandedBlogs.includes(blog._id) ? blog.content : blog.content.substring(0, 100) + '...'} {/* Short description */}
              </p>
              <button
                onClick={() => toggleExpandBlog(blog._id)}
                className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
              >
                {expandedBlogs.includes(blog._id) ? 'Show Less' : 'Continue Reading'}
                <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogCard;