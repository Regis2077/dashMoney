import logoImg from '../../assets/logo.svg'

import { Container, Content } from '../Header/styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export function Header ({ onOpenNewTransactionModal }: HeaderProps) {
    return(
        <Container>
            <Content>
                <img src={logoImg} className="header__icon" alt=" icone dash money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>
            </Content>
            
        </Container>
    )

}

