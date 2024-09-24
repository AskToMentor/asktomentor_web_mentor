import React from 'react';
import { Link } from "react-router-dom";
import './style/BlogContent.css';
import dummy6 from '../assets/dummy-6-1.svg';
import maskGroup from '../assets/mask-group.svg';
import socials from '../assets/footer-socials.svg';

const BlogContent = () => {
  return (
    <div className="blog-content-container">
      <div className="content-column-4">
        {/* This column can be used for side content like ads or navigation */}
      </div>

      <div className="content-column-8">
        <div className="blog-content mb-10">
          <h2 className="mb-10">What Makes a Powerful Case Study</h2>
          <p className="mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis venenatis lorem non commodo. 
            Etiam rutrum non quam accumsan posuere. Phasellus id velit et justo consectetur dictum accumsan vel odio.
          </p>
          <li>Become familiar with our systems, style & process</li>
          <li>Participate in Continuous Discovery Habits; coaching others on qualitative research.</li>
          <li>Lead your own discovery & interviews with members to understand pains, gains & Jobs to be done.</li>
          <li>Guide research activities to define current member pain points and map ideal future experiences.</li>
          <hr />
          <h2 className="mt-10 mb-10">Best UX Case Studies for Designers</h2>
          <p className="mb-10">
            The best way to understand what a good case study looks like is to go over other examples. Each of these UX case study 
            examples shows a designer's insights, basic skills, and other designers' lessons learned through their experience.
          </p>
          <h3 className="mb-10">1. Lorem ipsum dummy text</h3>
          <img src={dummy6} className="additional-image" alt="Additional Blog" />

          <p className="mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis venenatis lorem non commodo. Etiam rutrum non quam accumsan posuere. Phasellus id velit et justo consectetur dictum accumsan vel odio. Maecenas nibh eros, tristique vitae bibendum et, posuere et lacus. Aenean sit amet faucibus quam. Donec laoreet nibh vel consequat condimentum.
          </p>
          <p className="mt-5">
            Etiam at lectus luctus, dapibus justo ut, imperdiet nisi. Nullam sagittis accumsan velit, at malesuada risus tristique sed. Vestibulum facilisis dolor eget enim pretium lacinia. Pellentesque sollicitudin magna ac mollis tempor. Vestibulum semper nibh vel accumsan semper.
          </p>
        </div>
        <hr />
        <div className="author-container mt-10 mb-10">
          <div className="author-column-4">
            <img src={maskGroup} alt="Emily Wilson" className="author-image" />
          </div>
          <div className="author-column-8">
            <div className="author-details">
              <span className="author-name">Emily Wilson</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget lobortis arcu. Sed in eros fermentum, hendrerit metus nec, tincidunt lectus.</p>
              <div className="social-links">
                <Link to="/" className="more-by-author">More By Emily Wilson</Link>
                <img src={socials} alt="Social Icons" className="social-icons" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogContent;
