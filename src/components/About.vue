<template>
    <section id="about">
      <div class="container">
        <h2 class="section-title">ABOUT ME</h2>
        <div class="intro">
          <h1>Hello,</h1>
          <p>
            An experienced **Software Engineer** passionate about crafting innovative solutions. 
            I specialize in **Object-Oriented Programming, Design Patterns, and Scalable Architectures**. 
            With a strong problem-solving mindset, I thrive on tackling complex challenges 
            while maintaining high-quality code.
          </p>
          <p>
            I love structure, order, and optimization. My passion is **continuous learning** and exploring new frontiers 
            in technology. I am committed to refining my expertise and expanding my knowledge.
          </p>
        </div>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/yourusername/" target="_blank">
            <img src="/linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="https://github.com/yourusername" target="_blank">
            <img src="/github.svg" alt="GitHub" />
          </a>
          <a href="https://www.instagram.com/yourusername/" target="_blank">
            <img src="/instagram.svg" alt="Instagram" />
          </a>
        </div>
        <button class="resume-btn">Download Resume</button>
      </div>
    </section>
  </template>
  
  <style scoped>
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    min-height: 100vh;
    padding: 60px 20px;
  }
  
  .container {
    max-width: 800px;
    text-align: center;
  }
  
  .section-title {
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 20px;
    font-weight: bold;
    position: relative;
  }
  
  .section-title::after {
    content: "";
    width: 50px;
    height: 2px;
    background: #000;
    display: block;
    margin: 8px auto;
  }
  
  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 15px;
    color: #111;
  }
  
  p {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.6;
    margin-bottom: 15px;
  }
  
  .social-links {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
  }
  
  .social-links a img {
    width: 40px;
    transition: transform 0.3s ease-in-out;
  }
  
  .social-links a:hover img {
    transform: scale(1.1);
  }
  
  .resume-btn {
    margin-top: 20px;
    padding: 10px 20px;
    border: 2px solid #000;
    background: transparent;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  
  .resume-btn:hover {
    background: #000;
    color: #fff;
  }
  </style>
  