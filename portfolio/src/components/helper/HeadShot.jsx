import headShot from '/headshot.avif';
import vector from '/wai/vector1.jpg'

export function HeadShot({ className = '' }) {
  return (
    // The container has relative positioning so that the absolutely positioned children (the box and image) work together.
    <div className={`mt-[30px] relative cursor-pointer ${className} px-5 `}>
      {/* The decorative box mimics the original border styling */}
      <div className="relative border-4 border-secondary  h-[292px] lg:w-[29vw] w-80vw "></div>
      {/* The headshot container */}
      <div className="relative -top-75">
        <a
          href="http://github.com/softwareNinja-888"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={vector}
            alt="Head shot"
            className="z-500 w-[80vw] h-[300px] absolute transition-transform duration-500 ease-in-out transform cursor-pointer hover:-translate-x-5 hover:-translate-y-5 active:-translate-x-5 active:-translate-y-5"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  );
}


// FOR FADE IN AND LAZY LOAD

// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

// const MyImage = () => (
//   <LazyLoadImage
//     src="your-image.jpg"
//     alt="description"
//     effect="blur" // Options: "blur", "opacity", "black-and-white"
//   />
// );

// export default MyImage;
