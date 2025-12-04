import { Play, MoreHorizontal, ChevronDown } from "lucide-react";

const TopikFeed = () => {
  return (
    <div className="p-4 sm:p-6 flex justify-center">
      <div className="w-full max-w-7xl">

        {/* Responsive Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center w-full md:justify-between">

          {/* Left */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full md:w-auto">
            <p className="font-semibold text-lg sm:text-xl text-gray-700">Topik</p>

            <button className="flex items-center gap-2 px-4 py-1 rounded-full text-sm sm:text-base">
              <span className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-pink-500" />
              Psikologi & Kepribadian
            </button>
          </div>

          {/* Right Filter */}
          <div className="flex items-center gap-4 bg-[#F9F9F9] px-4 py-3 rounded-xl w-full flex-1 md:w-auto overflow-x-auto">
            <p className="font-semibold text-gray-700 text-base sm:text-xl">Unit</p>

            <button className="flex items-center gap-2 px-4 py-1 rounded-full border shadow text-xs sm:text-sm bg-white whitespace-nowrap">
              <span className="w-3 h-3 rounded-full bg-[#FFB6C1]" />
              Psikologi Dasar
            </button>
          </div>
        </div>

        {/* Responsive Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-10">
          {[1,2,3,4,5,6].map((_, i)=>(
            <div key={i} className="flex flex-col">
              
              {/* Author */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 bg-gray-300 rounded-full" />
                </div>
                <p className="text-[10px] sm:text-xs text-gray-600 leading-tight">
                  Noah Hansen in Psikologi & Kepribadian <br/>
                  <span className="text-gray-400">with Universitas Gadjah Mada</span>
                </p>
              </div>

              {/* Thumbnail */}
              <div className="rounded-2xl bg-gray-200 h-[200px] sm:h-[230px] mb-3 shadow-sm" />

              {/* Title */}
              <p className="font-medium text-sm sm:text-base mb-4">
                Sal offers a compelling vision for ...
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between bg-white rounded-xl p-6 shadow-sm border text-xs">
                <div className="flex items-center gap-1">
                  <Play size={14}/> 14 Menit
                </div>

                <div className="flex items-center gap-1">
                  <ChevronDown size={14}/> 232
                </div>

                <MoreHorizontal size={16}/>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TopikFeed;
