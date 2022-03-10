import { Card, CardMedia, CardContent, Typography, Rating } from '@mui/material'
import React from 'react'

export const Results = ({ holidayList }: any) => {

  return (
    holidayList.map((holiday: any) => 
      <Card sx={{ display: 'flex', mb: '10px' }}>
        <CardMedia
          data-testid='holiday-image'
          component="img"
          height="250"
          image={holiday.hotel.content.images[0].RESULTS_CAROUSEL.url}      
          sx={{
            flex: 1
          }}
        />
        <CardContent 
          sx={{ textAlign: 'left', flex: 2}}
        >
          <Typography textAlign='left' gutterBottom variant="h5" component="div">
            {holiday.hotel.name}
          </Typography>
          <Rating name="read-only" value={holiday.hotel.content.starRating} readOnly />
          <Typography variant="body2" color="text.primary">
              Hotel Facilities: 
          </Typography>
          <ul>
          {
            holiday.hotel.content.hotelFacilities.map((facilty: string) => <li>{facilty}</li>)
          }
          </ul>
          <Typography variant="body2" color="text.primary">
              Price/person: £{holiday.pricePerPerson}
          </Typography>
          <Typography variant="body2" color="text.primary">
              Total price: £{holiday.totalPrice}
          </Typography>
        </CardContent>
      </Card>
    )
  )
}

export default Results