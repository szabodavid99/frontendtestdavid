import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import Filter from '../Filter';

describe('Filter', () => {
  const list = [{
    pricePerPerson: '11',
    hotel: {
      content: {
        starRating: '2',
        hotelFacilities: ['as', 'asd']
      }
    }
  }]

  it('should call setList function', () => {
    const setList = jest.fn();
    render(<Filter list={list} setList={setList}/>);

    const filterButton = screen.getByTestId('filter-button');
    fireEvent.click(filterButton)
  
    expect(setList.mock.calls.length).toBe(1);
  })

  // it('renders the list', () => {
  //   render(<Filter />);
  //   const facilities = screen.getByTestId('facilities');
  //   fireEvent.click(facilities)
  
  //   const { getAllByRole } = within(facilities)
  //   const items = screen.getAllByRole("option")
  //   expect(items.length).toBe(5)
  // });
})

