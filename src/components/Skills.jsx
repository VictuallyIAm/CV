import React, { useState } from 'react'
import { skills } from '../data/skills'
import myCV from '../data/BeketovVV.pdf'
import Card from './Card'

const Skills = () => {
  const [cardIndex, setCardIndex] = useState([0])

  return (
    <>
      <div className="bg-back-gray pt-16">
        <h1 className="text-3xl font-bold">
          SO, LET'S FIND OUT WHAT MY SKILLS ARE...
        </h1>
      </div>
      <div className="bg-back-gray flex justify-start md:justify-center lg:justify-center flex-wrap sm:flex-wrap mb-4 p-4 py-6 ">
        {skills.map((skill) => {
          return (
            <Card
              cardIndex={cardIndex}
              setCardIndex={setCardIndex}
              index={skills.indexOf(skill)}
            >
              <img src={skill.imgUrl} className="w-full h-40" alt="logo" />
              <h1 className="text-3xl font-bold px-2 my-2">{skill.title}</h1>
              <h2 className="font-thin px-2 my-2">{skill.slug}</h2>
              <p className="px-2 my-2">{skill.desc}</p>
              <a href={myCV} target="_blank" rel="noreferrer">
                <button className="px-12 py-3 m-4 bg-back-black text-white rounded-full">
                  Learn more
                </button>
              </a>
            </Card>
          )
        })}
      </div>
    </>
  )
}

export default Skills
