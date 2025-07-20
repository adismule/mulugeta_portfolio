/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


// js/projects.js

const projects = [
    {
      title: "Netflix Clone",
      description: "Built with React, TMDB API, and Styled Components",
      image: "./assets/image/netflix.png",
      link: "https://adismule.github.io/Netflix_Clone/"
    },
    {
      title: "Amazon Clone",
      description: "Built with React + Firebase. Includes user auth, cart, and Stripe integration",
      image: "./assets/image/amazon.png",
      link: "https://mule-amazon-clone-2025.netlify.app"
    },
    {
      title: "Apple Clone",
      description: "Dynamic product rendering with React",
      image: "./assets/image/apple.png",
      link: "https://adismule.github.io/apple-clone-final/"
    },
    {
      title: "Evangadi Forum",
      description: "Q&A web app with user auth, question/answer features using full stack tech",
      image: "./assets/image/evan_forum.png",
      link: "https://evanforum.com"
    }
  ];
  
  const container = document.getElementById("projects-container");
  
  projects.forEach(project => {
    const col = document.createElement("div");
    col.className = "col mb-5";
  
    col.innerHTML = `
      <a href="${project.link}" target="_blank">
        <div class="card h-100">
          <img class="card-img-top" src="${project.image}" alt="${project.title}" />
          <div class="card-body text-center">
            <h5 class="fw-bolder">${project.title}</h5>
            <p>${project.description}</p>
          </div>
        </div>
      </a>
    `;
  
    container.appendChild(col);
  });
  