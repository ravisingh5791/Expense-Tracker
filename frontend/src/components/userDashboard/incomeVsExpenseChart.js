import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function IncomeVsExpenseChart({ data }) {
  return (
    <div className="statistics-chart-shell fade-in">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 0,
            bottom: 10
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="var(--line)" />
          <XAxis dataKey="monthName" tick={{ fill: 'var(--text-muted)', fontSize: 11 }} />
          <YAxis tick={{ fill: 'var(--text-muted)', fontSize: 11 }} />
          <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid var(--line)', boxShadow: 'var(--shadow-sm)' }} />
          <Legend />
          <Line type="monotone" dataKey="totalExpense" name="Expense" stroke="#ea5f6f" strokeWidth={3} activeDot={{ r: 6 }} />
          <Line type="monotone" dataKey="totalIncome" name="Income" stroke="#0ea872" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default IncomeVsExpenseChart;
