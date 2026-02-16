import incomeImg from '../../assets/images/income.png';
import expenseImg from '../../assets/images/expense.png';
import cashInHandImg from '../../assets/images/cashInHand.png';
import transactionImg from '../../assets/images/transaction.png';
import { useEffect, useMemo, useState } from 'react';

function DashboardDetailBox({ total_income, total_expense, cash_in_hand, no_of_transactions }) {
  const cards = useMemo(
    () => [
      { amount: total_income, src: incomeImg, title: 'Income', prefix: 'Rs. ' },
      { amount: total_expense, src: expenseImg, title: 'Expense', prefix: 'Rs. ' },
      { amount: cash_in_hand, src: cashInHandImg, title: 'Cash in hand', prefix: 'Rs. ' },
      { amount: no_of_transactions, src: transactionImg, title: 'No of transactions', prefix: '' }
    ],
    [total_income, total_expense, cash_in_hand, no_of_transactions]
  );

  return (
    <div className="details fade-in">
      {cards.map((card) => (
        <Box key={card.title} amount={card.amount} src={card.src} title={card.title} prefix={card.prefix} />
      ))}
    </div>
  );
}

function Box({ amount, src, title, prefix }) {
  const value = useCountUp(amount);

  return (
    <div className="metric-card">
      <div className="metric-content">
        <h2>
          {prefix}
          {value}
        </h2>
        <h4>{title}</h4>
      </div>
      <img src={src} alt={title} />
    </div>
  );
}

function useCountUp(target) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const safeTarget = Number(target || 0);
    const duration = 700;
    const start = performance.now();

    let frame;

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const nextValue = Math.round(safeTarget * progress);
      setValue(nextValue.toLocaleString('en-IN'));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return value;
}

export default DashboardDetailBox;
