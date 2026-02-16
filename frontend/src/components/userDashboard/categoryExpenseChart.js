import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

function CategoryExpenseChart({ categorySummary }) {
  const colors = ['#ff6e6e', '#ffb26e', '#e6cd10', '#00a33c', '#6ea1ff', '#a36eff', '#ff6eff', '#6ee0ff', '#676d6e'];

  return (
    <div className="chart fade-in">
      <div className="chart-top">
        <h4>Expenses by category</h4>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie data={categorySummary} cx="50%" cy="50%" innerRadius={70} outerRadius={102} dataKey="amount" nameKey="category" labelLine={false}>
            {categorySummary.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Legend iconType="circle" />
          <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid var(--line)', boxShadow: 'var(--shadow-sm)' }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CategoryExpenseChart;
