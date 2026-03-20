// import './Background.css'

// export default function Background() {
//     return (
//         <div className="area">
//             <ul className="circles">
//                 {Array.from({length: 10}).map((_, index) => (
//                     <li key={index}></li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

import React, { useEffect, useRef } from "react";
import "./Background.css";

const Background: React.FC = () => {
  const starsRef = useRef<HTMLDivElement>(null);
  const stars2Ref = useRef<HTMLDivElement>(null);
  const stars3Ref = useRef<HTMLDivElement>(null);

  const generateStars = (count: number) => {
    let shadow = "";
    for (let i = 0; i < count; i++) {
      const x = Math.floor(Math.random() * 2000);
      const y = Math.floor(Math.random() * 2000);
      shadow += `${x}px ${y}px #FFF${i === count - 1 ? "" : ","}`;
    }
    return shadow;
  };

  useEffect(() => {
    if (starsRef.current)
      starsRef.current.style.boxShadow = generateStars(700);

    if (stars2Ref.current)
      stars2Ref.current.style.boxShadow = generateStars(200);

    if (stars3Ref.current)
      stars3Ref.current.style.boxShadow = generateStars(100);
  }, []);

  return (
    <div className="background-wrapper">
      <div id="stars" ref={starsRef}></div>
      <div id="stars2" ref={stars2Ref}></div>
      <div id="stars3" ref={stars3Ref}></div>

      {/* <div id="title">
        <span>PURE CSS</span>
        <br />
        <span>PARALLAX PIXEL STARS</span>
      </div> */}
    </div>
  );
};

export default Background;
