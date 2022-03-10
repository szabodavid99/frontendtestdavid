import { Box, Select, InputLabel, MenuItem, Button} from '@mui/material';
import { facilities, ratings, pricePerPersons} from '../data'
import React, { useState } from 'react'

export const Filter = ({ list, setList }: any) => {
  const [filters, setFilters] = useState({
    facility: '',
    rating: '',
    pricePerPerson: ''
  })

  const handleOnChangeFacility = (e: any) => {
    setFilters({
      ...filters,
      facility: e.target.value
    })
  }

  const handleOnChangeRating = (e: any) => {
    setFilters({
      ...filters,
      rating: e.target.value
    })
  }

  const handleOnChangePrice = (e: any) => {
    setFilters({
      ...filters,
      pricePerPerson: e.target.value
    })
  }

  const doFilter = (list: any) => {
    const { facility, rating, pricePerPerson } = filters
    const filteredList = list.filter((item: any) => { 
      const matchRating = rating ? item.hotel.content.starRating === rating : true
      const matchPricePerPerson = pricePerPerson ? item.pricePerPerson < pricePerPerson : true
      const matchfacility = facility ? item.hotel.content.hotelFacilities.includes(facility): true

      return matchRating && matchPricePerPerson && matchfacility
    }) || []

    setList(filteredList)
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'end', mb: '10px'}}>
      <Box width='230px'>
        <InputLabel id="facilities-label">Facilities</InputLabel>
        <Select
            labelId="facilities-label"
            data-testid='facilities'
            onChange={handleOnChangeFacility}
            value={filters.facility}
            fullWidth
          >
            {
              facilities.map((facility) => <MenuItem value={facility.value}>{facility.label}</MenuItem>)
            }
        </Select>
      </Box>
      <Box width='230px'>
        <InputLabel id="rating-label">Rating</InputLabel>
        <Select
            labelId="rating-label"
            onChange={handleOnChangeRating}
            value={filters.rating}
            fullWidth
          >
            {
              ratings.map((rating) => <MenuItem value={rating.value}>{rating.label}</MenuItem>)
            }
        </Select>
      </Box>
      <Box width='230px'>
        <InputLabel id="pricePerPerson-label">Price/person</InputLabel>
        <Select
            labelId="pricePerPerson-label"
            onChange={handleOnChangePrice}
            value={filters.pricePerPerson}
            fullWidth
          >
            {
              pricePerPersons.map((price) => <MenuItem value={price.value}>{price.label}</MenuItem>)
            }
        </Select>
      </Box>
      <Button
        data-testid='filter-button'
        sx={{
          height: '56px'
        }} 
        variant="contained"
        onClick={() => {doFilter(list)}}>
        Filter 
      </Button>
    </Box>
  )
}

export default Filter