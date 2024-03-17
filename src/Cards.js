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


const CardRender = () => {
// eslint-disable-next-line 
  const [cardInfo] = useState([
    {
      id: 1,
      image: scoreBoard,
      title: 'Score Board',
      description: 'Scrore keeper for any amount of players.',
      button: 'Visit Site',
      link: 'https://imaginative-lamington-45d890.netlify.app/',
      icons: [css, react]
  },
    {
        id: 2,    
        image: motivation,
        title: 'Quote Generator',
        description: 'Random motivation quote generator.',
        button: 'Visit Site',
        link: 'https://frabjous-elf-d64314.netlify.app/',
        icons: [css, html, js]
    },
    {
        id: 3,
        image: nomnom,
        title: 'NomNom',
        description: 'Online food ordering site. ',
        button: 'Visit Site',
        link: 'https://splendid-palmier-68e3f8.netlify.app/',
        icons: [css, html, js]
    },
    {
        id: 4,
        image: convert,
        title: 'Miles to Kilometers',
        description: 'Miles to Kilometers converter.',
        button: 'Visit Site',
        link: 'https://yadetagetachew.github.io/Miles-to-Kilometers/',
        icons: [css, html, js]
    },
    {
        id: 5,
        image: carousel,
        title: 'Carosel',
        description: 'Carosel with vannila js and bootstrap.',
        button: 'Visit Site',
        link: 'https://hilarious-hamster-fbc2a5.netlify.app/',
        icons: [css, html, js]
    },
    {
      id: 6,
      image: supersonicmeow,
      title: 'Super Sonic Meow',
      description: 'Haloween game',
      button: 'Visit Site',
      link: 'https://supersonicmeow.com/',
      icons: [css, html, js]
      },
      {
        id: 7,
        image: todolist,
        title: 'To Do List',
        description: 'To do list app.',
        button: 'Visit Site',
        link: 'https://main--delightful-druid-2e4d7a.netlify.app/',
        icons: [css, html, js]
    },
    {
        id: 8,
        image: pokemon,
        title: 'Pokemon',
        description: 'Pokemon Pokedex',
        button: 'Visit Site',
        link: 'https://6493d5e706a50b1c6bd18fb4--astonishing-pie-3949db.netlify.app/',
        icons: [css, html, js]
    }
  ]);

  return (
    <div className='card-wrapper'>
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
    </div>
  );
};

export default CardRender;
