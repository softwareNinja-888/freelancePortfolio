import React from 'react';
import place from '/place.png'


export function ProjectDiv ({ title, description, technologies, imageUrl ,github, live,featured=false,InProgress=false}){

  console.log(imageUrl)

  return (
    <div className="relative w-10/12  max-w-4xl my-8 ">
      <div className="flex flex-col gap-6">
        {/* Project Image */}
        <div className="flex flex-col lg:w-10/12 w-12/12 h-[600px] lg:h-[400px] overflow-auto ">
          <div className="relative w-full h-[350px] md:h-[400px] border border-black">
            <img 
              src={imageUrl || place} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:hidden border border-black border-t-0 px-2 py-2">
              <h3 className="text-xl text-black font-bold mb-3 font-poppins">{title}</h3>
              <p className="text-black text-sm mb-4 font-mont">
                {description}
              </p>
              
            
              <div className="flex flex-wrap gap-3 font-lora">
                {technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="text-xs text-gray-400 px-3 py-1 bg-gray-800 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            
              <div className="flex justify-end gap-4 mt-8">
                <a href={github} target='_blank' className="text-black hover:text-gray-200">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                  </svg>
                </a>
                <a href={imageUrl === '/coming.svg' ? github : live} target='_blank' className="text-black hover:text-gray-200">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
          </div>
        </div>
       
        
         <div className="lg:absolute hidden lg:block left-[70%] top-9 lg:w-[55%] w-11/12 bg-[#0d1117] p-6 rounded-lg border border-gray-700 shadow-xl">
          
            {featured ? (
              <p className="text-sm text-teal-400 uppercase mb-2">Featured Project</p>
            ): null}
             {InProgress ? (
              <p className="text-sm text-teal-400 uppercase mb-2">In Active Development</p>
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
              <a href={imageUrl === '/coming.svg' ? github : live} target='_blank' className="text-gray-400 hover:text-gray-200">
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



