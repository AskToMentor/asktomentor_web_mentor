import React from 'react';
import { Link } from 'react-router-dom';

const ImportComponent = () => {
    return (
        <div className="flex justify-center items-center mt-5 h-[70vh] w-full mx-auto mt-[100px]">
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg text-center w-[40rem]">
                <div className="flex items-center mb-5 bg-gray-800 p-5 rounded">
                    <span className="bg-blue-600 text-white font-bold px-2 py-1 rounded mr-3">in</span>
                    <div className="text-left">
                        <h2 className="text-white text-lg">Import from LinkedIn</h2>
                        <p className="text-gray-400 text-sm">Sync your LinkedIn profile to Porada to share your profile data.</p>
                    </div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg w-3/4 mx-auto">
    <button className="bg-teal-400 text-white py-3 rounded-full w-3/4 hover:bg-teal-500 mx-auto block">
        Import from LinkedIn
    </button>
</div>

                
                <button className="mt-5 bg-gray-800 text-white py-3 w-full hover:bg-gray-900">
                    <Link to="/signup-manually" className="text-white text-base">
                        PROCEED TO CREATE THE ACCOUNT MANUALLY
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default ImportComponent;
