// import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';

import CreateGroupTest from './CreateGroupTest.jsx';

test('Cannot render without login first', () => {
  const tree = renderer.create(<CreateGroupTest />).toJSON();
  expect(tree).toMatchSnapshot();
});

it(' screen', () => {
  const page = render(<CreateGroupTest />);

  const texts = page.queryAllByText('Create a new group');
});
