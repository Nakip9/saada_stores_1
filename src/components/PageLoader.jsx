import React from 'react';

const PageLoader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
                <span className="text-sm font-bold text-gray-400 animate-pulse">Loading...</span>
            </div>
        </div>
    );
};

export default PageLoader;
