import { SectionHeader } from "./helper/SectionHeader";
import { ServiceDiv } from "./helper/ServiceDiv";

import server from '/server.avif'
import design from '/design3.jpeg'

export function Services(){
    const services = [{
        id: 1,
        name: "Responsive Design",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium veniam inventore blanditiis,'
    },{
        id: 2,
        name: "UI/UX Design",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium veniam inventore blanditiis,'
    },{
        id: 3,
        name: "Stuning Landing Pages",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium veniam inventore blanditiis,'
    },{
        id: 4,
        name: "Hosting",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium veniam inventore blanditiis,'
    }]

    return (
        <>
            <div id="services" className="flex flex-col lg:px-24 pb-20 gap-[100px] px-5 py-32">
                <SectionHeader num="2" text="Services"/>
                <div className="grid grid-cols-1 gap-20">
                    <ServiceDiv img={design} services={services.filter(el=> el.id === 1 || el.id === 2)}/>
                    <ServiceDiv reverse={true} img={server} services={services.filter(el=> el.id === 3 || el.id === 4)} />
                </div>
            </div>
        </>
    )
}