export function Button({text,width,classNew=''}){
    return(
        <div className={`${width} ${classNew} text-xl text-secondary flex items-center justify-center px-4 py-2 border-2 border-secondary cursor-pointer  font-extrabold`}>
            {text}
        </div>
    )
}