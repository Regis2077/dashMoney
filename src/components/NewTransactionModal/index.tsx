
import Modal from 'react-modal'
import { FormEvent, useState } from 'react';
import {  useTransaction } from '../../Hooks/useTransaction';

import closeImg from '../../assets/close.svg';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';

import { Container, NewTransactionModalTypeBtn, RadioButton } from './styles';


interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionModal ( { isOpen, onRequestClose}: NewTransactionModalProps){
  
  const { createTransaction } =  useTransaction()

  const [type, setType] = useState('deposit')

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault(); 

    await createTransaction({
        title,
        amount,
        category,
        type
      })
      
      setTitle('')
      setAmount(0)
      setCategory('')
      setType('deposit')
      onRequestClose();
  }
  return(
    <Modal 
    isOpen={isOpen} 
    onRequestClose={onRequestClose}
    overlayClassName='react-modal-overlay'
    className="react-modal-content"
    > 
      <button 
        className='react-modal-close'  
        type='button' 
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastral Transação</h2>
          <input  
            placeholder='Título'
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
          <input 
            type="number" 
            placeholder='Valor'
            value={amount}
            onChange={event => setAmount(Number(event.target.value))}
          />

          <NewTransactionModalTypeBtn>
            <RadioButton 
            type="button"
            onClick={ () => {setType('deposit')}}
            isActive = { type === 'deposit'}
            activeColor = 'green' 
            >
              <img src={income} alt="" />
              <span>Entrada</span>
            </RadioButton>

            <RadioButton 
            type="button"
            onClick={() => setType('withdraw')}
            isActive = { type === 'withdraw'}
            activeColor='red'
            >
              <img src={outcome} alt="" />
              <span>Saída</span>
            </RadioButton>
          </NewTransactionModalTypeBtn>  
          <input 
            placeholder='categoria'
            value={category}
            onChange={event => setCategory(event.target.value)}
          />
          <button type="submit">
            Cadastrar
          </button>
        </Container>
    </Modal>
  )
}


