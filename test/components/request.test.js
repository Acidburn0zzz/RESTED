import React from 'react';
import renderer from 'react-test-renderer';

import Request from 'components/Request';

test('Request renders correctly', () => {
  const tree = renderer.create(
    <Request />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});