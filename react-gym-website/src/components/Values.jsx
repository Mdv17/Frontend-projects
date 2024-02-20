import Card from '../UI/Card';
import { values } from '../data';
import Image from '../images/values.jpg';
import SectionHead from './SectionHead';
import { GiCutDiamond } from "react-icons/gi";



const Values = () => {
  return (
    <section className="values">
        <div className="container values__container">
            <div className="values__left">
                <div className="values__image">
                    <img src={Image} alt='Values Image' />
                </div>
            </div>
            <div className="values__right">
                <SectionHead icon={<GiCutDiamond/>} title="Values" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minus veritatis voluptatem dolorem aliquid ea sunt adipisci aspernatur earum voluptate, beatae itaque eaque tempore consectetur, rerum ipsam id, ipsa aut.
                </p>
                <div className="values__wrapper">
                    {
                        values.map(({id, icon, title, desc}) => {
                            return (
                            <Card key={id} className="values_value">
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values