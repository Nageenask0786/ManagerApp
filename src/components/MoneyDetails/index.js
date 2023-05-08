// Write your co
import './index.css'

const MoneyDetails = props => {
  const {balance, expenses, income} = props
  return (
    <div className="container">
      <div className="card1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div>
          <p className="head">Your Balance</p>

          <p data-testid="balanceAmount">Rs {balance}</p>
        </div>
      </div>
      <div className="card2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />
        <div>
          <p className="head">Your Income</p>

          <p data-testid="incomeAmount">Rs {income}</p>
        </div>
      </div>
      <div className="card3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
        <div>
          <p className="head">Your Expenses</p>

          <p data-testid="expensesAmount">Rs {expenses}</p>
        </div>
      </div>
    </div>
  )
}



export default MoneyDetails
