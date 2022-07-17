import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";


export function TransactionTable (){   
  useEffect(()=> {
      api.get('transactions').then(response => console.log(response.data))
  }, [])

return (
    <Container>
        <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Categoria</th>
                    <th>Valor</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Desenvolvimento de Websites</td>
                    <td>Venda</td>
                    <td className="deposit">R$ 12.000</td>
                    <td>13/04/2002</td> 
                </tr>
                <tr>
                    <td>Aluguel</td>
                    <td>Apartamento</td>
                    <td className="withdraw">- R$ 1.000</td>
                    <td>23/05/2022</td> 
                </tr>
               
            </tbody>
        </table>
    </Container>
)

}