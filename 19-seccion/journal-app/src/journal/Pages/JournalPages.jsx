import { IconButton, Typography } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectionView, NoteView } from '../views'
import { AddOutlined } from '@mui/icons-material'
export const JournalPages = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident mollitia quis itaque possimus laudantium voluptatem, ipsam qui atque corrupti consectetur expedita explicabo nemo, excepturi in distinctio beatae iusto sit molestias!
      </Typography> */}

      <NothingSelectionView/>
      {/* <NoteView/> */}

      <IconButton
        size='large'
        sx={{
          color:'white',
          backgroundColor:'error.main',
          ':hover':{ backgroundColor:'error.main', opacity: 0.9},
          position:'fixed',
          right:50,
          bottom:50
        }}

      >
        <AddOutlined/>
      </IconButton>

    </JournalLayout>



  )
}
