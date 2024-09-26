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
            <ServiceSection title="Customer Service" imageSrc="./assets/image-51.svg" top="392px" left="589px" />
            <ServiceSection title="Sales & Marketing" imageSrc="./assets/image-50.svg" top="522px" left="345px" />
            <ServiceSection title="Engineering & Architecture" imageSrc="./assets/image-49.svg" top="409px" left="50px" />
            <ServiceSection title="Design & Creative" imageSrc="./assets/image-48.svg" top="138px" left="69px" />
            <ServiceSection title="Data Science & Analytics" imageSrc="./assets/image-47.svg" top="38px" left="228px" />
            <ServiceSection title="Account & Consulting" imageSrc="./assets/image-46.svg" top="88px" left="537px" />
            <img src="./assets/group-1597883105.svg" alt="Center Icon" className="absolute" style={{ top: '258px', left: '277px' }} />

            {/* Connecting Lines */}
            <img src="./assets/vector-129.svg" alt="Line 1" className="absolute" style={{ top: '347px', left: '438.5px' }} />
            <img src="./assets/vector-130.svg" alt="Line 2" className="absolute" style={{ top: '195.5px', left: '395.79px' }} />
            <img src="./assets/vector-131.svg" alt="Line 3" className="absolute" style={{ top: '220px', left: '261px' }} />
            <img src="./assets/vector-132.svg" alt="Line 4" className="absolute" style={{ top: '135px', left: '298.5px' }} />
            <img src="./assets/vector-133.svg" alt="Line 5" className="absolute" style={{ top: '215.76px', left: '163.5px' }} />
            <img src="./assets/vector-134.svg" alt="Line 6" className="absolute" style={{ top: '376px', left: '151px' }} />
            <img src="./assets/vector-135.svg" alt="Line 7" className="absolute" style={{ top: '392.16px', left: '325.79px' }} />
            <img src="./assets/line-5.svg" alt="Line 8" className="absolute" style={{ top: '408px', left: '489px' }} />
        </div>
    </div>
);

export default DesignDiagram;
