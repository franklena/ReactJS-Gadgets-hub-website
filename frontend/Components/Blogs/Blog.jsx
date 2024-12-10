import React from 'react';
import './Blog.css';
import blog1 from '../Assets/blogs/blog-1.jpg';
import blog2 from '../Assets/blogs/blog-2.jpg';
import blog3 from '../Assets/blogs/blog-3.jpg';

const Blog = () => {
  const blogPosts = [
    {
      title: 'How to choose perfect smartwatch',
      author: 'Shwetha Angel',
      date: 'Jan 20, 2024',
      description: 'Discover essential tips on what to look for when buying a smartwatch, from design to features like fitness tracking and notifications.',
      imageUrl: blog1, 
      youtubeLink: 'https://youtu.be/ugvMssnfS6s?si=oFg0cJ7TLB1DB2KN', 
    },
    {
      title: 'How to choose perfect gadget',
      author: 'Vivian Anto',
      date: 'June 14, 2024',
      description: 'Find out how to choose the best gadgets by comparing features, usability, and the latest technology trends for 2024.',
      imageUrl: blog2, 
      youtubeLink: 'https://youtu.be/a3jeI-kWrO4?si=HvtuFuSnUu2XwZbO', 
    },
    {
      title: 'How to choose perfect VR headset',
      author: 'Subash Joe',
      date: 'Nov 02, 2024',
      description: 'Explore the world of virtual reality with this guide on selecting the best VR headset for immersive gaming and entertainment.',
      imageUrl: blog3, 
      youtubeLink: 'https://youtu.be/2GOTlI8pYeo?si=WNcIFIKGoV0u5P1V', 
    },
  ];

  return (
    <div className="blog-container">
      <h2 className="recent-news-title">Product Blogs</h2>
      <p className="recent-news-description">Expert reviews and hands-on gadget demos!</p>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post">
            <a href={post.youtubeLink} target="_blank" rel="noopener noreferrer">
              <img src={post.imageUrl} alt={post.title} className="blog-image" />
            </a>
            <div className="blog-content">
              <p className="blog-date">{post.date} by {post.author}</p>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-description">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
