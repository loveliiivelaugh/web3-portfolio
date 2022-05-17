import web from './../assets/images/web.jpeg';
import blockchain from '../assets/images/blockchain.jpeg';
import ai from '../assets/images/ai.jpeg';
import backend from '../assets/images/backend.jpeg';
import fintech from '../assets/images/fintech.jpeg';
import ecommerce from '../assets/images/ecommerce.jpeg';

export const items = [
  {
    title: "Web Development",
    description:
      "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
    image: web,
    url: "https://basic-crypto-dashboard.netlify.app/",
    repo: "https://github.com/loveliiivelaugh/crypto-dashboard",
  },
  {
    title: "Blockchain",
    description:
      "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
    image: blockchain,
    url: "https://basic-crypto-dashboard.netlify.app/",
    repo: ""
  },
  {
    title: "Fintech",
    description:
      "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
    image: fintech,
    url: "https://basic-crypto-dashboard.netlify.app/",
    repo: ""
  },
  {
    title: "eCommerce",
    description:
      "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
    image: ecommerce,
    url: "https://coffee-shop-shopify-context.netlify.app/",
    repo: "https://github.com/loveliiivelaugh/coffee-shopify",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
    image: ai,
    url: "https://basic-crypto-dashboard.netlify.app/",
    repo: ""
  },
  {
    title: "Back End Development",
    description:
      "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
    image: backend,
    url: "https://basic-crypto-dashboard.netlify.app/",
    repo: ""
  },
];

export const projects = [
  {
    category: "web-development",
    projects: [
      {
        title: "Online Shop",
        descr: "A multi page eCommerce online website featuring fine coffee. This online shop includes a dynamic shopping cart accessible from anywhere in the site. This shop is also connected to Shopify on the back end which handles payment processing as well as product management services.",
        screenshots: {
          phone: '',
          tablet: '',
          desktop: '',
        },
        url: "https://coffee-shop-shopify-context.netlify.app/",
        repo: "https://github.com/loveliiivelaugh/coffee-shopify",
        type: "web"
      },
      {
        title: "Crypto Analysis Dashboard",
        descr: "A dashboard to track and analyze digital assets.",
        screenshots: {
          phone: '',
          tablet: '',
          desktop: '',
        },
        url: "https://basic-crypto-dashboard.netlify.app/",
        repo: "https://github.com/loveliiivelaugh/crypto-dashboard",
        type: "Blog"
      },
      {
        title: "Analytics Dashboard",
        descr: "A private dashboard to track and analyze my private information across many areas of my life including health metrics, work hours, budget and expense tracking, investments, entertainment analytics, and more.",
        screenshots: {
          phone: '',
          tablet: '',
          desktop: '',
        },
        url: "https://coffee-shop-shopify-context.netlify.app/",
        repo: "https://github.com/loveliiivelaugh/coffee-shopify",
        type: "Analytics Dashboard"
      },
      {
        title: "Portfolio",
        descr: "My personal portfolio which highlights a moderately advanced architecture with a simple design and includes some advanced animations. Content is powered by a CMS.",
        screenshots: {
          phone: '',
          tablet: '',
          desktop: '',
        },
        url: "https://www.michaelwoodward.dev/",
        repo: "https://github.com/loveliiivelaugh/vite-porfolio",
        type: "Portfolio" 
      },
      {
        title: "Full Stack App",
        descr: "A full stack application to manage employees at a company. Uses a noSQL database on the backend.",
        screenshots: {
          phone: '',
          tablet: '',
          desktop: '',
        },
        repo: "https://github.com/loveliiivelaugh/employee-management-system",
        url: "https://fire-react-employee-management.netlify.app/",
        type: "Full Stack App"
      },
    ],
  },
  {
    category: "blockchain",
    projects: [
      {
        title: "Smart Contracts"
      },
      {
        title: "Decentralized Apps (dApps)"
      },
      {
        title: "IPFS & ENS"
      },
    ],
  },
  {
    category: "fintech",
    projects: [
      {
        title: "Cryptoverse",
        descr: "Tracking stocks in a centralized location while automating the organization of relevant cryptocurrency news and information."
      },
      {
        title: "Alpaca",
        descr: "Automated/Algorithmic trading assets/securities."
      },
      {
        title: "Plaid",
        descr: "Programatic banking. Identity verification, employment and salary verification. Application processing on loans or large item/material transactions."
      },
    ],
  },
  {
    category: "ecommerce",
    projects: [
      {
        title: "Shopify"
      },
      {
        title: "Stripe"
      },
      {
        title: "Block formerly Square"
      },
    ],
  },
  {
    category: "artificial-intelligence",
    projects: [
      {
        title: "Computer Vision",
        descr: "Image processing, image classification, object detection, pose detection, facial recognition.",
        url: "https://image-classification-test.netlify.app/",
        repo: ""
      },
      {
        title: "Audio and Voice Activated w/NLP",
        descr: "Audio processing, speech recognition, voice recognition, auditory matching, pitch identifier, voice enabled, Natural Language Processing (GPT3), classification."
      },
      {
        title: "Automation",
        descr: ""
      },
    ]
  },
  {
    category: "back-end-development",
    projects: [
      {
        title: "Server's",
        descr: "Image processing, image classification, object detection, pose detection, facial recognition.",
        url: "https://image-classification-test.netlify.app/",
        repo: ""
      },
      {
        title: "API's",
        descr: "Audio processing, speech recognition, voice recognition, auditory matching, pitch identifier, voice enabled, Natural Language Processing (GPT3), classification."
      },
      {
        title: "Authentication",
        descr: ""
      },
      {
        title: "Webhooks",
        descr: ""
      },
    ]
  }
];