import React from "react"
import styled from "styled-components"

import RateReviewIcon from "@material-ui/icons/RateReview"
import GroupAddIcon from "@material-ui/icons/GroupAdd"
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent"
import PoolIcon from "@material-ui/icons/Pool"

const speaker = {
  title: "Industry expertise meets real-world insight",
  speakers: [
    { name: "jae", title: "director" },
    { name: "cat", title: "awesome" },
    { name: "cat", title: "awesome" },
    { name: "cat", title: "awesome" },
  ],
}

const whatToExpect = {
  title: "What To Expect",
  sections: [
    {
      title: "Expert Showcases",
      icon: RateReviewIcon,
      bullet:
        "Hear from industry leaders on the latest research and trends shaping how we build the future of software.",
    },
    {
      title: "Roundtables",
      icon: GroupAddIcon,
      bullet: "Share tips and challenges with other teams from your screen.",
    },
    {
      title: "Industry Spotlights",
      icon: WbIncandescentIcon,
      bullet:
        "Whether it’s adopting DevSecOps or digital transformation, learn from the organizations who’ve made it happen.",
    },
    {
      title: "Enterprise Deep Dive",
      icon: PoolIcon,
      bullet:
        "Discover new GitHub techniques and features to make your software even stronger.",
    },
  ],
}

const SectionContainer = styled.div`
  font-size: 22px;
  padding: 1rem;
`
const SectionTitle = styled.h2``

const CardContainer = styled.div`
  display: flex;

  margin-left: -8px;
  margin-right: -8px;

  /* Put a card in the next row when previous cards take all width */
  display: grid;
  grid-gap: 1rem;
`
const SpeakerContainer = styled(CardContainer)`
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`

const WhatToExpectContainer = styled(CardContainer)`
  grid-template-columns: 1fr 1fr;
`

const Card = styled.div`
  flex-basis: 25%;

  padding: 2rem;

  background-color: dodgerblue;
  color: white;
`
const CardCover = styled.div`
  height: 150px;
  width: 100%;
`
const CardContent = styled.div`
  flex: 1;
`

const CardTitle = styled.h3`
  margin: 0;
`
const CardText = styled.p`
  margin: 0;
`

const Section = ({ title, children }) => (
  <SectionContainer>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </SectionContainer>
)

const Speaker = ({ name = "test me", title = "director", img = null }) => (
  <Card>
    <CardCover>
      <img src={img} alt={name} />
    </CardCover>
    <CardContent>
      <CardTitle>{name}</CardTitle>
      <CardText>{title}</CardText>
    </CardContent>
  </Card>
)

export const SpeakerList = () => (
  <Section title={speaker.title}>
    <SpeakerContainer>
      {speaker.speakers.map(({ name, title, img, index }) => (
        <Speaker name={name} title={title} img={img} key={index} />
      ))}
    </SpeakerContainer>
  </Section>
)

const Expect = ({ title, bullet, icon }) => (
  <Card>
    <CardContent>
      <span>
        {icon}

        <CardTitle>{title}</CardTitle>
      </span>
      <CardText>{bullet}</CardText>
    </CardContent>
  </Card>
)

export const WhatToExpectList = () => (
  <Section title={whatToExpect.title}>
    <WhatToExpectContainer>
      {whatToExpect.sections.map(({ title, bullet }) => (
        <Expect title={title} bullet={bullet} />
      ))}
    </WhatToExpectContainer>
  </Section>
)
