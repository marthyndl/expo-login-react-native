import React from 'react';
import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import App from '../App';

describe('<App />', () => {
  it('has 4 child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(4);
  });
  it('should be title by App', () => {
    const { getByText } = render(<App />);
    let title = "Technical challenge Prokeep";
    expect(getByText(title)).toBeDefined();
  });
  it('should be author by App', () => {
    const { getByText } = render(<App />);
    let author = "Martin Lopez";
    expect(getByText(author)).toBeDefined();
  });
});