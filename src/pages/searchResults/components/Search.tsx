
import React, { useState } from 'react'
import { Button, InputLabel, MenuItem, Select, TextField, Box, CircularProgress } from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { locations } from '../data'

type SearchProps = {
  handleDataFetch: ({ departureDate, location }: any) => void
}

export const Search = ({ handleDataFetch }: SearchProps) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate()+1);

  const [departureDate, setdDepartureDate] = useState(tomorrow)
  const [location, setLocation] = useState(locations[0].value)

  const handleOnDateChange = (value: any) => {
    setdDepartureDate(value)
  }

  const handleOnLocationChange = (e: any) => {
    setLocation(e.target.value)
  }

return (
  <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'end',
    mb: '20px'
  }}>
    <Box width='230px'>
      <InputLabel id="location-label">Location</InputLabel>
      <Select
          labelId="location-label"
          onChange={handleOnLocationChange}
          value={location}
          fullWidth
        >
          {
            locations.map((location) => <MenuItem value={location.value}>{location.label}</MenuItem>)
          }
      </Select>
    </Box>
    <Box width='230px'>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <InputLabel id="date-label">Date</InputLabel>
        <DesktopDatePicker
          minDate={tomorrow}
          inputFormat='dd/MM/yyyy'
          value={departureDate}
          onChange={handleOnDateChange}
          renderInput={(params) => <TextField {...params} fullWidth/>}
        />
      </LocalizationProvider>
    </Box>
    <Button
      data-testid='search-button'
      sx={{
        height: '56px'
      }} 
      variant="contained"
      onClick={() => handleDataFetch({location, departureDate })}>
        Search 
    </Button>
  </Box>
  )
}

export default Search