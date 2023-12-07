import React, { useState } from 'react';
// import todoImage from './media/image-4.jpg';
import convert from './media/convert.jpeg';
import nomnom from './media/nomnom.png';
import motivation from './media/motivation.jpeg';
import carousel from './media/carousel.png';
import supersonicmeow from './media/supersonicmeow.png';
import todolist from './media/todolist.jpeg';
import scoreBoard from './media/scoreBoard.png';
import pokemon from './media/pokemon.png';
import js from './media/js.png';
import react from './media/react.png';
import html from './media/html.png';
import css from './media/css.png';
import myProjects from './media/myProject.png'


const CardRender = () => {
// eslint-disable-next-line 
  const [cardInfo] = useState([
    {
        id: 1,    
        image: motivation,
        title: 'Quote Generator',
        description: 'Random motivation quote generator.',
        button: 'Visit Site',
        link: 'https://frabjous-elf-d64314.netlify.app/',
        icons: [css, html, js]
    },
    {
        id: 2,
        image: nomnom,
        title: 'NomNom',
        description: 'Online food ordering site. ',
        button: 'Visit Site',
        link: 'https://splendid-palmier-68e3f8.netlify.app/',
        icons: [css, html, js]
    },
    {
        id: 3,
        image: convert,
        title: 'Miles to Kilometers',
        description: 'Miles to Kilometers converter.',
        button: 'Visit Site',
        link: 'https://yadetagetachew.github.io/Miles-to-Kilometers/',
        icons: [css, html, js]
    },
    {
        id: 4,
        image: carousel,
        title: 'Carosel',
        description: 'Carosel with vannila js and bootstrap.',
        button: 'Visit Site',
        link: 'https://hilarious-hamster-fbc2a5.netlify.app/',
        icons: [css, html, js]
    },
    {
      id: 5,
      image: supersonicmeow,
      title: 'Super Sonic Meow',
      description: 'Haloween game',
      button: 'Visit Site',
      link: 'https://supersonicmeow.com/',
      icons: [css, html, js]
      },
      {
        id: 6,
        image: scoreBoard,
        title: 'Score Board',
        description: 'Scrore keeper for any amount of players.',
        button: 'Visit Site',
        link: 'https://imaginative-lamington-45d890.netlify.app/',
        icons: [css, react]
    },
      {
        id: 6,
        image: todolist,
        title: 'To Do List',
        description: 'To do list app.',
        button: 'Visit Site',
        link: 'https://imaginative-lamington-45d890.netlify.app/',
        icons: [css, html, js]
    },
    {
        id: 7,
        image: pokemon,
        title: 'Pokemon',
        description: 'Pokemon Pokedex',
        button: 'Visit Site',
        link: 'https://6493d5e706a50b1c6bd18fb4--astonishing-pie-3949db.netlify.app/',
        icons: [css, html, js]
    }
  ]);

  return (
    <div>
         <div className='title flex justify-center items-center'>
          <img src={myProjects} alt="title" /> 
        </div>
      <div className='card-container'>
        {cardInfo.map((card) => (
          <div className='card' key={card.id}>
            <div className='project-image'>
              <img src={card.image} alt={card.title} />
            </div>
            <div className='text'>
              <h3>
                <strong>{card.title}</strong>
              </h3>
              <p>{card.description}</p>
              <div className='project-button'>
              <a href={card.link} target='_blank' rel="noopener noreferrer" role="button">
                <button type='button'>{card.button}</button>
              </a>
              </div>
              <div className='languages'>
                {card.icons &&
                  card.icons.map((icon, index) => (
                    <span key={card.id}>
                      <img src={icon} alt={`Icon ${index}`} />
                    </span>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div class="custom-shape-divider-bottom-1694042680">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div> */}
    </div>
  );
};

export default CardRender;
