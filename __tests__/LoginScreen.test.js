// import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';

import LoginScreen from '../screens/LoginScreen';

test('Login snapshot', () => {
  const tree = renderer.create(<LoginScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

it(' screen', () => {
  const page = render(<LoginScreen />);

  const texts = page.queryAllByText('Login');
});
