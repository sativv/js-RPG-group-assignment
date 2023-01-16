// import React, { useState } from "react";
// import "./index.css"; // Importing styles for heart icon

// const Lives = () => {
//   const [lives, setLives] = useState(3); // Initial number of lives

//   const decrementLives = () => {
//     if (lives > 0) {
//       setLives(lives - 1);
//     }
//   };

//   return (
//     <div>
//       <button onClick={decrementLives}>Decrement Lives</button>
//       <div className="lives-container">
//         {Array(lives)
//           .fill()
//           .map((_, index) => (
//             <div key={index} className="heart-icon" />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Lives;

// FOR JSX
// import React, { useState } from 'react';
// import HeartIcon from './HeartIcon'; // Importing the heart icon component

// const Lives = () => {
//   const [lives, setLives] = useState(3); // Initial number of lives

//   const decrementLives = () => {
//     if (lives > 0) {
//       setLives(lives - 1);
//     }
//   };

//   return (
//     <div>
//       <button onClick={decrementLives}>Decrement Lives</button>
//       <div className="lives-container">
//         {Array.from({length: lives}, (_, index) => (
//           <HeartIcon key={index} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Lives;
