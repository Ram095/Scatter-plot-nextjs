import React from "react";
import { motion } from "framer-motion";

const ScoreCards = ({ teams }: { teams: any[] }) => {
  return (
    <>
      <div className="relative overflow-hidden h-full">
        <div className="grid grid-cols-3 gap-2 animate-vertical-scroll h-full">
          {teams?.map((team, index) => (
            <div key={index} className="bg-black p-4 rounded-md shadow-lg">
              <div className="flex items-start space-x-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                  >
                    <g style={{ mixBlendMode: "darken" }}>
                      <rect
                        y="0.851562"
                        width="26"
                        height="26"
                        fill="#D9D9D9"
                      />
                    </g>
                    <path
                      d="M23.2014 7.80263L13.2257 1.93457L3.25 7.80263V19.5387L13.2257 25.4068L23.2014 19.5387V7.80263Z"
                      stroke="#FEB95A"
                      strokeWidth="1.95"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.53125 14.8439V17.1911M13.2257 12.4966V17.1911V12.4966ZM17.9201 10.1494V17.1911V10.1494Z"
                      stroke="#FEB95A"
                      strokeWidth="1.95"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <motion.div
                    className="text-white mt-1 text-xl font-bold mb-1"
                    key={team.y}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    {team.y}
                  </motion.div>
                  <div className="text-gray-400 text-sm">{team.x}</div>
                  <div className="text-green-400 text-xs">-</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .vertical-scroll-container {
          display: grid;
          animation: verticalScroll 20s linear infinite;
        }

        @keyframes verticalScroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(calc(-100%));
          }
        }
      `}</style>
    </>
  );
};

export default ScoreCards;
