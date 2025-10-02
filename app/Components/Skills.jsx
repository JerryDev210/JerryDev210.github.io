import { skillsList } from "@/assets/skills"
import Image from "next/image"

const Skills = () => {
  return (
    <div id='skills' className="h-screen flex mx-auto justify-center"
    >
        <div className={`mb-12 flex w-full flex-wrap items-center justify-center gap-10 px-5 
        my-auto sm:mb-24 sm:w-4/5 sm:px-0 lg:gap-16 xl:w-3/5 `}>
            {skillsList.map(({icon,name},index)=>(
                <Image key={index} src={icon} alt={name}
                className="h-10 w-max md:h-12 lg:h-16"/>
            ))}
        </div>
    </div>
  )
}

export default Skills
