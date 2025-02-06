import { SectionHeader } from "./helper/SectionHeader";
import { ServiceDiv } from "./helper/ServiceDiv";

import team from '/team.avif'
import server from '/server.avif'

export function Services(){
    const services = [{
        id: 1,
        name: "Landing Pages",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium veniam inventore blanditiis,'
    },{
        id: 2,
        name: "Web Applications",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium veniam inventore blanditiis,'
    },{
        id: 3,
        name: "Hosting",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium veniam inventore blanditiis,'
    },{
        id: 4,
        name: "Email Signatures",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium veniam inventore blanditiis,'
    }]

    return (
        <>
            <div className="flex flex-col lg:px-24 pb-20 gap-[100px] px-5 py-32">
                <SectionHeader num="3" text="Services"/>
                <div className="grid grid-cols-1 gap-20">
                    <ServiceDiv img={team} services={services.filter(el=> el.id === 1 || el.id === 2)}/>
                    <ServiceDiv reverse={true} img={server} services={services.filter(el=> el.id === 3 || el.id === 4)} />
                </div>
            </div>
        </>
    )
}