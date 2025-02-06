export function SectionHeader({num="",text=""}){
    return (
        <>
            <div className="flex items-center gap-5 ">
                <p className="text-3xl text-secondary font-roboto">{`#${num}.`}</p>
                <p className="text-3xl  font-roboto">{text}</p>
                <hr className="w-10/12 h-2 self-center  my-4 text-secondary  bg-secondary " style={{ transform: 'scaleY(0.5)' }}/>

            </div>
        </>
    )
}