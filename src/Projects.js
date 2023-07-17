import { useState } from 'react';
import { ProjectList } from './ProjectList';

export function Projects() {
  const [image, setImage] = useState([
    {
      image: "https://ik.imagekit.io/mim7hvkph/Screenshot__94_.png?updatedAt=1689587937349",
      name: "Movie app",
      details: `It is MERN based app which shows the list of movies with their details like Name, Brief
      summary, Rating, Trailer(INFO) including EDIT & DELETE the particular Movie.`,
      link: "https://cosmic-frangipane-568756.netlify.app/movies"
    },
    {
      image: "https://ik.imagekit.io/mim7hvkph/Screenshot__93_.png?updatedAt=1689587937133",
      name: "Admin Management",
      details: `It is based on records of how many people are there in school.Admin team can manage 
      adding Teacher and Students in the school.It is an app with all the CRUD featuers it self. `,
      link: "https://effortless-dragon-bd0989.netlify.app/"
    },
    {
      image: "https://ik.imagekit.io/mim7hvkph/Screenshot__92_.png?updatedAt=1689587937130",
      name: "Classic-Furn",
      details: `This Project is based on Purchasing Furniture. It is an app with all the CRUD features build
      using ReactJS for Frontend and MongoDB, ExpressJS & NodeJS for Backend (MERN Project).
      In this project I added login/signup Entry Point for customers.`,
      link: "https://app.netlify.com/sites/bejewelled-kleicha-1e552d/overview"
    }
  ]);
  return (<>
    <h1 className='proj-title' id='p'>My Recent Works</h1>
    <div className='proj-tt'>
      {image.map((e) => (
        <ProjectList id={e} proj={e} />
      ))}

    </div>

  </>);
}
