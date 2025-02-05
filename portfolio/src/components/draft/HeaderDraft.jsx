// import React from 'react';
// import { HeadShot } from './HeadShot.jsx';

// function Section({ sectionData }) {
//   const { section, id, title } = sectionData;

//   if (section === 'about') {
//     return (
//       // Use a flex container that is column on mobile and row on large screens.
//       <div className="flex flex-col lg:flex-row p-[100px] gap-[100px]">
//         {/* On mobile, headshot is first; on large screens, it’s moved to the right */}
//         <HeadShot className="order-1 lg:order-2" />
//         <div className="flex flex-col w-full lg:w-1/2 order-2 lg:order-1">
//           <div className="flex items-center gap-[15px]">
//             <p className="text-[25px] text-[#4801a7] font-space">{`#${id}.`}</p>
//             <p className="text-[25px] text-black font-space">{title}</p>
//           </div>
//           <hr
//             className="w-1/2 h-[1px] self-center bg-[#4801a7]"
//             style={{ transform: 'scaleY(0.5)' }}
//           />
//           <div className="flex flex-col mt-4">
//             <p className="text-[16px] text-black font-space">
//               Hello! I'm Bayanda, a Passionate Front-End Developer.
//             </p>
//             <p className="text-[16px] text-black font-space mt-2">
//               I specialize in building responsive, visually appealing websites
//               with smooth, interactive user interfaces. My focus is on creating
//               a seamless user experience through clean, efficient code and
//               custom animations that bring websites to life.
//               <br />
//               Whether you're looking to launch a new site, enhance an existing
//               one, or need specific front-end features, I'm here to help make
//               your vision a reality. Let's make your online presence shine!
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // You can add additional section types here with their own layout.
//   return null;
// }

// export function AboutMe({ data }) {
//   if (!Array.isArray(data)) return null;

//   return (
//     <>
//       {data.map((element) => (
//         <React.Fragment key={element.id}>
//           <Section sectionData={element} />
//         </React.Fragment>
//       ))}
//     </>
//   );
// }



// import React from 'react';
// import headShot from '../assets/headshot.jpg';

// export function HeadShot({ className = '' }) {
//   return (
//     // The container has relative positioning so that the absolutely positioned children (the box and image) work together.
//     <div className={`mt-[30px] relative ${className}`}>
//       {/* The decorative box mimics the original border styling */}
//       <div className="absolute border-4 border-[#4801a7] h-[292px] w-[29vw]"></div>
//       {/* The headshot container */}
//       <div className="relative">
//         <a
//           href="http://github.com/softwareNinja-888"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img
//             src={headShot}
//             alt="Head shot"
//             className="w-[30vw] h-[300px] absolute transition-transform duration-500 ease-in-out transform cursor-pointer hover:-translate-x-5 hover:-translate-y-5 active:-translate-x-5 active:-translate-y-5"
//           />
//         </a>
//       </div>
//     </div>
//   );
// }