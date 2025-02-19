import heroImage from '/hero5.webp'

export function Preview() {
    return(
      // Changed from w-screen to w-full to respect parent container
      <div className="flex justify-center items-center w-full mb-10 lg:mb-32 ">
        {/* Added md:w-full to maximize image width on desktop */}
        <img
          src={heroImage}
          alt="placeholder image"
          className="flex justify-center items-center w-12/12 lg:w-[1000px] h-92"
        />
      </div>
    )
  }