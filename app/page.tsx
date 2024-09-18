"use client";
import ScatterPlot from "./component/scatter-plot";

export default function Home() {
  const teams = [
    {
      id: 1,
      score: 8.5,
      name: "Calvi Aurora",
    },
    {
      id: 2,
      score: 7.2,
      name: "Exact FG",
    },
    {
      id: 3,
      score: 6.8,
      name: "SDWorx Finland QA",
    },
    {
      id: 4,
      score: 7.5,
      name: "SDWorx Finland Dev",
    },
    {
      id: 5,
      score: 8.0,
      name: "Eneco Datahub",
    },
    {
      id: 6,
      score: 8.3,
      name: "Exact Titans",
    },
    {
      id: 7,
      score: 7.7,
      name: "Brisker",
    },
    {
      id: 8,
      score: 8.1,
      name: "PeakZi",
    },
    {
      id: 9,
      score: 6.5,
      name: "SDWorx DevOps",
    },
    {
      id: 10,
      score: 8.9,
      name: "AIMMS",
    },
    {
      id: 11,
      score: 7.3,
      name: "Exact Kalopsia",
    },
  ];

  const graphs = [
    <ScatterPlot key="1" />,
    <ScatterPlot key="2" />,
    <ScatterPlot key="3" />,
    <ScatterPlot key="4" />,
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center p-10">
      {/* 80px margin on all sides using p-20 (20 * 4px = 80px) */}
      <div className="mb-8 w-full">
        <h1 className="text-4xl mb-2 text-left">Team Enthusiasm Index</h1>
        <p className="text-lg text-left">
          Visualizing the enthusiasm levels across various teams.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-8 w-full h-full">
        {/* ScatterPlot occupying 8 columns */}
        <div className="col-span-8">
          <ScatterPlot />
        </div>
        <div className="col-span-4 overflow-y-auto snap-y snap-mandatory">
          <div className="relative h-96 overflow-hidden">
            <div className="vertical-scroll-container h-full grid grid-cols-2 gap-4 animate-vertical-scroll">
              {teams.concat(teams).map((team, index) => (
                <div key={index} className="bg-black p-4 rounded-md shadow-lg">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-orange-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c3.308 0 6 2.239 6 5v7h-2v-7a4 4 0 00-8 0v7H6v-7c0-2.761 2.692-5 6-5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white text-xl font-bold mb-1">
                        {team.score}
                      </div>
                      <div className="text-gray-400 text-sm">{team.name}</div>
                      <div className="text-green-400 text-xs">
                        +10% from last quarter
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 w-full overflow-x-auto snap-x snap-mandatory flex space-x-6 py-6">
        <div className="carousel-container relative w-full overflow-x-hidden">
          <div className="carousel-track flex space-x-6 py-6 animate-scroll">
            {graphs.concat(graphs).map((graph, index) => (
              <div
                key={index}
                className="min-w-[300px] bg-transparent rounded-lg p-4 snap-center flex-shrink-0"
              >
                <div className="text-white text-lg font-semibold mb-2">
                  Team Enthusiasm
                </div>
                <div className="bg-transparent h-48 rounded-md flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="349"
                    height="147"
                    viewBox="0 0 349 147"
                    fill="none"
                  >
                    <path
                      d="M3.28003 13.4057C18.7487 19.9861 50.2428 33.1467 52.4703 33.1467C54.6978 33.1467 65.7734 33.1467 71.0327 33.1467L116.511 22.0918L155.491 42.6224H177.766L216.747 18.9332L236.238 24.4607L295.637 59.2049L309.559 53.6774L343.9 2.35077"
                      stroke="#A9DFD8"
                      strokeWidth="1.14674"
                      strokeLinecap="round"
                    />
                    <path
                      d="M52.4703 33.9366L3.28003 14.1956V99.4426H344.828V2.35052L309.216 54.6839L295.637 59.9948L236.238 25.2506L216.747 19.7231L177.766 43.4123H166.629H155.491L116.511 22.8817L71.0327 33.9366H52.4703Z"
                      fill="url(#paint0_linear_1289_1887)"
                    />
                    <ellipse
                      cx="3.28157"
                      cy="13.3685"
                      rx="3.23812"
                      ry="2.75439"
                      fill="#A9DFD8"
                    />
                    <ellipse
                      cx="51.8438"
                      cy="32.6492"
                      rx="3.23812"
                      ry="2.75439"
                      fill="#A9DFD8"
                    />
                    <ellipse
                      cx="71.2679"
                      cy="32.6492"
                      rx="3.23812"
                      ry="2.75439"
                      fill="#A9DFD8"
                    />
                    <ellipse
                      cx="114.973"
                      cy="21.6316"
                      rx="3.23812"
                      ry="2.75439"
                      fill="#A9DFD8"
                    />
                    <ellipse
                      cx="155.44"
                      cy="42.2895"
                      rx="3.23812"
                      ry="2.75439"
                      fill="#A9DFD8"
                    />
                    <ellipse
                      cx="178.102"
                      cy="42.2895"
                      rx="3.23812"
                      ry="2.75439"
                      fill="#A9DFD8"
                    />
                    <ellipse
                      cx="216.951"
                      cy="18.8772"
                      rx="3.23812"
                      ry="2.75439"
                      fill="#A9DFD8"
                    />
                    <ellipse
                      cx="236.375"
                      cy="24.386"
                      rx="3.23812"
                      ry="2.75439"
                      fill="#A9DFD8"
                    />
                    <ellipse
                      cx="296.267"
                      cy="58.8158"
                      rx="3.23812"
                      ry="2.75439"
                      fill="#A9DFD8"
                    />
                    <ellipse
                      cx="309.219"
                      cy="53.3071"
                      rx="3.23812"
                      ry="2.75439"
                      fill="#A9DFD8"
                    />
                    <ellipse
                      cx="343.211"
                      cy="3.72808"
                      rx="3.23812"
                      ry="2.75439"
                      fill="#A9DFD8"
                    />
                    <path
                      d="M3.28003 73.6749L30.1955 71.306L66.3921 56.3029L114.654 98.9434H165.701L224.172 83.9403L298.422 87.8885L343.9 60.2511"
                      stroke="#F2C8ED"
                      strokeWidth="1.14674"
                      strokeLinecap="round"
                    />
                    <path
                      d="M30.1955 72.0956L3.28003 74.4646V146.956H344.828V60.251L298.422 88.6781L262.274 86.3598L223.425 84.294L165.701 99.7331H114.162L66.3921 57.0925L30.1955 72.0956Z"
                      fill="url(#paint1_linear_1289_1887)"
                    />
                    <ellipse
                      cx="3.28157"
                      cy="73.965"
                      rx="3.23812"
                      ry="2.75439"
                      fill="#F2C8ED"
                    />
                    <ellipse
                      cx="29.1817"
                      cy="71.2106"
                      rx="3.23812"
                      ry="2.75439"
                      fill="#F2C8ED"
                    />
                    <ellipse
                      cx="66.4122"
                      cy="56.0615"
                      rx="3.23812"
                      ry="2.75439"
                      fill="#F2C8ED"
                    />
                    <ellipse
                      cx="114.973"
                      cy="98.7544"
                      rx="3.23812"
                      ry="2.75439"
                      fill="#F2C8ED"
                    />
                    <ellipse
                      cx="165.153"
                      cy="98.7544"
                      rx="3.23812"
                      ry="2.75439"
                      fill="#F2C8ED"
                    />
                    <ellipse
                      cx="223.427"
                      cy="83.6053"
                      rx="3.23812"
                      ry="2.75439"
                      fill="#F2C8ED"
                    />
                    <ellipse
                      cx="297.887"
                      cy="87.7369"
                      rx="3.23812"
                      ry="2.75439"
                      fill="#F2C8ED"
                    />
                    <ellipse
                      cx="344.83"
                      cy="58.8158"
                      rx="3.23812"
                      ry="2.75439"
                      fill="#F2C8ED"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1289_1887"
                        x1="170.816"
                        y1="-4.37228"
                        x2="172.546"
                        y2="109.015"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#A9DFD8" />
                        <stop offset="1" stopColor="#1D1E26" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_1289_1887"
                        x1="171.626"
                        y1="52.075"
                        x2="172.201"
                        y2="147.64"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#F2C8ED" />
                        <stop offset="1" stopColor="#1D1E26" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <div className="flex items-center space-x-2">
                    <span className="h-2 w-2 bg-teal-400 rounded-full"></span>
                    <span>Last Month</span>
                    <span className="text-white ml-4">9.0</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="h-2 w-2 bg-pink-400 rounded-full"></span>
                    <span>This Month</span>
                    <span className="text-white ml-4">8.2</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .carousel-container {
          scroll-snap-type: x mandatory;
        }
        .carousel-track {
          display: flex;
          animation: scroll 20s linear infinite;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-300px * ${graphs.length}));
          }
        }

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
    </div>
  );
}
