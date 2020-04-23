import React from "react"

import { GitHub, Code } from "@material-ui/icons"

const ProjectList = [
  {
    id: 2,
    title: "Aerial Cactus Identification",
    icon: <Code />,
    text:
      "In this project, I tried to identify cacti in the aerial images taken by the research team of VIGIA project in Mexico. I was able to achieve an accuracy of 99% using a Convolutional Neural Network written in PyTorch. I used dropouts and early stopping to reduce overfitting. The kaggle link will lead you to the kernel",
    link: "https://www.kaggle.com/antimony18/pytorch-cnn-model",
    tag: "ML",
  },
  {
    id: 3,
    title: "Predicting NASDAQ",
    icon: <GitHub />,
    text:
      "I used RNNs to summarize text and used that to predict +ve/-ve movements of the index, I gathered news data from sources online; cleaned and processed it using NLTK and used PyTorch for deep learning. Here is a blog describing the project.",
    link: "https://github.com/anti-mony/NASDAQ-Movement-Prediction",
    tag: "ML",
    blog: {
      link: "",
    },
  },
  {
    id: 4,
    title: "Air Quality Analysis",
    icon: <GitHub />,
    text:
      "This project was done as coursework during my undergrad to explore various visualizations and dip my toes into data analysis using air quality data from the EPA. I used a Shiny dashboard, to tie the visualizations together in a coherent manner.",
    link: "https://github.com/anti-mony/DataMiningLabs",
  },
  {
    id: 5,
    title: "Shrink-Pdf",
    icon: <GitHub />,
    text:
      "An online pdf-shrinker, I wasn't sure of the online ones stealing my data so I made on for myself. It's not crazy, but does it's job and I don't save any data. I also got to try the css framework Bulma here.",
    link: "https://github.com/anti-mony/Shrink-Pdf",
    tag: "WEB",
  },
  {
    id: 6,
    title: "E-Commerce Website",
    icon: <GitHub />,
    text:
      "Did this during my undergrad to learn how to use the MEAN stack, but then skipped on Angular to meet deadlines. I mostly worked on the backend, and just a touch on the front. I learned a lot from this. Also, my team was really supportive for this project, I enjoyed working with them on this one.",
    link: "https://github.com/anti-mony/The-Baking-Room---E-Commerce-Website",
    tag: "WEB",
  },
  {
    id: 7,
    title: "Internet Radio",
    icon: <GitHub />,
    text:
      "This is a personal favorite, not because of the quality but because of what I was able to do in a 2-3 weeks. I can write much better code now but sitting on the floor outside the lab at midnight in the academic block struggling with C with almost no lighting was great. I realized how much joy I get out of writing code with this project.",
    link: "https://github.com/anti-mony/Computer-Networks",
  },
]

export default ProjectList
