import { FC } from 'react';

const AceBanner: FC = () => {
  return (
    <section className="h-full bg-[#f5f1e4]">
      <div className="h-full">
        <div className="flex flex-col md:flex-row items-center h-full relative">
          {/* Text Content */}
          <div className="w-full md:w-1/2 z-10 p-4 md:p-6">
            <div className="max-w-[95%] sm:max-w-[90%] md:max-w-[95%]">
              <h2 className="text-[#2D4342] font-bold">
                <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-4xl mb-1">
                  Encontre
                </span>
                <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-4xl mb-1">
                  seu look
                </span>
                <span className="block text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold">
                  ACE
                </span>
              </h2>
              <button className="mt-6 bg-[#CFF350] text-[#2D4342] px-8 py-3 rounded-lg font-bold hover:bg-[#bde33b] transition-colors">
                CONFIRA
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 h-full relative">
            <img
              src="/images/ace/ace.png"
              alt="Ace Collection"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AceBanner;
