import About from "./landingComponenrs/About";
import Feature from "./landingComponenrs/Feature";
import FAQ from "./landingComponenrs/FAQ";
import Hook from "./landingComponenrs/Hook";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div
        className="
          relative w-full 
          bg-cover bg-center bg-no-repeat 
          py-20 sm:py-24 md:py-32 px-6 md:px-16
          flex flex-col justify-center -z-10
        "
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1407863570/photo/innovation-through-ideas-and-inspiration-ideas-human-hand-holding-light-bulb-to-illuminate.jpg?s=612x612&w=0&k=20&c=XqD2JdywyodLSm32dkpjIIMeTsrqc8r7yzXWXUA4fks=')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center">
          
          {/* Left Text */}
          <div className="max-w-xl">
            <h1 className="font-bold text-white leading-tight">
              <span className="text-6xl sm:text-7xl md:text-8xl drop-shadow-xl block">
                Start
              </span>

              <span className="block text-3xl sm:text-4xl md:text-5xl mt-2 drop-shadow-xl">
                Collaborating with your friends
              </span>

              <span className="block text-2xl sm:text-3xl md:text-4xl mt-4 drop-shadow-xl">
                Shape your idea
              </span>

              <span className="text-5xl sm:text-6xl md:text-6xl mx-2 drop-shadow-xl">
                &
              </span>

              <span className="text-2xl sm:text-3xl md:text-4xl drop-shadow-xl">
                Make it great...
              </span>
            </h1>
          </div>

          {/* Decorative shapes – mobile optimized */}
          <div className="hidden sm:flex flex-col gap-4 pr-4 opacity-80">
            <div
              className="w-32 h-32 bg-gray-700 blur-2xl"
              style={{
                clipPath: "polygon(0 0, 0% 100%, 100% 49%)",
              }}
            ></div>

            <div
              className="w-32 h-32 bg-gray-800 rotate-180 blur-xl -mt-10"
              style={{
                clipPath: "polygon(0 0, 0% 100%, 100% 49%)",
              }}
            ></div>

            <div
              className="w-24 h-24 bg-gray-500 blur-xl -mt-10"
              style={{
                clipPath: "polygon(0 0, 0% 100%, 100% 49%)",
              }}
            ></div>

            <div
              className="w-14 h-14 bg-gray-300/60 blur-xl rotate-180 -mt-8 ml-10"
              style={{
                clipPath: "polygon(0 0, 0% 100%, 100% 49%)",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* OTHER SECTIONS */}
      <About />
      <Feature />
      <Hook />
      <FAQ />
    </>
  );
}

export default Home;
