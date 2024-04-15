import './about.styles.scss'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-1">
        <div className='about-1-paragraph'>
          <h1>My Journey</h1>
          <h3>Motivation</h3>
          <p>On a typical day in 2021, I stumbled upon Inoue Tomohisa's book, which painted a stark future of the economy potentially collapsing by 2030. The growing influence of AI and technology highlighted my career vulnerabilities—my skills were becoming obsolete. This realization was daunting and enlightening, pushing me toward a field that promised resilience: coding. Despite my initial lack of enthusiasm for coding, each problem solved and bug fixed brought a profound sense of accomplishment, steering me toward a path as a full-stack developer.</p>
        </div>
        <img className="about-1-image" src="https://i.ibb.co/LPCxcVr/motivation.webp" alt="images"/>
      </div>
      <div className="about-2">
        <div className='about-2-paragraph'>
          <h3>Action</h3>
          <p>Balancing a full-time job, I dedicated my weekends and evenings to mastering coding. I tackled various coding challenges, absorbed countless tutorials, and embarked on side projects that stretched my abilities. My first project, "Artsync," leveraged React's robust framework to build an online art gallery. Concurrently, I utilized only Vanilla JavaScript to create "Sandwichlogy," a simple yet effective recipe app. These projects refined my coding skills and enhanced my debugging and problem-solving techniques. 
</p>

     
        </div>
        <img className="about-2-image" src="https://i.ibb.co/Q96jk0b/action.webp" alt="images"/>
      </div>
      <div className="about-3">
        <div className='about-3-paragraph'>
          <h3>Pursuit</h3>
            <p>Armed with hands-on experience and a solid foundation in both front-end and back-end technologies, I am confident in delivering comprehensive and satisfying user experiences. I view every new project as a learning opportunity, always optimizing for best practices. I am eager to bring this proactive and continuous learning approach to your team, contributing not just technically but also with fresh, innovative ideas. Let's connect and discuss how I can contribute to your projects.</p>
        </div>
      </div>
    </div>
  )
}

export default About 