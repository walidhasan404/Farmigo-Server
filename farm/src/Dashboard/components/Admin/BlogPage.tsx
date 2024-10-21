import React, { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import { useAuth } from '../../../Authentication/AuthProvider/AuthContext';

interface Blog {
    _id: string;
    title: string;
    content: string;
    author: string;
    categories: string[];
}

interface Category {
    _id: string;
    category_name: string;
}

interface NewBlog {
    title: string;
    content: string;
    author: string;
    categories: string[];
}

const BlogsPage: React.FC = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const { userAuth } = useAuth();
    const [categories, setCategories] = useState<Category[]>([]);
    const [newBlog, setNewBlog] = useState<NewBlog>({ title: '', content: '', author: '67116a732dcdfbf294af36b2', categories: [] });
    const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    console.log(userAuth);

    useEffect(() => {
        fetchBlogs();
        fetchCategories();
    }, []);

    const fetchBlogs = async () => {
        setLoading(true);
        try {
            const response = await axios.get<{ data: Blog[] }>("https://farmigo-backend.onrender.com/api/v1/blogs");
            setBlogs(response.data.data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
            setError('Failed to load blogs.');
        } finally {
            setLoading(false);
        }
    };

    const fetchCategories = async () => {
        setLoading(true);
        try {
            const response = await axios.get<Category[]>(import.meta.env.VITE_API+ "/categories");
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
            setError('Failed to load categories.');
        } finally {
            setLoading(false);
        }
    };

    const handleCreateBlog = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newBlog.title || !newBlog.content) {
            alert('Title and content are required.');
            return;
        }
        setLoading(true);
        try {
            await axios.post("https://farmigo-server.onrender.com/api/v1/blog/create", newBlog);
            fetchBlogs();
            setNewBlog({ title: '', content: '', author: '67116a732dcdfbf294af36b2', categories: [] });
        } catch (error) {
            console.error('Error creating blog:', error);
            setError('Failed to create blog.');
        } finally {
            setLoading(false);
        }
    };

    const handleEditBlog = (blog: Blog) => {
        setEditingBlog(blog);
    };

    const handleUpdateBlog = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingBlog) return;
        if (!editingBlog.title || !editingBlog.content) {
            alert('Title and content are required.');
            return;
        }
        setLoading(true);
        try {
            await axios.put(`https://farmigo-server.onrender.com/api/v1/blog/update/${editingBlog._id}`, editingBlog);
            fetchBlogs();
            setEditingBlog(null);
        } catch (error) {
            console.error('Error updating blog:', error);
            setError('Failed to update blog.');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteBlog = async (_id: string) => {
        setLoading(true);
        try {
            await axios.delete(`https://farmigo-server.onrender.com/api/v1/blog/delete/${_id}`);
            fetchBlogs();
        } catch (error) {
            console.error('Error deleting blog:', error);
            setError('Failed to delete blog.');
        } finally {
            setLoading(false);
        }
    };

    // Separate handlers for new blog and editing blog
    const handleNewBlogCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedCategories = Array.from(e.target.selectedOptions, (option) => option.value);
        setNewBlog((prevState) => ({ ...prevState, categories: selectedCategories }));
    };

    const handleEditingBlogCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
        if (!editingBlog) return; // Add a null check just in case
        const selectedCategories = Array.from(e.target.selectedOptions, (option) => option.value);
        setEditingBlog((prevState) => ({ ...prevState, categories: selectedCategories } as Blog));
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-8 text-center text-indigo-600">Manage Blogs</h1>
            {error && <p className="text-red-500">{error}</p>}

            {/* New Blog Form */}
            <form onSubmit={handleCreateBlog} className="mb-10 bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto">
                <h2 className="text-xl font-bold mb-4 text-gray-700">Add a New Blog</h2>
                <div>
                    <label className="block mb-2 text-gray-600">Title</label>
                    <input
                        title='title'
                        type="text"
                        value={newBlog.title}
                        onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                        className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-indigo-400"
                    />
                </div>
                <div className="mt-4">
                    <label className="block mb-2 text-gray-600">Content</label>
                    <textarea
                        title='content'
                        value={newBlog.content}
                        onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
                        className="border border-gray-300 rounded-lg p-2 w-full h-32 focus:ring-2 focus:ring-indigo-400"
                    ></textarea>
                </div>
                <div className="mt-4">
                    <label className="block mb-2 text-gray-600">Categories</label>
                    <select
                        title='blog'
                        multiple
                        value={newBlog.categories}
                        onChange={handleNewBlogCategoryChange}
                        className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-indigo-400"
                    >
                        {categories.length > 0 ? (
                            categories.map((category) => (
                                <option key={category._id} value={category.category_name}>
                                    {category.category_name}
                                </option>
                            ))
                        ) : (
                            <option disabled>No categories available</option>
                        )}
                    </select>
                </div>
                <button type="submit" className="bg-indigo-500 text-white px-6 py-2 mt-6 rounded-lg hover:bg-indigo-600 transition duration-300">
                    Add Blog
                </button>
            </form>

            {/* All Blogs Section */}
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-gray-700">All Blogs</h2>
                <ul className="space-y-6">
                    {blogs.map((blog) => (
                        <li key={blog._id} className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2 text-indigo-600">{blog.title}</h3>
                            <p className="text-gray-700">{blog.content}</p>
                            <p className="mt-2 text-sm text-gray-500">Categories: {blog.categories.join(', ')}</p>
                            <div className="mt-4 flex space-x-4">
                                <button onClick={() => handleEditBlog(blog)} className="text-indigo-500 hover:underline">Edit</button>
                                <button onClick={() => handleDeleteBlog(blog._id)} className="text-red-500 hover:underline">Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Edit Blog Form */}
            {editingBlog && (
                <form onSubmit={handleUpdateBlog} className="mt-10 bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto">
                    <h2 className="text-xl font-bold mb-4 text-gray-700">Edit Blog</h2>
                    <div>
                        <label className="block mb-2 text-gray-600">Title</label>
                        <input
                            title='title'
                            type="text"
                            value={editingBlog.title}
                            onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })}
                            className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block mb-2 text-gray-600">Content</label>
                        <textarea
                            title='title'
                            value={editingBlog.content}
                            onChange={(e) => setEditingBlog({ ...editingBlog, content: e.target.value })}
                            className="border border-gray-300 rounded-lg p-2 w-full h-32 focus:ring-2 focus:ring-indigo-400"
                        ></textarea>
                    </div>
                    <div className="mt-4">
                        <label className="block mb-2 text-gray-600">Categories</label>
                        <select
                            multiple
                            value={editingBlog.categories}
                            onChange={handleEditingBlogCategoryChange}
                            className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-indigo-400"
                        >
                            {categories.map((category) => (
                                <option key={category._id} value={category.category_name}>
                                    {category.category_name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="bg-indigo-500 text-white px-6 py-2 mt-6 rounded-lg hover:bg-indigo-600 transition duration-300">
                        Update Blog
                    </button>
                </form>
            )}
        </div>
    );
};

export default BlogsPage;
