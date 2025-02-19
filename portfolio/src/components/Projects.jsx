import { ProjectDiv } from "./helper/ProjectDiv";
import { SectionHeader } from "./helper/SectionHeader";
import oneHealth from '/projects/oneHealth.avif'
import blog from '/projects/blog.png'
import place from '/project.svg'
import coming from '/coming.svg'


import { useEffect,useState } from "react";

export function Projects(){

    const [repos, setRepos] = useState([]); // Initialize state as an array

    const repositories = [

        { owner: "softwareNinja-888", name: "oneHealth",formatedName:'One Health' ,vercel:'https://one-health-three.vercel.app/',img:oneHealth,description: 'A modern and responsive landing page for a health center, designed to provide essential information at a glance. It features a clean layout, engaging visuals, and smooth scrolling for an intuitive user experience.',main:true,}, 

        { owner: "softwareNinja-888", name: "salt_light_blog",formatedName:'Salt&Light Blog' ,vercel:'https://salt-light-blog.vercel.app/',img:blog,description: 'Salt & Light Blog is a Christian blog platform dedicated to sharing the gospel of Jesus Christ through insightful articles, Bible studies, and faith-based discussions. This platform serves as a resource for believers seeking spiritual growth, encouragement, and biblical wisdom. With a clean and user-friendly interface.',main:false,},

        { owner: "softwareNinja-888", name: "salt_light_blog",formatedName:'Salt&Light Ministries' ,vercel:'https://salt-light-9h3y.vercel.app/',img:coming,description: 'A thoughtfully designed Christian lifestyle platform where faith meets daily living. Salt & Light Blogs creates a welcoming space for readers to discover inspiring content that illuminates the path of faith and adds flavor to everyday life. From biblical reflections and devotionals to practical Christian living tips, recipes, and lifestyle content, this digital haven serves as a place where faith and life`s daily moments beautifully intersect.',main:true,},

        { owner: "softwareNinja-888", name: "Enterprise-Resource-Planning",formatedName:'Enterprise Resource Planning' ,vercel:'https://one-health-three.vercel.app/',img:coming,description: 'A thoughtfully designed Enterprise Resource Planning (ERP) platform where efficiency meets innovation. Our software streamlines operations, enhances productivity, and integrates seamlessly to support businesses at every stage. From finance and inventory to HR and analytics, this all-in-one solution empowers organizations to thrive in a dynamic world.',main:false,}
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
            return { ...data, vercelLink: `${repo.vercel}`,img: `${repo.img}`, description: repo.description,formatedName: repo.formatedName,main:repo.main}; // Add Vercel link
          });
          const data = await Promise.all(promises);
          console.log(`data:${data}`)
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
                <div className="flex flex-col items-start justify-center gap-20">
                    {repos.map(el=>{
                        return  (<ProjectDiv key={el.id}  title={el.formatedName} description={el.description} technologies={["React","React Router", "Tailwind"]}  imageUrl={el.img} github={el.html_url + '/blob/main/README.md'} live={el.vercelLink} featured={el.main}/>)
                    })}
                </div>
            </div>
        </>
    )
}