import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import {trainers} from '../../data'
import { FaLinkedin } from "react-icons/fa" 
import { FaFacebookF } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import {BsInstagram } from "react-icons/bs"


import './trainers.css'
import Trainer from '../../components/Trainer'

const Trainers = () => {
  return (
    <>
      <Header title="Our Trainers" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime tempora beatae explicabo sunt fuga culpa harum, ipsa itaque facere unde pariatur, dolor porro? Quod voluptatum nisi doloremque illum iste nulla!
      </Header>
      <section className='trainers'>
        <div className="container trainers__container">
          {
            trainers.map(({id, image, name, job, socials}) => {
              return (
                <Trainer key={id} image={image} name={name} job={job} socials={
                  [
                    {icon: <BsInstagram />, link: socials[0]},
                    {icon: <AiOutlineTwitter />, link: socials[1]},
                    {icon: <FaFacebookF />, link: socials[2]},
                    {icon: <FaLinkedin />, link: socials[3]}
                  ]
                }>
                </Trainer>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Trainers