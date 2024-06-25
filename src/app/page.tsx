import Image from "next/image";
import ProjectCard from "./components/ProjectCard"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-20">
      <div className="flex flex-row justify-between gap-20">
        <div>        
          <h1>Title</h1>
          <p>Description</p>
        </div>
        <span>Picture</span>
      </div>
      <div className="flex flex-wrap max-w-6xl gap-20">
        <ProjectCard  title="Inventory Application" 
                      link="https://www.peterhellmuth.com/inventory-application" 
                      imageSrc={"/inventory-application.png"}/>
        <ProjectCard  title="Inventory Application" 
                      link="https://www.peterhellmuth.com/inventory-application" 
                      imageSrc={"/inventory-application.png"}/>
        <ProjectCard  title="Inventory Application" 
                      link="https://www.peterhellmuth.com/inventory-application" 
                      imageSrc={"/inventory-application.png"}/>
        <ProjectCard  title="Inventory Application" 
                      link="https://www.peterhellmuth.com/inventory-application" 
                      imageSrc={"/inventory-application.png"}/>
      </div>
    </main>
  );
}
