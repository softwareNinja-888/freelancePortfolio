export function Button({text,width}){
    return(
        <div className={`${width} flex items-center justify-center px-4 py-2  border border-white cursor-pointer rounded-md font-lora`}>
            {text}
        </div>
    )
}