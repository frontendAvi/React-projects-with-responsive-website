import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play__icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'  id="about us">
        <div className="about-left">
            <img src={about_img} className='about-img' alt="" />
            <img src={play__icon} className='play-icon'  alt=""  onClick={()=>{setPlayState(true)}}/>
        </div>

        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ratione, molestiae facere, natus odio hic quisquam laborum sed sit reiciendis vel?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet maxime quidem eligendi, ipsam tenetur, cupiditate explicabo nam veritatis facere ipsum voluptatem, facilis dicta non reprehenderit voluptatum earum quaerat minima. Reiciendis consectetur voluptates magnam, delectus laborum voluptatum minima dolores reprehenderit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam reiciendis laborum autem expedita atque! Beatae odit, ipsa necessitatibus nostrum nobis cum a laborum repudiandae error cupiditate, doloribus, tempora incidunt consequatur!</p>
        </div>
    </div>
  )
}

export default About