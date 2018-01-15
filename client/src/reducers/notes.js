const notes = (state = [], action) => {
  switch(action.type) {
    case 'ADD_NOTE':
      return action.note;
    case 'FETCH_NOTES_BY_ID':
      return action.notes.map(note => {
        if(action.meta.recipient_id === note.recipient_id)
          return note
        return note
      });
    case 'DELETE_NOTE':
      return state.filter( note => note.id !== action.id )
    case 'EDIT_NOTE':
      return state.map( note => {
        if(note.id === action.note.id)
          return action.note;
        return note;
      });
    default:
      return state;
  }
}

export default notes
