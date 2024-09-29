import React from 'react';

// Component representing each service section
const ServiceSection = ({ title, imageSrc, top, left }) => (
    <div className="absolute flex flex-col items-center" style={{ top, left }}>
        <img src={imageSrc} alt={title} className="mb-2" />
        <div className="text-center text-sm uppercase">{title}</div>
    </div>
);

// Main component representing the entire design
const DesignDiagram = () => (
    <div className="relative w-full h-full min-h-screen flex items-center justify-center" style={{ backgroundColor: 'transparent' }}>
        <div className="relative" style={{ width: '715px', height: '663px' }}>
            <img src="./assets/rectangle-164.svg" alt="Background" className="w-full h-full object-cover" style={{ opacity: 0 }} />
            
            {/* Adjusting positions to align better */}
            <ServiceSection title="Customer Service" imageSrc="./assets/image-51.svg" top="400px" left="570px" />
            <ServiceSection title="Sales & Marketing" imageSrc="./assets/image-50.svg" top="530px" left="350px" />
            <ServiceSection title="Engineering & Architecture" imageSrc="./assets/image-49.svg" top="400px" left="40px" />
            <ServiceSection title="Design & Creative" imageSrc="./assets/image-48.svg" top="150px" left="70px" />
            <ServiceSection title="Data Science & Analytics" imageSrc="./assets/image-47.svg" top="50px" left="230px" />
            <ServiceSection title="Account & Consulting" imageSrc="./assets/image-46.svg" top="90px" left="530px" />
            
            <img src="./assets/group-1597883105.svg" alt="Center Icon" className="absolute" style={{ top: '270px', left: '285px' }} />

            {/* Adjusting Connecting Lines */}
            <img src="./assets/vector-129.svg" alt="Line 1" className="absolute" style={{ top: '365px', left: '435px', filter: 'brightness(0) invert(1)', transform: 'scale(1.2)' }} />
            <img src="./assets/vector-130.svg" alt="Line 2" className="absolute" style={{ top: '205px', left: '395px', filter: 'brightness(0) invert(1)', transform: 'scale(1.2)' }} />
            <img src="./assets/vector-131.svg" alt="Line 3" className="absolute" style={{ top: '225px', left: '260px', filter: 'brightness(0) invert(1)', transform: 'scale(1.2)' }} />
            <img src="./assets/vector-132.svg" alt="Line 4" className="absolute" style={{ top: '150px', left: '300px', filter: 'brightness(0) invert(1)', transform: 'scale(1.2)' }} />
            <img src="./assets/vector-133.svg" alt="Line 5" className="absolute" style={{ top: '220px', left: '160px', filter: 'brightness(0) invert(1)', transform: 'scale(1.2)' }} />
            <img src="./assets/vector-134.svg" alt="Line 6" className="absolute" style={{ top: '380px', left: '150px', filter: 'brightness(0) invert(1)', transform: 'scale(1.2)' }} />
            <img src="./assets/vector-135.svg" alt="Line 7" className="absolute" style={{ top: '400px', left: '320px', filter: 'brightness(0) invert(1)', transform: 'scale(1.2)' }} />
            <img src="./assets/line-5.svg" alt="Line 8" className="absolute" style={{ top: '420px', left: '485px', filter: 'brightness(0) invert(1)', transform: 'scale(1.2)' }} />
        </div>
    </div>
);

export default DesignDiagram;
