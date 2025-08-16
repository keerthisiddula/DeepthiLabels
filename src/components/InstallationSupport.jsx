import React from 'react';

const InstallationSupport = () => {
  return (
    <section
      id="installation-support"
      className="my-12 px-6 max-w-full mx-auto"
    >
      <h2 className="text-3xl font-extrabold mt-12 mb-4 text-center text-gradient bg-gradient-to-r from-green-400 to-teal-600">
        Watch Our Printer Installation Walkthrough
      </h2>
      <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500"></div>
      <p className="text-gray-400 mb-8 text-center max-w-3xl mx-auto text-[18px]">
        We don’t just sell printers — we provide easy setup assistance so you can start printing custom labels without hassle.
      </p>
      <div
        className="relative mx-auto"
        style={{
          paddingTop: '40%',  // or '56.25%' for classic 16:9
          width: '80%',
          minWidth: '320px',
          maxWidth: '900px',
          maxHeight:'200px'
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/B91eJatlZC8"
          title="Printer Installation Guide"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
        ></iframe>
      </div>
    </section>
  );
};

export default InstallationSupport;
