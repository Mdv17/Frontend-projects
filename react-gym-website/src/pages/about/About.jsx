import './about.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat adipisci soluta aliquid eaque, necessitatibus neque, repellat optio voluptatibus praesentium .

      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt='Story Image' />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae alias a, voluptatem inventore et, illum numquam atque delectus consectetur explicabo excepturi magnam pariatur quisquam nam quia dolor. Dolores, saepe quam.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad molestiae dicta nisi doloremque fugit, architecto facilis, natus placeat fuga exercitationem sint vitae minima, quas nobis at vel voluptatem commodi. Libero!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet cum dolorem delectus minima. Vel culpa doloremque nulla aut voluptatibus cumque corporis dolore aperiam, illum unde facere reprehenderit iste optio quidem?
            </p>
          </div>
        </div>
      </section>

      <section className="about__Vision">
        <div className="container about__Vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae alias a, voluptatem inventore et, illum numquam atque delectus consectetur explicabo excepturi magnam pariatur quisquam nam quia dolor. Dolores, saepe quam.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad molestiae dicta nisi doloremque fugit, architecto facilis, natus placeat fuga exercitationem sint vitae minima, quas nobis at vel voluptatem commodi. Libero!
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt='Our Vision Image' />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt='Mission Image' />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae alias a, voluptatem inventore et, illum numquam atque delectus consectetur explicabo excepturi magnam pariatur quisquam nam quia dolor. Dolores, saepe quam.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad molestiae dicta nisi doloremque fugit, architecto facilis, natus placeat fuga exercitationem sint vitae minima, quas nobis at vel voluptatem commodi. Libero!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet cum dolorem delectus minima. Vel culpa doloremque nulla aut voluptatibus cumque corporis dolore aperiam, illum unde facere reprehenderit iste optio quidem?
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About