import { Preview } from "./helper/Preview";
import { Introduction } from "./helper/Introduction";
export function Hero() {

  return (
    <div className="flex flex-col lg:flex-row text-black gap-20 lg:gap-10 lg:px-10 px-4 max-w-screen items-start justify-center bg-primary py-20">
      <Introduction/>

      <div className="w-full lg:max-w-6/12 justify-items-center">
        <Preview/>
      </div>
    </div>
  )
}