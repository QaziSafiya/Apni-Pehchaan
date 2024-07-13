import React from 'react'
import './Work.scss'
import project2 from './assets/icons/project2.png'
import { FaGithub } from "react-icons/fa";
import Trip from "./assets/icons/Trip.png"
import movie from "./assets/icons/movie.png";
import travel from "./assets/icons/travel.png"
import youtube from "./assets/icons/youtbe.png";
import dailytask from "./assets/icons/dailytask.png"
const Work = () => {
  return (
    <div className='work-container'>
      <h1 className="project-heading">Projects</h1>
      <div className="project-grid">
        <div className="my-project">
        <div className="work-image">
        <img src={project2} className='project-image' alt="" />
        </div>
        
       
        <div className="description">
        <p className='description-para'>Immerse yourself in the enchanting world of our storybook page, meticulously crafted using React and SCSS. This captivating tale unfolds seamlessly across devices, as our page dances gracefully from desktop to mobile with effortless responsiveness. With every detail meticulously designed, this static page invites you to lose yourself in its timeless narrative, where imagination knows no bounds</p>
        <div className="buttons">
        <button className="btn"><a className='link' href="https://660552b1b4129219e8e7006b--precious-kringle-27f0b8.netlify.app/">Live</a></button>
        <button className="btn"><a  className='link' href="https://github.com/QaziSafiya/Story-of-Heer"><FaGithub className='git-icon' />Github</a></button>
        </div>
        </div>
        </div>
        <div className="my-project">
        <div className="work-image"><img src={Trip} className='project-image' alt="" /></div>
        
        <div className="description">
       <p>Step into the realm of hospitality with our exquisite hotel management website template, meticulously crafted using the powerful combination of React and SCSS. This static masterpiece is a testament to elegance and functionality, offering a seamless browsing experience for every visitor. With its captivating design and intuitive layout, our template beckons guests to explore the world of hospitality with ease. From desktop to mobile, every aspect has been meticulously tailored to ensure effortless navigation and stunning visual appeal. Welcome to a new standard in hotel management website design – where sophistication meets innovation, and every click opens the door to an unforgettable experience.</p>
        <div className="buttons">
        <button className="btn"><a  className="link" href="https://65f16bb532368ab30667c055--graceful-shortbread-443d32.netlify.app/">Live</a></button>
        <button className="btn"><a  className='link' href="https://github.com/QaziSafiya/Hotelbooking"><FaGithub className='git-icon' />Github</a></button>
        </div>
        </div>


       </div>
        <div className="my-project">
        <div className="work-image"><img src={youtube} className='project-image' alt="" /></div>
        <div className="description">
        <p>Dive into the world of advanced application development with our YouTube clone, a comprehensive showcase of React's full potential. This ambitious project encompasses a plethora of features, from seamless user authentication to flawless video streaming and beyond. As you navigate through the intricacies of our clone, you'll gain invaluable insights into the inner workings of modern web development.

Discover the magic of user authentication, where secure login systems ensure the protection of personal data and foster trust within the community. Delve into the realm of video streaming, where smooth playback and high-quality resolution create an immersive viewing experience for users worldwide.

But our YouTube clone is more than just a replication of a popular platform – it's a learning journey. Explore React's vast toolkit as you tackle challenges such as dynamic content rendering, state management, and responsive design. Gain hands-on experience with essential concepts like component-based architecture, stateful and stateless components, routing, and m</p>
        <div className="buttons">
        <button className="btn"><a  className="link" href="https://65020f21474b2c3d3066a412--capable-salamander-f09ae1.netlify.app/">Live</a></button>
        <button className="btn">  <a  className='link' href="https://github.com/QaziSafiya/Youtube-clone-"><FaGithub className='git-icon' />Github</a></button>
        </div>
        </div>

       </div>

       <div className="my-project">
        <div className="work-image"><img src={dailytask} className='project-image' alt="" /></div>
        <div className="description">
       <p>Introducing our daily routine task list – your ultimate companion in staying organized and efficient. With this intuitive tool, you can effortlessly add and manage your tasks, ensuring nothing slips through the cracks.

Simply jot down your tasks as they come to mind, whether it's a crucial deadline, an important meeting, or a simple errand. With just a few clicks, you can add, edit, or delete tasks, tailoring your list to perfectly suit your needs.

But the real magic happens when you start checking off those tasks. With each completed item, you'll feel a sense of accomplishment like never before. And when it's time to clear your slate, our delete feature makes tidying up a breeze.

Say goodbye to forgotten appointments and missed deadlines – our daily routine task list is here to streamline your life and keep you on track. Start your journey towards productivity today.</p>
        <div className="buttons">
        <button className="btn"><a  className="link" href="https://65008d246a35d40868b2410d--dreamy-cajeta-dddab8.netlify.app/">Live</a></button>
        <button className="btn">  <a  className='link' href="https://github.com/QaziSafiya/Dailyroutine-Task"><FaGithub className='git-icon' />Github</a></button>
        </div>
        </div>

       </div>


       <div className="my-project">
        <div className="work-image"><img src={movie} className='project-image' alt="" /></div>
        <div className="description">
        <p>Step into the captivating world of cinema with our static web page showcasing the latest blockbuster movies, meticulously crafted using React and SCSS. Immerse yourself in a visually stunning experience as you explore a curated selection of films, each accompanied by enticing imagery and informative details.</p>
        <div className="buttons">
        <button className="btn"><a  className="link" href="https://65f5dc6f0252f1de623de793--rad-sopapillas-b9b431.netlify.app/">Live</a></button>
        <button className="btn">  <a  className='link' href="https://github.com/QaziSafiya/Moviepageusingscss"><FaGithub className='git-icon' />Github</a></button>
        </div>
        </div>

       </div>

       
        <div className="my-project"> <div className="work-image"><img src={travel} className='project-image' alt="" /></div>
        <div className="description">
    <p>Embark on an unforgettable journey with our dynamic tours and travel website, meticulously crafted using the cutting-edge technologies of React and SCSS. Prepare to be swept away by a seamless blend of stunning visuals, intuitive navigation, and comprehensive information, all designed to inspire your next adventure.</p>
        <div className="buttons">
        <button className="btn"><a className='link' href="https://65fdc7ab622a3541413fca50--dashing-semolina-f78111.netlify.app/">Live</a></button>
        <button className="btn"><a  className='link' href="https://github.com/QaziSafiya/Gridresponsiveproject"><FaGithub className='git-icon' />Github</a></button>
        </div>
        </div>
       </div>
      
      </div>
    </div>
  )
}

export default Work
