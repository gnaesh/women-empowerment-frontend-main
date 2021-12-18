import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import NgoComponent from './components/NgoComponent';




test('render Data from Ngo Component', () => {
  render(
    <Provider store={store} >
      <NgoComponent />
    </Provider>);
  const linkElement = screen.getByText('Ngo Component');
  expect(linkElement).toBeInTheDocument();
});


test('render Data from Ngo Component', () => {
  render(
    <Provider store={store} >
      <NgoComponent />
    </Provider>);
  const linkElement = screen.getByText('Find Ngo by Id');
  expect(linkElement).toBeInTheDocument();
});

