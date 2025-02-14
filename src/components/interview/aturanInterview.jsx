import React, { useState, useEffect } from "react";

function Peraturan() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(true);
    }, []);

    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-lg z-1000">
            <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl shadow-xl w-[90%] sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-xl relative">
                <div className="text-center border-b pb-3">
                    <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-red-600">
                        PERHATIAN!
                    </h1>
                </div>
                <div className="mt-4 space-y-2 text-gray-700 text-sm sm:text-base md:text-lg">
                    <p>1. </p>
                    <p>2. </p>
                    <p>3. </p>
                </div>

                <div className="mt-6 flex justify-center">
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="px-6 py-2 bg-red-600 text-white font-semibold 
                                   rounded-lg hover:bg-red-700 transition-all"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Peraturan;
