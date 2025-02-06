import { ProjectDiv } from "./helper/ProjectDiv";
import { SectionHeader } from "./helper/SectionHeader";

export function Projects(){
    return (
        <>
            <div id='projects' className="flex flex-col lg:px-24 pb-20 gap-[100px] px-5 py-32">
                {/* <div className="flex flex-col lg:flex-row lg:gap-16 w-11/12">
                    <div className="flex items-center gap-5 ">
                        <p className="text-3xl text-secondary font-roboto">{`#2.`}</p>
                        <p className="text-3xl  font-roboto">Projects</p>
                    </div>
                    <hr className="w-12/12 h-2 self-center  my-4 text-secondary  bg-secondary " style={{ transform: 'scaleY(0.5)' }}/>
                </div> */}
                <SectionHeader num="3" text="Projects"/>
                <div className="">
                    <ProjectDiv/>
                </div>
            </div>
        </>
    )
}