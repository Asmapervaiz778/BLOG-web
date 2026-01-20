import React, { useState, useEffect } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { blogService } from "../services/api";
import { storageService } from "../services/storage";

const About = () => {
  const [authorInfo, setAuthorInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuthorInfo = async () => {
      try {
        // Check localStorage for author info
        const cachedAuthor = storageService.getItem("authorInfo");
        if (cachedAuthor) {
          setAuthorInfo(cachedAuthor);
          setLoading(false);
          return;
        }

        // Fetch user data from API
        const users = await blogService.getUsers();
        const authorData = users[0]; // Get first user

        storageService.setItem("authorInfo", authorData);
        setAuthorInfo(authorData);
      } catch (err) {
        console.error("Error fetching author info:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthorInfo();
  }, []);
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Me</h1>
          <p>Sharing my journey, passion, and expertise in blogging.</p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="profile-section">
        <div className="profile-image">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpZD7-lDa41sELt5U9gEZawEJC3CRJnzZvEeVrYVIcQg&s" 
            alt="Profile" 
          />
        </div>
        <div className="profile-info">
          <h2>Hello, I'm Asma</h2>
          {loading ? (
            <p>Loading profile information...</p>
          ) : authorInfo ? (
            <>
             
              <p>
                <strong>Phone:</strong> {authorInfo.phone}
              </p>
              <p>
                <strong>Company:</strong> {authorInfo.company?.name}
              </p>
              <p>
                I'm a passionate front-end web developer with a strong interest in building
                clean, responsive, and user-friendly websites. I enjoy turning ideas into
                interactive digital experiences using modern web technologies.
              </p>
            </>
          ) : (
            <p>
              I'm a passionate front-end web developer with a strong interest in building
              clean, responsive, and user-friendly websites. I enjoy turning ideas into
              interactive digital experiences using modern web technologies.
            </p>
          )}
          <p>
            I work with HTML, CSS, JavaScript, and React to create visually appealing
            interfaces and functional web applications. My goal is to continuously grow
            my skills, write clean code, and deliver high-quality solutions that provide
            real value to users.
          </p>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>My Skills & Expertise</h2>
        <div className="skills-container">
          <div className="skill">HTML/CSS</div>
          <div className="skill">SEO Optimization</div>
          <div className="skill">React & Web Development</div>
          <div className="skill">Wordpress</div>
          <div className="skill">Graphic Design</div>
        </div>
      </section>
    </div>
  );
};

export default About;

