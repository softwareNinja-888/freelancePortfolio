import place from '/place.png'
import oneHealth from '/projects/oneHealth.avif'

export function Preview() {
    return(
      // Changed from w-screen to w-full to respect parent container
      <div className="flex justify-center items-center w-full mb-10 lg:mb-32 ">
        {/* Added md:w-full to maximize image width on desktop */}
        <img
          src={oneHealth}
          alt="placeholder image"
          className="flex justify-center items-center w-11/12 md:w-full h-62"
        />
      </div>
    )
  }