import { createSlice } from '@reduxjs/toolkit';


export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
      isSaving: false,
      messageSaved:'',
      notes:[],
      activate:null,
      // active:{
      //   id:'ABC123',
      //   title:'',
      //   date:12434556,
      //   imageUrls:[]
      // }
    },
    reducers: {
      savingNewNote: (state) =>{
        state.isSaving = true
      },
      addNewEmptyNote: ( state, action ) => {
        state.notes.push( action.payload)
        state.isSaving = false
      },
      setActiveNote: ( state, action ) => {
        state.activate = action.payload
        state.messageSaved = ''
      },
      setNotes: ( state, action ) => {
        state.notes = action.payload
      },
      setSaving: ( state ) => {
        state.isSaving= true
        // mensaje de error
        state.messageSaved = ''
      },
      updateNote: ( state, action ) => {
        state.isSaving = false
        state.notes = state.notes.map( note => {
          if ( note.id === action.payload.id ){
            return action.payload
          }
          return note
        })

        //  MOSTRAR EL MENSAJE DE actualizacion
        state.messageSaved = `${ action.payload.title }, actualizada correctamente`

      },
      setPhotosToActiveNote: ( state, action ) => {
        state.activate.imageUrls = [ ...state.activate.imageUrls, ...action.payload];
        state.isSaving = false
      },
      clearNotesLogout: ( state, action ) => {
        state.isSaving = false;
        state.messageSaved = '';
        state.notes = []
        state.activate = null
      },
      deleteNoteById : ( state, action ) => {
        
        state.activate = null;
        state.notes = state.notes.filter( note => note.id !== action.payload)

      },
    }
});


export const { addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
  savingNewNote,
  setPhotosToActiveNote,
  clearNotesLogout
} = journalSlice.actions;