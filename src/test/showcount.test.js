import { JSDOM } from 'jsdom';
import DisplayController from '../js/controllers/displaycontroller.js';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

describe('ShowMovies Controller Test', () => {
  // Arrange
  const displaycontroller = new DisplayController([]);
  document.body.innerHTML = '<div class="row" id="cardHolder"></div><span id="totalShows"><i class="fas fa-film"></i>&nbsp;<b id="totalShowsCount"> 0 </b> Shows</span>';

  const movie = { name: 'Test Movies', image: { original: 'Testimgjpg' }, id: '23' };

  test('PrintScreen to be defined', () => {
    expect(displaycontroller.printScreen).toBeDefined();
  });

  displaycontroller.printScreen(movie);
  displaycontroller.printScreen(movie);
  test('Div id cardholder should have 3 children when 2 movies have loaded', () => {
    const mainDivs = document.body.querySelector('#cardHolder');
    expect(mainDivs.childElementCount).toBe(2);
  });

  test('Items counts shoud be 5', () => {
    expect(displaycontroller.totatShows).toBe(2);
  });

  test('counter to be 2 on the document', () => {
    const domCount = document.body.querySelector('#totalShowsCount');
    expect(domCount.innerHTML).toBe('2');
  });
});
