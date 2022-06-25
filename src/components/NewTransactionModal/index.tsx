import Modal from 'react-modal'

export function NewTransactionModal (){
  return(
    <Modal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
        >
        <h2>Cadastral Transação</h2>
    </Modal>
  )
}


