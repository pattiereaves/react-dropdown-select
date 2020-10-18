import React from 'react';
import TestRenderer from 'react-test-renderer';

import Select from '../src/index';

const props = (props = {}) => ({
  onChange: () => undefined,
  ...props
});

const selectWithProps = (component) => {
  return TestRenderer.create(component, {
    createNodeMock: (element) => {
      if (element.type === 'div') {
        return {
          blur: () => {},
          getBoundingClientRect: () => {}
        };
      }
      return null;
    }
  });
};

describe('<Select/> component', () => {
  it('<Select/> renders correctly', () => {
    const tree = selectWithProps(<Select {...props()} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('<Select/> renders with separator', () => {
    const tree = selectWithProps(<Select {...props({ separator: true })} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('<Select/> renders with clearable', () => {
    const tree = selectWithProps(<Select {...props({ clearable: true })} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('<Select/> renders with short color', () => {
    const tree = selectWithProps(<Select {...props({ color: '#000' })} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('<Select/> renders with loading', () => {
    const tree = selectWithProps(<Select {...props({ loading: true })} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('<Select/> renders with name', () => {
    const tree = selectWithProps(<Select {...props({ name: 'form-select' })} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('<Select/> renders with custom search function', () => {
    const tree = selectWithProps(<Select {...props({ searchFn: () => {} })} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('<Select/> is disabled', () => {
    const tree = selectWithProps(<Select {...props({ disabled: true })} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
