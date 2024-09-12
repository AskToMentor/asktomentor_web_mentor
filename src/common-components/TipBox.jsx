import React from "react";

const TipsBox = (props) => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg p-4 max-w-sm overflow-y-auto h-[500px] shadow-md">
            <h2 className="text-xl font-semibold mb-4">Tips</h2>
            <ul className="space-y-3">
                {
                    props.tips && props.tips.map((tip, index) => (
                        <li key={index} className="text-gray-700">
                            {tip}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default TipsBox;