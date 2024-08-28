// import React, { useState, useEffect } from "react";

// const TypingAnimation = ({ texts, speed }) => {
//   const [currentTextIndex, setCurrentTextIndex] = useState(0);
//   const [displayText, setDisplayText] = useState("");

//   useEffect(() => {
//     let currentCharIndex = 0;

//     const intervalId = setInterval(() => {
//       if (currentCharIndex <= texts[currentTextIndex].length) {
//         setDisplayText(texts[currentTextIndex].substring(0, currentCharIndex));
//         currentCharIndex += 1;
//       } else {
//         clearInterval(intervalId);
//         setTimeout(() => {
//           setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
//         }, 500);
//       }
//     }, speed);

//     return () => clearInterval(intervalId);
//   }, [texts, speed, currentTextIndex]);

//   return (
//     <span style={{ color: "rgb(133, 76, 230)", cursor: "pointer" }}>
//       <i>{displayText}</i>
//     </span>
//   );
// };

// export default TypingAnimation;

import React, { useState, useEffect } from "react";

const TypingAnimation = ({ texts, speed }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentCharIndex = 0;
    let intervalId;

    const typeText = () => {
      if (currentCharIndex <= texts[currentTextIndex].length) {
        setDisplayText(texts[currentTextIndex].substring(0, currentCharIndex));
        currentCharIndex += 1;
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          currentCharIndex = 0; // Reset for the next text
        }, 500);
      }
    };

    intervalId = setInterval(typeText, speed);

    return () => clearInterval(intervalId);
  }, [texts, speed, currentTextIndex]);

  return (
    <span style={{ color: "rgb(133, 76, 230)", cursor: "pointer" }}>
      <i>{displayText}</i>
    </span>
  );
};

export default React.memo(TypingAnimation);
