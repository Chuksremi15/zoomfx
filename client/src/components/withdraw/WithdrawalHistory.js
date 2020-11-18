import React from 'react';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';

const WithdrawalHistory = ({paidWithdrawals}) => {
  return (
    <div>
      <div className='row'>
        <div className='col'>
          <div className='card'>
            <h4>Withdrawal History</h4>
            <div className='table-responsive'>
              <table className='table table-striped'>
                <thead>
                  <tr>
                    <th scope='col'>Plan</th>
                    <th scope='col'>Princinpal</th>
                    <th scope='col'>Payout</th>

                    <th scope='col'>Date(payout)</th>
                    <th scope='col'>Date(Withdrawal)</th>
                  </tr>
                </thead>
                <tbody>
                  {paidWithdrawals.length > 0 &&
                    paidWithdrawals.map((paidWithdrawal) => (
                      <tr key={paidWithdrawal._id}>
                        <td>{paidWithdrawal.investmentplan}</td>
                        <td>₦{paidWithdrawal.capital}</td>
                        <td>₦5{paidWithdrawal.amountaccrue}</td>
                        <td>
                          <Moment format='YYYY/MM/DD'>
                            {paidWithdrawal.Date}
                          </Moment>
                        </td>
                        <td>
                          <Moment format='YYYY/MM/DD'>
                            {paidWithdrawal.withdrawaldate}
                          </Moment>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalHistory;
