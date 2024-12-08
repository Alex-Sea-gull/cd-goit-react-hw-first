import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <div>
          <table className={s.table}>
        <thead className={s.headTable}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody className={s.bodyTable}>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
