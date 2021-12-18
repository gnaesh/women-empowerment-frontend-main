import { render, screen } from '@testing-library/react';
import Ngo from './components/Ngo';
import { Provider } from 'react-redux';
import Store from './redux/Store';


// use this hook to render a component only once before all the test cases 
beforeAll(() => {
  console.log('beforeAll');
});

beforeEach(() => {
  console.log('beforreEach');
});

// positive test case 
// test('render Find Ngo by id', () => {
//   render(<Ngo />);
//   const linkElement = screen.getByText(/Data from backend/);
//   expect(linkElement).toBeInTheDocument();
// });


// positive test case 
test('render Data from Ngo Component', () => {
  render(
    <Provider Store={Store} >
      <Ngo/>
    </Provider>);
  const linkElement = screen.getByText('Ngo Component');
  expect(linkElement).toBeInTheDocument();
});



// // positive test case 
// test('render Find Ngo by id', () => {
//   render(
//     <Provider Store={Store} >
//       <Ngo />
//     </Provider>);
//   const linkElement = screen.getByText(' Find Ngo by id');
//   expect(linkElement).toBeInTheDocument();
// });

// // negative test case 
// test('renderFind Ngo by id', () => {
//   render(
//     <Provider Store={Store} >
//       <Ngo />
//     </Provider>);
//   const linkElement = screen.findByText();
//   expect(linkElement).not.toBe('Some other text which is not present in the component.');
// });



// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });