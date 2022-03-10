import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import Results from '../Results';

describe('Results', () => {
  const list = [{
    pricePerPerson: '11',
    hotel: {
      content: {
        starRating: '2',
        hotelFacilities: ['as', 'asd'],
        images: [{
          RESULTS_CAROUSEL: {
            url: 'image'
          }
        }]
      }
    }
  }]

  it('should render with correct data', () => {
    render(<Results holidayList={list} />);
    const image = screen.getByTestId('holiday-image');

    expect(screen.findByText('as'));
    expect(screen.findByText('asd'));
    expect(screen.findByText('Price/person: £11'));
    expect(image).toHaveAttribute('src', 'image')
  })
})

