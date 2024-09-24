import React from 'react';

const Sidebar = () => {
    const daysShort = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const days = Array.from({ length: 30 }, (_, i) => i + 1);
    const today = new Date().getDate();

    return (
        <div
            className="w-[233.45px] h-[963.67px] bg-[#212A31] text-white p-4 border-r-[0.93px] border-[#DADCE0]"
            style={{ left: '-4.67px' }}
        >
            <div className="text-lg font-medium mb-4">September 2024</div>
            <div className="grid grid-cols-7 gap-0">
                {daysShort.map((day, index) => (
                    <div className="text-center" key={index}>
                        {day}
                    </div>
                ))}
                {days.map((day, index) => (
                    <div
                        key={index}
                        className="text-center py-1"
                        style={{
                            backgroundColor: day === today ? '#124E66' : 'transparent',
                        }}
                    >
                        {day}
                    </div>
                ))}
            </div>
        </div>
    );
};


const CalendarHeader = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return (
        <div className="w-[100%] h-[100%] bg-white text-black flex justify-between p-2">
            {days.map((day, index) => (
                <div className="flex-1 text-center" key={index}>
                    {day}
                </div>
            ))}
        </div>
    );
};

const TimeLabel = () => {
    const times = Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}:00`);
    return (
        <div className="space-y-6 text-gray-400 p-1">
            {times.map((time, index) => (
                <div key={index}>{time}</div>
            ))}
        </div>
    );
};

const CalendarGrid = () => {
    const times = Array.from({ length: 24 });
    const days = Array.from({ length: 7 });

    return (
        <div className="flex-1 grid grid-cols-7 grid-rows-24 gap-0 border border-gray-700">
            {times.map((_, rowIndex) => (
                days.map((_, colIndex) => (
                    <div
                        key={rowIndex * days.length + colIndex}
                        className="border border-gray-700 transition duration-300 ease-in-out hover:bg-blue-600 hover:border-blue-800"
                    ></div>
                ))
            ))}
        </div>
    );
};


const TopBar = () => (
    <div className="text-white flex justify-between items-center p-1 shadow-md rounded-lg mb-4">
        <div className="flex space-x-2">
            <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-sm transition duration-300">
                All Bookings
            </button>
            <button
                className="hover:bg-blue-600 px-4 py-2 rounded-md text-sm flex items-center transition duration-300"
                style={{ backgroundColor: '#124E66' }}
            >
                <span className="mr-2">Add Service</span>
                <img alt="Add" src="./assets/icon-font-awesome-free-solid-p-plus-circle.svg" />
            </button>

        </div>
    </div>
);


const App = () => {
    return (
        <div className="flex h-full">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <TopBar />
                <CalendarHeader />
                <div className="flex flex-1">
                    <TimeLabel />
                    <CalendarGrid />
                </div>
            </div>
        </div>
    );
};

const Calendar = () => (
    <div className="h-screen p-4">
        <App />
    </div>
);

export default Calendar;
