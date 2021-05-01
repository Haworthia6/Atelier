import React from 'react';
import toJSON from 'enzyme-to-json';

import createRows from '../helpers/createRows';
import createComparisons from '../helpers/createComparisons';
import comparedProducts from '../../../exampleData/comparedProducts';

describe('createComparisons and createRows', () => {
  let comparisons, combinedComparisons, keys;
  beforeEach(() => {
    const { current, related } = comparedProducts;
    comparisons = createComparisons(current, related);
    combinedComparisons = createRows(comparisons);
    keys = Object.keys(comparisons);
  });

  it('should match its snapshot', () => {
    expect(toJSON(<>{combinedComparisons}</>)).toMatchSnapshot();
  });

  it('should combine the current and related features into a single object', () => {
    expect(keys).toEqual(['Fabric', 'Cut', 'Sole', 'Material', 'Mid-Sole', 'Stitching']);
    expect(comparisons).toBeInstanceOf(Object);
  });

  it('should return each value of the key as a tuple', () => {
    const keys = Object.keys(comparisons);
    expect(comparisons[keys[0]]).toBeInstanceOf(Array);
    expect(comparisons[keys[0]]).toEqual(['100% Cotton', '']);
    expect(comparisons[keys[1]]).toEqual(['Skinny', '']);
  });

  it('should should combine current and related features into a row', () => {
    expect(combinedComparisons).toHaveLength(6);
    combinedComparisons.forEach((row) => {
      expect(row.type).toBe('tr');
    });
  });
});

