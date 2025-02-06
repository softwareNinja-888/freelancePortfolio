import oneHealth from '/projects/oneHealth.avif'

export function Preview() {
    return(
      // Changed from w-screen to w-full to respect parent container
      <div className="flex justify-center items-center w-full mb-10 lg:mb-32 ">
        {/* Added md:w-full to maximize image width on desktop */}
        <img
          src={oneHealth}
          alt="placeholder image"
          className="flex justify-center items-center w-12/12 lg:w-12/12 h-72"
        />
      </div>
    )
  }