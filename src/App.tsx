import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchResults from './pages/searchResults'
import { Box } from '@mui/material'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Box sx={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <Box sx={{
            mt: '100px'
          }}>
            <SearchResults />
          </Box>
        </Box>
      </div>
    </QueryClientProvider>
  );
}

export default App;
