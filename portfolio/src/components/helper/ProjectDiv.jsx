
// export function ProjectDiv(){
//     return (
//         <>
//             <div className="relative bg-[#0A192F] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-lg text-white">
//               <p className="text-sm text-teal-400 uppercase mb-2">Featured Project</p>
//               <h3 className="text-2xl font-semibold mb-3">Spotify Profile</h3>
//               <p className="text-gray-300 mb-4">
//                 A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio insights. Create and save new playlists of recommended tracks.
//               </p>
//               <div className="flex flex-wrap gap-2 text-gray-400 text-sm">
//                 <span>React</span>
//                 <span>Styled Components</span>
//                 <span>Express</span>
//                 <span>Spotify API</span>
//               </div>
//             </div>
//         </>
//     )
// }


// export function ProjectDiv(){
//   return (
//     <div className="relative bg-[#0A192F] p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 max-w-xl text-white group">
//       {/* Floating Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-[#112240] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-6">
//         <p className="text-gray-300 text-sm">
//           Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
//         </p>
//       </div>

//       {/* Featured Project Tag */}
//       <p className="text-sm text-teal-400 uppercase mb-2">Featured Project</p>

//       {/* Project Title */}
//       <h3 className="text-2xl font-semibold mb-3">Spotify Profile</h3>

//       {/* Description */}
//       <p className="text-gray-300 mb-4">
//         A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio insights.
//       </p>

//       {/* Tech Stack */}
//       <div className="flex flex-wrap gap-2 text-gray-400 text-sm">
//         <span>React</span>
//         <span>Styled Components</span>
//         <span>Express</span>
//         <span>Spotify API</span>
//       </div>
//     </div>
//   );
// }

import React from 'react';


export function ProjectDiv ({ title, description, technologies, imageUrl ,github, live,featured=false}){

  return (
    <div className="relative w-full max-w-4xl my-8 ">
      <div className="flex gap-6">
        {/* Project Image */}
        <div className="w-8/12 h-96 overflow-auto rounded-lg">
          <img 
            src={imageUrl || "/api/placeholder/600/400"} 
            alt={title} 
            className="w-full h-full"
          />
        </div>
        
         <div className="absolute left-[55%] top-9 w-[55%] bg-[#0d1117] p-6 rounded-lg border border-gray-700 shadow-xl">
          
            {featured ? (
              <p className="text-sm text-teal-400 uppercase mb-2">Featured Project</p>
            ): null}
            <h3 className="text-2xl text-white font-semibold mb-3">{title}</h3>
            <p className="text-gray-300 mb-4 font-lora">
              {description}
            </p>
            
          
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="text-xs text-gray-400 px-3 py-1 bg-gray-800 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4 mt-4">
              <a href={github} target='_blank' className="text-gray-400 hover:text-gray-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                </svg>
              </a>
              <a href={live} target='_blank' className="text-gray-400 hover:text-gray-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div> 

     
      </div>
    </div>
  );
};



