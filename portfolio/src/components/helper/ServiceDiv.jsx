
function serviceInfo(num,title,text){
    return (
        <>
            <div className="flex flex-col gap-6">
                <div className="flex gap-20">
                    <div className="font-mono">{`#${num}.`}</div>
                    <div className="flex flex-col gap-4">
                        <div className="font-poppins">{title}</div>
                        <div className="font-inter">{text}</div>
                    </div>
                </div>
                <hr />
            </div>
        </>
    )
}
export function ServiceDiv({img,services,reverse=false}){
    return (
        <>
        <div className={`flex ${reverse ? `flex-row-reverse` : `flex-row` } gap-10`}>
                <div className="min-w-[40vw]">
                    <img src={img} alt="team photo"  className="lg:w-[40vw] w-[80vw]  h-[350px]  transition-transform duration-500 ease-in-out transform cursor-pointer hover:-translate-x-5 hover:-translate-y-5 active:-translate-x-5 active:-translate-y-5" />
                </div>
                <div className="lg:flex lg:flex-col gap-10 justify-center hidden">
                    {services.map(el=>{
                        return serviceInfo(el.id,el.name,el.description)
                    })}            

                </div>
            </div>
        </>
    )
}