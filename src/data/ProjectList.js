import React from "react"

import { GitHub, Code, ViewHeadline } from "@material-ui/icons"

const ProjectList = [
  {
    id: 1,
    title: "Aerial Cactus Identification",
    icon: <Code />,
    text:
      "In this project, I tried to identify cacti in the aerial images taken by the research team of VIGIA project in Mexico. I was able to achieve an accuracy of 99% using a Convolutional Neural Network written in PyTorch. I used dropouts and early stopping to reduce overfitting. The kaggle link will lead you to the kernel",
    link: "https://www.kaggle.com/antimony18/pytorch-cnn-model",
    tag: "ML",
  },
  {
    id: 2,
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
]

export default ProjectList
