import React, { useEffect, useState } from "react";

const LoadingScreen = ({onComplete}) => {
  const [text, setText] = useState("");
  const fullText = "<Hello World";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
            onComplete();
        },1000);


      }
    }, 100);
    return () => clearInterval(interval);
  },[onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold ">
        <h1>
          {text}
          <span className="animate-blink ml-1"> | </span>
        </h1>
        <div className="w-[200px] h-0.5 bg-gray-800 rounded relative overflow-hidden">
          <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar  "></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;



//////////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useEffect, useState } from "react";

// const LoadingScreen = () => {
//   const [text, setText] = useState("");
//   const fullText = "<Hello World />";
  
//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       setText(fullText.substring(0, index));
//       index++;
//       if (index > fullText.length) clearInterval(interval);
//     }, 120);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center text-gray-100">
//       {/* Typing text */}
//       <h1 className="text-4xl md:text-5xl font-mono font-bold mb-6 flex items-center">
//         {text}
//         <span className="ml-1 w-1 h-8 bg-blue-400 animate-blink" />
//       </h1>

//       {/* Progress bar */}
//       <div className="w-[200px] h-1 bg-gray-800 rounded-full overflow-hidden">
//         <div className="h-full w-[40%] bg-blue-500 animate-loading-bar" />
//       </div>
//     </div>
//   );
// };

// export default LoadingScreen;

