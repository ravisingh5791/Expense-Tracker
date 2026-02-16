import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import '../../assets/styles/transactionList.css';

function Budget({ totalExpense, budgetAmount, saveBudget, currentMonth }) {
  const { register, handleSubmit, reset, formState } = useForm();
  const [formToggle, setFormToggle] = useState(false);
  const balance = budgetAmount - totalExpense < 0 ? 0 : budgetAmount - totalExpense;

  const toggleForm = (e) => {
    e.preventDefault();
    setFormToggle(!formToggle);
    reset({ amount: budgetAmount });
  };

  const onSubmit = (formData) => {
    saveBudget(formData);
    setFormToggle(!formToggle);
    reset({ amount: budgetAmount });
  };

  const data2 = [
    { name: 'Spent', value: totalExpense },
    { name: 'Balance', value: balance }
  ];

  const colors2 = ['#ea5f6f', '#0ea872'];

  return (
    <>
      <div className="chart fade-in">
        <div className="chart-top">
          <h4>Budget: Rs. {budgetAmount}</h4>
          {currentMonth.id === new Date().getMonth() + 1 && <button onClick={toggleForm}>Edit</button>}
        </div>
        <ResponsiveContainer width="100%" height={230}>
          <PieChart>
            <Pie data={data2} cx="50%" cy="64%" startAngle={180} endAngle={0} innerRadius={74} outerRadius={102} dataKey="value">
              {data2.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors2[index]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid var(--line)', boxShadow: 'var(--shadow-sm)' }} />
          </PieChart>
        </ResponsiveContainer>
        <h4>Remaining: Rs. {budgetAmount - totalExpense}</h4>
      </div>

      <div className={formToggle ? 'budget-form active' : 'budget-form'}>
        <form className="auth-form t-form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="form-title">Budget settings</h2>
          <div className="input-box floating">
            <input
              type="text"
              placeholder=" "
              {...register('amount', {
                required: 'Amount is required!',
                pattern: { value: /^[0-9.]{1,}$/g, message: 'Invalid amount!' }
              })}
            />
            <label>Amount</label>
            {formState.errors.amount && <small>{formState.errors.amount.message}</small>}
          </div>
          <div className="t-btn input-box">
            <input type="submit" value="Save" className="button button-fill" />
            <input type="submit" className="button outline" value="Cancel" onClick={(e) => toggleForm(e)} />
          </div>
        </form>
      </div>
    </>
  );
}

export default Budget;
