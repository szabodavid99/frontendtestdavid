import { Box, CircularProgress } from '@mui/material'
import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { format } from 'date-fns'
import axios from 'axios'
import Results from './components/Results'
import Filter from './components/Filter'
import Search from './components/Search'

export const SearchResults = () => {
  const [filteredHolidays, setFilteredHolidays] = useState([])
  
  const mutation = useMutation((bookingInfo: any) => {
    const departureDate = format(bookingInfo.departureDate, 'dd-MM-yyyy')
    const options = {
      bookingType: 'hotel',
      duration: '7',
      departureDate,
      partyCompositions: [
        {
          adults: 2,
          childAges: [],
          infants: 0
        }
      ]
    }
    return axios.post('/https://www.virginholidays.co.uk/cjs-search-api/search', { ...bookingInfo, ...options})
  })

  const handleDataFetch = (object: any) => {
    mutation.mutate(object)
  }

  const handleFilteredListOnChange = (holidays: any) => {setFilteredHolidays(holidays)} 

  if (mutation.isLoading) {
    return <CircularProgress />
  }

  return (
    <Box>
      <Search handleDataFetch={handleDataFetch} />
      <Filter setList={handleFilteredListOnChange} list={mutation?.data?.data?.holidays}/>
      {mutation?.data?.data && <Results holidayList={filteredHolidays.length ? filteredHolidays : mutation?.data?.data?.holidays}/>}
    </Box>
  )
}

export default SearchResults