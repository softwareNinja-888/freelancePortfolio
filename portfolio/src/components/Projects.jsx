import { ProjectDiv } from "./helper/ProjectDiv";
import { SectionHeader } from "./helper/SectionHeader";
import oneHealth from '/projects/oneHealth.avif'

import { useEffect,useState } from "react";

export function Projects(){

    const [repos, setRepos] = useState([]); // Initialize state as an array

    const repositories = [
        { owner: "softwareNinja-888", name: "oneHealth",formatedName:'One Health' ,vercel:'https://one-health-three.vercel.app/',img:oneHealth,description: 'A modern and responsive landing page for a health center, designed to provide essential information at a glance. It features a clean layout, engaging visuals, and smooth scrolling for an intuitive user experience.'},
    ];

    useEffect(() => {
      const fetchRepos = async () => {
        try {
          const promises = repositories.map(async repo => {
            const response = await fetch(`https://api.github.com/repos/${repo.owner}/${repo.name}`);
            if (!response.ok) {
              throw new Error(`Failed to fetch: ${response.statusText}`);
            }
            const data = await response.json();
            return { ...data, vercelLink: `${repo.vercel}`,img: `${repo.img}`, description: repo.description,formatedName: repo.formatedName}; // Add Vercel link
          });
          const data = await Promise.all(promises);
          setRepos(data);
        } catch (error) {
          console.error("Error fetching repositories:", error);
        }
      };
  
      fetchRepos();
    }, []);

    console.log(repos)
    return (
        <>
            <div id='projects' className="flex flex-col lg:px-24 pb-20 gap-[100px] px-5 py-32">
                <SectionHeader num="4" text="Projects"/>
                <div className="flex  flex-col items-center justify-center gap-20">
                    {repos.map(el=>{
                        return  (<ProjectDiv key={el.id}  title={el.formatedName} description={el.description} technologies={["React","React Router", "Tailwind"]}  imageUrl={el.img} github={el.html_url + '/blob/main/README.md'} live={el.vercelLink} featured={true}/>)
                    })}
                </div>
            </div>
        </>
    )
}