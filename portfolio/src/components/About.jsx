import { HeadShot } from './helper/HeadShot';
import { SectionHeader } from './helper/SectionHeader';
export function About() {

    return (
      
      <div id='about' className="flex flex-col lg:flex-row lg:px-24 pb-20 gap-[100px] px-5 py-32">

        <HeadShot className="order-2 z-auto" />
        <div className="flex flex-col w-full lg:w-1/2 order-1">
          <div className="flex items-center gap-5 ">
            <p className="text-3xl text-secondary font-roboto">{`#1.`}</p>
            <p className="text-3xl  font-roboto">About Me</p>
          </div>
          <hr
            className="w-12/12 h-2 self-center  my-4 text-secondary  bg-secondary "
            style={{ transform: 'scaleY(0.5)' }}
          />
          <div className="flex flex-col mt-4 font-mont gap-5">
            <div className="text-md font-space">
              Hello! I'm Bayanda, a Passionate Front-End Developer.
            </div>
            <div className="flex flex-col text-md font-mont ">
              <span className="mb-6">
              I specialize in building responsive, visually appealing websites
              with smooth, interactive user interfaces. My focus is on creating
              a seamless user experience through clean, efficient code and
              custom animations that bring websites to life.
              </span>
              <span>
                Whether you're looking to launch a new site, enhance an existing 
                one, or need specific front-end features, I'm here to help make 
                your vision a reality. Let's make your online presence shine!
             </span>
            </div>
          </div>
        </div>
      </div>
    );
}
