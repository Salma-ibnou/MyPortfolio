import { Butt } from '../Button/Butt'
import './Hero.css'
const Hero = () => {
  return (
    <>
      <section className="hero-container">
        <div className="hero-content">
          <h2>Building Digital Experience that Inspire</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, sit consequuntur ut quo harum, reiciendis temporibus iure pariatur commodi officia modi culpa cumque repellendus odit nostrum dolore similique. Tempora, quaerat!</p>
          <Butt/>
        </div>
      <div className="hero-img">
        <div>
            <div className="tech-icon">
              <img src="../public/mongodb.png" alt="" />
            </div>
            
            <div className="myprofile">
              <img  src="../public/myprofile.png" alt="" />
            </div>
        </div>

         <div>
           <div className="tech-icon">
            <img src="../public/express.png" alt="" />
           </div>
           <div className="tech-icon">
            <img src="../public/react.png" alt="" />
           </div>
           <div className="tech-icon">
            <img src="../public/nodejs.png" alt="" />
           </div>
         </div>
        
      </div>
    </section>
  </>
  )
}

export default Hero

