import React from 'react';

import paragon from '../assets/paragon.png';
import rane from '../assets/rane.png';
import sud from '../assets/sud.png';
import ncl from '../assets/ncl.png';
import dcm from '../assets/dcm.png';
import jk from '../assets/jk.png';
import rasi from '../assets/rasi.png';
import fen from '../assets/fen.png';

const clients = [
  { name: 'Paragon', logo: paragon },
  { name: 'Rane Brake Lining', logo: rane },
  { name: 'Sudhakar Pipes & Fittings', logo: sud },
  { name: 'NCL', logo: ncl },
  { name: 'DCM Shriram Group', logo: dcm },
  { name: 'JK Group', logo: jk },
  { name: 'Rasi Seeds', logo: rasi },
  { name: 'Fenesta Windows', logo: fen },
];

const ClientsMarquee = () => {
  return (
    <div className="my-12">
      {/* Heading */}
      <h2 className="text-3xl font-extrabold mt-24 mb-4 text-center text-gradient bg-gradient-to-r from-green-400 to-teal-600">
        Our Esteemed Clients
      </h2>
      <div className="w-24 h-1 mx-auto mb-5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500"></div>
      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-5 leading-relaxed text-[17px]">
        We are proud to have partnered with a diverse range of clients across industries, delivering tailored labeling solutions that enhance efficiency, branding, and operational excellence. Our commitment to quality and service has earned the trust of businesses big and small.
      </p>
      {/* Marquee */}
      <div className="marquee-container">
        <div className="marquee">
          {[...clients, ...clients].map((client, idx) => (
            <div className="client" key={idx}>
              <img
                src={client.logo}
                alt={client.name}
                title={client.name}
                className="client-logo"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
          background: #f9f9f9;
          padding: 20px 0;
          box-sizing: border-box;
          border-radius: 10px;
          border: 1px solid #ddd;
        }

        .marquee {
          display: inline-flex;
          animation: marqueeAnim 20s linear infinite;
        }

        .client {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 40px;
        }

        .client-logo {
          max-height: 80px;
          max-width: 130px;
          object-fit: contain;
          filter: grayscale(0.6);
          transition: filter 0.3s ease, transform 0.3s ease;
          cursor: pointer;
        }

        .client-logo:hover {
          filter: grayscale(0);
          transform: scale(1.1);
        }

        @keyframes marqueeAnim {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .client {
            padding: 0 20px;
          }
          .client-logo {
            max-height: 40px;
            max-width: 80px;
          }
        }
      `}</style>
    </div>
  );
};

export default ClientsMarquee;
