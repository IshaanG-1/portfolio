import doomAI from "./assets/demos/Doom_AI.mp4"
import hanoiRobot from "./assets/demos/hanoi-robot.gif";
import unityGame from "./assets/demos/FighterGame.mp4";
import arxiv from "./assets/logos/arxiv.png"

import seagate from "./assets/logos/seagate.png";
import umn from "./assets/logos/UMN.png";

import umnlogo from "./assets/logos/umnlogo.png"
import ephslogo from "./assets/logos/ephslogo.webp"

export const projects = [
  {
    title: "Reinforcement Learning DOOM AI",
    text: "Artificial Intelligence using Reinforcement Learning made using TensorFlow, OpenAI Gym and VizDoom's API to create an Reinforcement Learning Neural Network model with Proximal Policy Optimization to complete DOOM (1993).",
    image: doomAI,
    url: "",
  }, 
  {
    title: "LLM Graph Modality Paper",
    text: "Research Paper exploring novel ways to utilize LLM's such as ChatGPT in order to build and derive conclusions off of graphical data and structures. We also analyse the LLM's understanding among different graphical modalities for better reasoning and reduced token count. (Click image to read paper)",
    image: arxiv,
    url: "https://arxiv.org/abs/2311.09862#:~:text=Key%20findings%20reveal%20that%20image,limits%20while%20retaining%20critical%20information",
  }, 
  {
    title: "Unity Fighter Game",
    text: "A 2D Fighter Game built using the Unity API and C#. The game consists of multiple levels, puzzles, special combat abilities (such as knockback, blocking and parrying) as well as a enemy AI which utilizes a optimized A* algorithm made from scratch.",
    image: unityGame,
    url: "",
  },
  {
    title: "Tower of Hanoi Robot",
    text: "A Robot that was able to physically solve the Tower of Hanoi Problem with a custom built algorithm in Python along with the Robot Operating System (ROS). The robot's joint movement was solved using inverse kinematics and the algorithm itself is able to solve the puzzle for any number of blocks.",
    image: hanoiRobot,
    url: "https://github.com/grude013/csci5551-tower-of-hanoi",
  },
];

export const experiences = [
  {
    title: "Software/Firmware Developer Intern",
    info_str: "May 2023 - December 2023 | Minneapolis, MN",
    image: seagate,
    desc: [
      "Responsibilities included design, development and integration of embedded code onto Seagate drives.",
      "Interacted with customers such as Google, Microsoft, and Meta to analyze and resolve failures and performance issues during product qualifications. ",
      "Developed software and firmware tools that generate production analytics and customer drive reports, using C and Python. This tool helped reduce issue resolution time by 10%.",
      "Used Agile/Scrum methodology and performed within a team of 10 senior firmware engineers.",
    ],
  },
  {
    title: "Natural Language Processing Researcher",
    info_str: "December 2022 - December 2023 | Minneapolis, MN",
    image: umn,
    desc: [
      "Worked with a Ph.D. student in U of MN's NLP  (Natural Language Processing) Group under the guidance of Professor Dongyeop Kang.",
      "Researched in Collaborative-NLP systems between humans and machines, and developed a full-stack web-based prototype system that collects and models eye-tracking data using JavaScript behavioral framework (jsPsych), Python, PHP, Node.js, Heroku and MongoDB.",
      "Researched ways to allow Large Language Models, like ChatGPT, to analyze and build conclusions from graphical data using Pytorch and OpenAI API.",
    ],
  },
];

export const educations = [
  // {
  //   title: "Masters of Science in Computer Science",
  //   info_str: "January 2024 - May 2025 | University of Minnesota - Twin Cities",
  //   desc: [
  //     "Major: Computer Science",
  //   ],
  //   icon_image: umnlogo,
  //   pursuing_flag: true
  // },
  {
    title: "Bachelors of Science in Computer Science",
    info_str: "September 2021 - December 2023 | University of Minnesota - Twin Cities",
    desc: [
      "University Honors Student and Dean's List Student",
      "Major: Computer Science",
      "Minor: Mathematics",
      "GPA: 3.93 / 4.00"
    ],
    icon_image: umnlogo
  },
  {
    title: "High School Diploma",
    info_str: "September 2017 - May 2021 | Eden Prairie High School",
    desc: [
      "GPA: 3.94 / 4.00",
      "FIRST Robotics Team Mentor", 
      "TRACE Tutor (Tutored in Pre-Calculus and Physics)",
      "AP Scholar with Distinction"
    ],
    icon_image: ephslogo
  }
]
