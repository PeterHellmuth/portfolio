import Image from "next/image"

interface ProjectCardProps{
    title: string
    imageSrc: string
    link: string
}

export default function ProjectCard({title, imageSrc, link}:ProjectCardProps){
    return (
        <div className="flex flex-col gap-1">
            <span><Image src={imageSrc} width={500} height={500} alt="Project screenshot"></Image></span>
            <a href={link}>{title}</a>
        </div>

    )
}