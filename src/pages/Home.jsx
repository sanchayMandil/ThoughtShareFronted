import About from "./landingComponenrs/About";
import Feature from "./landingComponenrs/Feature";
import FAQ from "./landingComponenrs/FAQ";
import Hook from "./landingComponenrs/Hook";
function Home(){
    return (
         <>
   <div className="flex-col justify-items-start p-[80px] drop-shadow-lg relative
   bg-[url(https://media.istockphoto.com/id/1407863570/photo/innovation-through-ideas-and-inspiration-ideas-human-hand-holding-light-bulb-to-illuminate.jpg?s=612x612&w=0&k=20&c=XqD2JdywyodLSm32dkpjIIMeTsrqc8r7yzXWXUA4fks=)] bg-no-repeat bg-cover">
    <div className="flex justify-between items-center">
        <div>
                    <div className="cursive mt-15 z-5">
    <span className=" text-[90px] drop-shadow-lg">S</span>
        <spam className="text-[50px] drop-shadow-lg">
            tart Collabrating with your friends
        </spam>
        <br/>
        <span className="text-[40px] drop-shadow-lg"> Shape your idea</span>
        <span className="text-[65px] drop-shadow-lg"> & </span>
        <span className="text-[40px] drop-shadow-lg">Make it greate...</span>
    </div>
        </div>

  {/* shapes */}
  <div className="flex flex-col pr-[5vw] opacity-55">
        <div  className=" w-[13vw] h-[13vw] bg-gray-700 blur-[20px]" style={{
            clipPath: 'polygon(0 0, 0% 100%, 100% 49%)',
        }}></div>
           <div  className=" w-[13vw] h-[13vw] bg-gray-800 rotate-180 blur-[15px] -mt-[6vw]" style={{
            clipPath: 'polygon(0 0, 0% 100%, 100% 49%)',
        }}></div>
           <div  className=" w-[10vw] h-[10vw] bg-gray-500 blur-lg -mt-[5.8vw]" style={{
            clipPath: 'polygon(0 0, 0% 100%, 100% 49%)',
        }}></div>
         <div  className=" w-[5vw] h-[5vw] bg-gray-300/50 blur-lg rotate-180 -mt-[4vw] ml-[6vw]" style={{
            clipPath: 'polygon(0 0, 0% 100%, 100% 49%)',
        }}></div>
  </div>
  
    </div>
  
  <div className="absolute -z-10 w-full h-full top-0 left-0 bg-gradient-to-t from-black/80 opacity-50"></div>
</div>
<About/>
<Feature/>
<Hook/>
<FAQ/>
    </>
    )
}
export default Home;