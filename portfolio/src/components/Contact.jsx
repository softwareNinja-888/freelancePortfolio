// import { ContactDiv } from "./helper/ContactDiv";

import { SectionHeader } from "./helper/SectionHeader";

export function Contact(){
    return (
        <>
            <div id='contact' className="flex flex-col lg:px-24 pb-20 gap-[100px] px-5 py-32">
               <SectionHeader num="2" text="Contact Me"/>
                <div className="">
                    {/* <ContactDiv/> */}
                </div>
            </div>
        </>
    )
}