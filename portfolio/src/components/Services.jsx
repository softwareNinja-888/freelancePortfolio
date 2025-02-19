import { SectionHeader } from "./helper/SectionHeader";
import { ServiceDiv } from "./helper/ServiceDiv";

import server from '/server.avif'
import design from '/hero4.webp'

export function Services(){
    const services = [{
        id: 1,
        name: "Custom Landing Page Design",
        description: 'A visually stunning, high-converting landing page tailored to your brand. Designed for engagement, responsiveness, and results.'
    },{
        id: 2,
        name: "Speed & Performance Optimization",
        description: 'Faster load times mean better user experience and higher rankings. I optimize for speed, ensuring smooth performance across all devices.'
    },{
        id: 3,
        name: "Responsive & Mobile-First Design",
        description: 'Your landing page will look and perform flawlessly on all screen sizes, ensuring a seamless experience for every visitor.'
    },{
        id: 4,
        name: "SEO-Optimized Landing Pages",
        description: 'Built with SEO best practices to help your business rank higher and attract more organic traffic effortlessly.'
    }]

    return (
        <>
            <div id="services" className="flex flex-col lg:px-24 pb-20 gap-[100px] px-5 py-32">
                <SectionHeader num="2" text="Services"/>
                <div className="lg:grid lg:grid-cols-1 lg:gap-20 flex flex-col gap-10 ">
                    <ServiceDiv img={design} services={services.filter(el=> el.id === 1 || el.id === 2)}/>
                    <ServiceDiv reverse={true} img={server} services={services.filter(el=> el.id === 3 || el.id === 4)} />
                </div>
            </div>
        </>
    )
}