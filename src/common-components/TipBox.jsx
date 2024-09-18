import React from "react";

const TipsBox = (props) => {
    return (
        <div
            className="bg-gray-800 text-white  p-6 max-w-screen-xl overflow-y-auto h-[780px] w-[850px] "
            style={{ position: 'relative', zIndex: 50 }} // Adjust the zIndex value as needed
        >
            <h2 className="text-2xl font-bold mb-4">Instructions :</h2>
            <ul className="space-y-4">
                {props.tips && props.tips.map((tip, index) => (
                    <li key={index} className="text-gray-300">
                        {tip}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TipsBox;
