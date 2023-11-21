import { IconButton, Typography } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectionView, NoteView } from '../views'
import { AddOutlined } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store/journal/thunks'
export const JournalPages = () => {

  const { isSaving, activate } = useSelector(state => state.journal)

  const dispatch = useDispatch()
  const onClickNewNote = ()=>{
    dispatch( startNewNote() )
  }


  return (
    <JournalLayout>
      

      {
        (!!activate )
        ? <NoteView/>
        : <NothingSelectionView/>
      }
      
      

      
      <IconButton
        onClick={ onClickNewNote }
        size='large'
        disabled={ isSaving }
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
