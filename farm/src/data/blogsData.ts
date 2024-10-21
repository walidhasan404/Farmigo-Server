export interface Blog {
    id: number;
    title: string;
    category: string;
    date: string;
    shortDescription: string;
    fullDescription: string;
    imageUrl: string;
}

const blogsData: Blog[] = [
    {
        id: 1,
        title: "How to Build Coffee Inside Your Home in 5 Minutes",
        category: "Lifestyle",
        date: "March 21, 2020",
        shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        fullDescription: "Making coffee at home in 5 minutes is easier than you think. From selecting the right beans to brewing the perfect cup, this guide will help you master your morning routine. You'll learn quick techniques for preparing coffee that rivals your favorite café, saving time and money in the process.",
        imageUrl: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg",
    },
    {
        id: 2,
        title: "5 Tips for Improving Your Morning Routine",
        category: "Health",
        date: "April 5, 2021",
        shortDescription: "Improve your morning routine and start your day with a clear mind. Here are five tips to get started.",
        fullDescription: "A great morning routine sets the tone for the entire day. In this blog, you'll find five actionable tips to enhance your morning productivity, including mindful habits, effective time management, and healthy breakfast ideas. Say goodbye to chaotic mornings and hello to a peaceful, productive start.",
        imageUrl: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-2.jpg",
    },
    {
        id: 3,
        title: "The Ultimate Guide to Working from Home",
        category: "Productivity",
        date: "May 12, 2021",
        shortDescription: "Learn how to maximize productivity while working from home with these essential tips.",
        fullDescription: "Working from home comes with its own set of challenges. This guide provides strategies for creating an effective work-from-home setup, maintaining focus, balancing work and personal life, and staying productive in a home environment. Whether you're new to remote work or a seasoned pro, this guide will help you thrive.",
        imageUrl: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg",
    },
    {
        id: 4,
        title: "Exploring the Best Places to Travel in 2023",
        category: "Travel",
        date: "January 10, 2023",
        shortDescription: "Discover the top destinations to visit in 2023 for adventure, relaxation, and culture.",
        fullDescription: "Looking for travel inspiration in 2023? We've compiled a list of the best places to visit around the globe. Whether you're after adventure, relaxation, or cultural experiences, these destinations offer something for every type of traveler. Get ready to pack your bags and explore new horizons.",
        imageUrl: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-4.jpg",
    },
    {
        id: 5,
        title: "How to Meditate for Beginners",
        category: "Wellness",
        date: "July 19, 2022",
        shortDescription: "A simple guide to help beginners start meditating and relieve stress in their daily life.",
        fullDescription: "Meditation is a powerful tool for reducing stress and enhancing mental clarity. If you're new to meditation, this beginner's guide will walk you through the basics, from setting up a peaceful environment to mastering simple breathing techniques. Discover how to incorporate meditation into your daily routine for a calmer, more focused mind.",
        imageUrl: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-5.jpg",
    },
    {
        id: 6,
        title: "Top 10 Budget-Friendly Travel Destinations",
        category: "Travel",
        date: "August 15, 2022",
        shortDescription: "Explore the top 10 budget-friendly travel destinations around the world for your next vacation.",
        fullDescription: "Traveling on a budget doesn't mean sacrificing quality experiences. In this blog, we highlight 10 of the best budget-friendly travel destinations around the world. From stunning landscapes to rich cultural heritage, these locations offer affordable adventure without compromising on the experience.",
        imageUrl: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-6.jpg",
    },
    {
        id: 7,
        title: "Best Practices for Managing Remote Teams",
        category: "Business",
        date: "September 3, 2021",
        shortDescription: "Learn how to effectively manage remote teams with best practices from industry leaders.",
        fullDescription: "Managing remote teams presents unique challenges, but it can also unlock great potential. This blog outlines best practices for remote team management, including communication strategies, building trust, and using the right tools to ensure productivity and collaboration. Discover how to lead your team to success, no matter where they are.",
        imageUrl: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-7.jpg",
    },
    {
        id: 8,
        title: "The Benefits of a Plant-Based Diet",
        category: "Health",
        date: "November 22, 2021",
        shortDescription: "Discover the health benefits of switching to a plant-based diet and how it can improve your overall well-being.",
        fullDescription: "Switching to a plant-based diet can have numerous health benefits, from improved digestion to reduced risk of chronic diseases. This blog explores the advantages of a plant-based lifestyle and offers tips for transitioning smoothly. Learn how to nourish your body with plant-based foods that are both delicious and nutritious.",
        imageUrl: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-8.jpg",
    },
    {
        id: 9,
        title: "How to Stay Productive During the Holidays",
        category: "Productivity",
        date: "December 15, 2021",
        shortDescription: "Tips and tricks to stay productive during the holiday season while still enjoying your time off.",
        fullDescription: "Staying productive during the holidays can be challenging with so many distractions. This blog provides practical tips to help you maintain focus and get things done, while still enjoying the holiday spirit. Find the balance between productivity and relaxation during the festive season.",
        imageUrl: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-9.jpg",
    },
    {
        id: 10,
        title: "The Power of Gratitude in Everyday Life",
        category: "Wellness",
        date: "October 10, 2022",
        shortDescription: "Practicing gratitude daily can transform your mindset and bring more positivity into your life.",
        fullDescription: "Gratitude is a simple yet powerful practice that can bring immense joy and positivity into your daily life. In this blog, you'll learn how incorporating gratitude into your routine can shift your mindset, improve relationships, and enhance overall well-being. Start your gratitude journey today and experience its transformative effects.",
        imageUrl: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-10.jpg",
    },
    {
        id: 11,
        title: "Understanding Cryptocurrency in 2023",
        category: "Finance",
        date: "February 25, 2023",
        shortDescription: "A comprehensive guide to understanding cryptocurrency and how it’s shaping the future of finance.",
        fullDescription: "Cryptocurrency continues to disrupt traditional financial systems. This blog offers a detailed overview of cryptocurrency, explaining its role in the current market and what to expect in the future. Whether you're a beginner or looking to deepen your understanding, this guide covers everything you need to know about the world of digital currencies.",
        imageUrl: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-11.jpg",
    },
    {
        id: 12,
        title: "How to Create a Balanced Work-Life Routine",
        category: "Lifestyle",
        date: "April 30, 2023",
        shortDescription: "Creating a balanced work-life routine is essential for maintaining productivity and personal well-being.",
        fullDescription: "Achieving a healthy work-life balance is crucial for both productivity and personal well-being. This blog provides practical steps to create a routine that works for you, including time management techniques, setting boundaries, and prioritizing self-care. Find out how to maintain harmony between your professional and personal life.",
        imageUrl: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-12.jpg",
    },
    {
        id: 13,
        title: "Mastering the Art of Public Speaking",
        category: "Personal Development",
        date: "June 15, 2023",
        shortDescription: "Public speaking is a vital skill. Learn the techniques to become a confident and effective speaker.",
        fullDescription: "Public speaking is a skill that can open many doors. Whether you're giving a presentation or speaking at an event, confidence is key. This blog offers techniques to master the art of public speaking, from preparation tips to overcoming stage fright. Discover how to captivate your audience and deliver powerful messages.",
        imageUrl: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-13.jpg",
    },
];

export default blogsData;
