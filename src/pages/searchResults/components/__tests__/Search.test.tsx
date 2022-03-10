import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import Search from '../Search';

describe('Search', () => {
  it('should call handleDataFetch function', () => {
    const handleDataFetch = jest.fn();
    render(<Search  handleDataFetch={handleDataFetch}/>);

    const filterButton = screen.getByTestId('search-button');
    fireEvent.click(filterButton)
  
    expect(handleDataFetch.mock.calls.length).toBe(1);
  })
})

