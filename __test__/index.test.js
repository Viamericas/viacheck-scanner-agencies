import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { prettyDOM } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import Demo from '../src/index';

// https://www.codecademy.com/learn/learn-react-testing/modules/react-testing-library/cheatsheet

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

const onHandleChange = value => {
  // eslint-disable-next-line no-console
  console.log(value);
};

describe('<Demo/>', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Render Component', () => {
    render(<Demo inputA={1} inputB={2} onHandleChange={onHandleChange} />);
    // TIP: How to debug
    // eslint-disable-next-line no-console
    console.log(prettyDOM(screen.innerHTML));
    screen.getByTestId('scanner-agencies');
  });

  //   test('Component has a wrapper class', () => {
  //     render(<Demo inputA={1} inputB={2} onHandleChange={onHandleChange} />);
  //     const component = screen.getByTestId('component-demo');
  //     expect(component).toHaveClass('demo-box');
  //   });

  //   test('Review if Action Button is enable and works', () => {
  //     const mockHandler = jest.fn();

  //     render(<Demo inputA={1} inputB={2} onHandleChange={mockHandler} />);
  //     const btn = screen.getByText('demo.action');
  //     // eslint-disable-next-line no-console
  //     console.log(prettyDOM(btn));

  //     expect(btn).not.toBeDisabled();
  //     fireEvent.click(btn);
  //     expect(mockHandler).toHaveBeenCalledTimes(1);
  //   });

  //   test('Via logo is visible', () => {
  //     render(<Demo inputA={1} inputB={2} onHandleChange={onHandleChange} />);
  //     const img = screen.getByAltText('via logo');
  //     const container = img.closest('div');
  //     // eslint-disable-next-line no-console
  //     console.log(prettyDOM(container));
  //     expect(container).not.toHaveStyle('display: none');
  //     expect(container).toHaveClass('container');
  //   });

  //   test('Sum result 1+2 is 3', () => {
  //     render(<Demo inputA={1} inputB={2} onHandleChange={onHandleChange} />);
  //     const result = screen.getByText('scanner-report__table-container', {
  //       exact: false,
  //     });
  //     // eslint-disable-next-line no-console
  //     console.log(prettyDOM(result));
  //     const span = result.firstElementChild;
  //     expect(span.innerHTML).toBe('3');
  //   });
});
