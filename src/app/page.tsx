import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";

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
      <h1>My Projects</h1>
      <div className="flex flex-wrap max-w-6xl gap-20">
        <ProjectCard
          title="Inventory Application"
          imageSrc="/inventory-application.png"
          link="https://www.peterhellmuth.com/inventory-application"
          preview="A web application for managing inventory."
          description="Including features such as item tracking, location management, and more. Uses MongoDB for the database, Express for the backend, and a React application for the front end."
        />
      </div>
      <ContactForm />
    </main>
  );
}
