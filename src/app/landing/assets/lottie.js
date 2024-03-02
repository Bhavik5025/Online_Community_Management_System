import { useEffect, useState } from "react";

export default function Lottie() {
  const [src,setScr]=useState('');
  useEffect(()=>{
    setScr("https://lottie.host/64a5b794-aa83-40d6-8f7c-b15316abd968/UzmH9hX05V.json");
  }, []);
  return (
    
    <>
   <div className=" w-full max-w-xl lg:max-w-none">
      <dotlottie-player
        className="w-full h-auto lg:w-auto lg:h-auto"
  src="https://lottie.host/64a5b794-aa83-40d6-8f7c-b15316abd968/UzmH9hX05V.json"
        background="transparent"
        speed="1"
        
        loop
        autoplay
      ></dotlottie-player>
      </div>

    </>
  );
}
