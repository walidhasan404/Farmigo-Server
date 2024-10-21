import axios from "axios";
import { useEffect, useState } from "react";

interface Blog {
    _id: string;
    title: string;
    content: string;
    author: {
        _id: string;
        name: string;
    };
    categories: {
        _id: string;
        category_name: string;
    }[];
    createdAt: string;
    images: string;
}

const Blogs = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get("https://farmigo-server.onrender.com/api/v1/blogs");
                
                if (response.data.success && Array.isArray(response.data.data)) {
                    setBlogs(response.data.data.slice(0, 4));
                } else {
                    setError("Data format is incorrect or no data found.");
                }
            } catch (err) {
                console.error(err);
                setError("Failed to load data.");
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return <div>Loading Blogs...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="flex items-end justify-between">
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Latest from Blog</h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                    </div>
                </div>

                <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-4 lg:max-w-full">
                    {blogs.map((blog) => {

                        return (
                            <div key={blog._id} className="overflow-hidden bg-white rounded shadow">
                                <div className="">
                                    <div className="relative">
                                        <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                                            <img className="object-cover w-full h-96" src={blog.images} alt={blog.title} />
                                        </a>
                                    </div>
                                    <div className="px-5 pb-3">
                                        <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                                            {new Date(blog.createdAt).toLocaleDateString()}
                                        </span>
                                        <p className="mt-5 text-2xl font-semibold">
                                            <a href="#" title="" className="text-black">{blog.title}</a>
                                        </p>
                                        <p className="mt-4 text-base text-gray-600">{blog.content}</p>
                                        <a href="#" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                                            Continue Reading
                                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Blogs;