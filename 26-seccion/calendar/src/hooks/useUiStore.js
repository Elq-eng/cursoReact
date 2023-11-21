import { useDispatch, useSelector } from "react-redux"
import { onOpenDateModal,oncloseDateModal} from "../store";


export const useUiStore = () =>{

  const dispatch = useDispatch()
  const { isDateModalOpen } =  useSelector( state => state.ui);
  
  const openDateModal = () =>{
    dispatch( onOpenDateModal() )
  }

  const closeDateModal = () =>{
    dispatch( oncloseDateModal() )
  }

  const toggleDateModal = () => {
    (isDateModalOpen) ? openDateModal() : closeDateModal()
  }

  return {
    // *propiedades
    isDateModalOpen,
    // *metodos
    openDateModal,
    closeDateModal,
    toggleDateModal
  }

}