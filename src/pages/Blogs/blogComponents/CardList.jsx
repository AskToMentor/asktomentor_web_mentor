import React from 'react';
import FeatureCard from './FeatureCard';
import image1 from '../assets/rectangle-158.svg';
import image2 from '../assets/rectangle-158-2.svg';
import image3 from '../assets/rectangle-158-3.svg';
import image4 from '../assets/rectangle-158-4.svg';
import image5 from '../assets/rectangle-158-5.svg';
import image6 from '../assets/rectangle-158-6.svg';

const cards = [
  {
    date: "16th Sept, 2024",
    author: "AskToMentor",
    title: "Lorem Text Dummy",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imgSrc: image1,
  },
  {
    date: "16th Sept, 2024",
    author: "AskToMentor",
    title: "Lorem Text Dummy",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imgSrc: image2,
  },
  {
    date: "16th Sept, 2024",
    author: "AskToMentor",
    title: "Lorem Text Dummy",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imgSrc: image3,
  },
  {
    date: "16th Sept, 2024",
    author: "AskToMentor",
    title: "Lorem Text Dummy",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imgSrc: image4,
  },
  {
    date: "16th Sept, 2024",
    author: "AskToMentor",
    title: "Lorem Text Dummy",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imgSrc: image5,
  },
  {
    date: "16th Sept, 2024",
    author: "AskToMentor",
    title: "Lorem Text Dummy",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imgSrc: image6,
  },
];

const CardList = () => {
  return (
    <div className="mt-10 mb-20">
      <div className="w-full flex justify-center">
        <div className="max-w-6xl w-full px-4"> 
          <div className="grid grid-cols-1 tablet-sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mt-10">
            {cards.map((card, index) => (
              <FeatureCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardList;
