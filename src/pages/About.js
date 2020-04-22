import React, { Fragment } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Grid, Typography, Container, IconButton } from "@material-ui/core"
import {
  BusinessCenterTwoTone,
  SchoolTwoTone,
  BookTwoTone,
  MusicNoteTwoTone,
  QueueMusicTwoTone,
  SentimentVerySatisfiedTwoTone,
  HistoryTwoTone,
  SportsEsportsTwoTone,
  AttachmentTwoTone,
} from "@material-ui/icons"

const About = () => {
  const sections = [
    {
      id: 1,
      icon: <BusinessCenterTwoTone fontSize="large" />,
      text:
        "I'm currently a Software Engineer in the Galli Group at Pritzker School of Molecular Engineering, University of Chicago. I'm trying to solve the challenge of reproducing scientific papers.",
    },
    {
      id: 2,
      icon: <SchoolTwoTone fontSize="large" />,
      text:
        "I graduted with my Masters in Computer Science from University of Chicago in December 2019. It was a lot of work, but rewarding too. Before this I graduated with my Bachelors in Computer Science from Shiv Nadar University, India in May 2018. ",
    },
    {
      id: 3,
      icon: <BookTwoTone fontSize="large" />,
      text:
        "I'm currently reading Sapiens by Yuval Noah Harari. It's really nice to learn about how we became what we are.",
    },
    {
      id: 4,
      icon: <MusicNoteTwoTone fontSize="large" />,
      text: (
        <Fragment>
          I absolutely enjoy listening to music. My favorite musician in John
          Mayer. I also listen to Coldplay, Her and various Lo-fi artists. Here
          is my auto-generated on-repeat playlist on Spotify.{" "}
          <IconButton href="https://open.spotify.com/playlist/37i9dQZF1Ept6PBaMJhQzk">
            <QueueMusicTwoTone />
          </IconButton>
        </Fragment>
      ),
    },
    {
      id: 5,
      icon: <SentimentVerySatisfiedTwoTone fontSize="large" />,
      text:
        "I'm also a fan of Stand up comedy, I guess most people are though. I really like Bo Burnham, Ray Romano, Seth Meyers, John Mulaney, Hasan Minhaj, Abhishek Upmanyu, Kanan Gill and Biswa Kalyan Rath. I also really like although not standup, but yet comedians such as Bill Hader, Kristen Wiig, Kate McKinnon, Amy Poehler and Tina Fey.",
    },
    {
      id: 6,
      icon: <SportsEsportsTwoTone fontSize="large" />,
      text:
        "I enjoy playing video games a lot. My recent favorite is A Short Hike. It's a really fun game. I also like The Hollow Knight, GTA series, Need for Speed Most Wanted (2005). I play LOL with my friends sometimes, I'm not good at it xD.",
    },
    {
      id: 7,
      icon: <HistoryTwoTone fontSize="large" />,
      text:
        "I grew up in the capital city of India, New Delhi. I've lived in two other cities, first Bangalore for a while and now Chicago. I can somewhat cook (I learnt before the global pandemic). I like to code.",
    },
    {
      id: 8,
      icon: <AttachmentTwoTone fontSize="large" />,
      text: (
        <Fragment>
          Also, here is almost frequently updated resume.{" "}
          <IconButton href="">
            <AttachmentTwoTone />
          </IconButton>
        </Fragment>
      ),
    },
  ]

  return (
    <Layout>
      <SEO title="About" />
      <Container>
        <Typography
          variant="h1"
          style={{ fontWeight: "bold", textAlign: "center" }}
          gutterBottom
        >
          About{" "}
        </Typography>

        {sections.map(section => (
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
            style={{ marginBottom: "16px" }}
            key={section.id}
          >
            <Grid item xs={12} md={1} align="center">
              {section.icon}
            </Grid>
            <Grid item xs={12} md={11}>
              <Typography variant="body1" className="justifyText">
                {section.text}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Container>
    </Layout>
  )
}

export default About
