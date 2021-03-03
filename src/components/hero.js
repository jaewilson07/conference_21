import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const topics_list = [
  "Value",
  "Pipeline Optimization",
  "Data Science",
  "Automation",
  "Custom App",
]

const MyButton = styled.button`
  text-transform: uppercase;
  transition: background 0.3s ease-in-out, border-color 0.3s ease-in-out,
    color 0.3s ease-in-out;
`

export const Hero = () => (
  <div class="hero">
    <div class="container">
      <div class="hero__content text-center mx-auto" data-animate-in="up">
        <h1 class="hxl">Do more with Domo today.</h1>
        <p>
          Join industry experts and leaders as we deep-dive into{" "}
          {topics_list.map((topic, index) => {
            console.log(topics_list.length, index)
            return (
              <Link to="#" key={topic}>
                {index + 1 === topics_list.length
                  ? ` and ${topic}`
                  : `${topic}, `}
              </Link>
            )
          })}{" "}
          development techniques your team can use all year long.
        </p>
        <MyButton>
          <Link to="#">View the schedule</Link>
        </MyButton>
      </div>
    </div>
  </div>
)
