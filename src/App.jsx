
import { Container, Box, Stack, Avatar} from '@mui/material'
import { Grid2 as Grid } from '@mui/material'
import Paper from '@mui/material/Paper'
import BasicSelect from './form'
import FolderList from './folderlist'
import './App.css'
import ButtonAppBar from './buttonbar'
import { Margin } from '@mui/icons-material'

function App() {


  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 1,
            gridTemplateRows: 'auto',
            gridTemplateAreas: `"Overview Overview Overview Overview"
        "Posts Posts Posts Budgets"
        "Transactions Transactions Transactions Budgets"
        "Transactions Transactions Transactions Bills"`,
          }}
        >
          <Box sx={{ gridArea: 'Overview' }}>
                <ButtonAppBar />

            <Grid container spacing={2} sx={{padding:'20px 0 0 0'}}>
              <Grid size={4}>
                <Paper sx={{bgcolor:'orange'}}>Xs-8</Paper>
              </Grid>
              <Grid size={4}>
                <Paper sx={{bgcolor:'lime'}}>Xs-8</Paper>
              </Grid>
              <Grid size={4}>
                <Paper sx={{bgcolor:'#3B1E54'}}>Xs-8</Paper>
              </Grid>
            </Grid>

          </Box>
          <Box sx={{ gridArea: 'Posts', bgcolor: 'secondary.main' , padding:'20px'}}>
                <Stack direction="row" spacing={2}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </Stack>
          </Box>

          <Box sx={{ gridArea: 'Budgets', bgcolor:'lightpink', padding:'10px'}}>
               <BasicSelect />    
          </Box>

          <Box sx={{ gridArea: 'Transactions', bgcolor: 'warning.dark', padding:'20px'}}>
            <FolderList />
          </Box>

          <Box sx={{ gridArea: 'Bills', bgcolor: 'green' }}>Bills</Box>
        </Box>

      </Container>
    </>
  )
}

export default App
