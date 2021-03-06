import { projectObjType } from '../../types/global';

const scrabbleScorekeeper: projectObjType = {
  id: 'scrabble-scorekeeper',
  title: 'Scrabble Scorekeeper',
  shortDescription:
    'A web-based program designed to calculate turn scores in Scrabble.',
  longDescription: [
    `Built with React, this project was created to make playing Scrabble more enjoyable and less time-consuming by 
    offloading the task of calculating player scores to a computer.`,
    `It features an easy-to-use graphical user interface comprised of a virtual Scrabble board and a table for displaying
     player scores. A dictionary is included to validate each word formed. The board, table and tiles were styled using CSS.`
  ],
  projectPageURI: '/projects/scrabble-scorekeeper',
  screenshotURIs: [
    '/images/scrabble-tiles.png',
    '/images/scrabble-table.png',
    '/images/scrabble-board.png'
  ],
  mainLanguage: 'JavaScript',
  links: [
    {
      label: 'project link',
      URL: 'https://scrabble-scorekeeper.netlify.app/',
      type: 'external'
    },
    {
      label: 'GitHub link',
      URL: 'https://github.com/Jamnic98/scrabble-scorekeeper',
      type: 'external'
    }
  ],
  techStack: ['JavaScript', 'React', 'HTML', 'CSS']
};

export default scrabbleScorekeeper;
