import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'



import './contact.css'

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt corporis maxime perspiciatis quos cum, autem in ab et ex
      </Header>
      <section className="conatct">
        <div className="container contact__conatiner">
          <div className="contact__wrapper">
            <a href='mailto:methembedvundla17@gmail.com' target='_blank' rel='noreferrer noopener'><MdEmail/></a>
            <a href='www.facebook.com' target='_blank' rel='noreferrer noopener'><BsMessenger/></a>
            <a href='https://wa.me/+27610226642' target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact