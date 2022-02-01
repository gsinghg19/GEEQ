// import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import CreateGroup from '../Components/CreateGroup';
import Intro from '../Intro.jsx';

test('Cannot render without login', () => {
  const tree = renderer.create(<CreateGroup />).toJSON();
  expect(tree).toMatchSnapshot();
});

it(' screen', () => {
  const page = render(<Intro />);

  const texts = page.queryAllByText('Add');
});
