import { Container } from "./styles";

import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
import { useContext } from "react";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary () {

  const { transactions } = useTransactions();

  const summary = transactions.reduce((accumulated, transaction) => {

    if (transaction.type === 'deposit') {
      accumulated.deposit += transaction.amount;
      accumulated.total += transaction.amount;
    } else {
      accumulated.withdraw += transaction.amount;
      accumulated.total -= transaction.amount;
    }

    return accumulated;

  },{
    deposit: 0,
    withdraw: 0,
    total: 0
  });

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(summary.deposit)}</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>-{new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(summary.withdraw)}</strong>
      </div>

      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(summary.total)}</strong>
      </div>
    </Container>
  );
}