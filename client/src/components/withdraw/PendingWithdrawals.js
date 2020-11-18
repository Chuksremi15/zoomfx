import React from 'react';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';

const PendingWithdrawals = ({pendingwithdrawals}) => {
  return (
    <div className='my-3'>
      <div className='row'>
        <div className='col'>
          <div className='card'>
            <h4>Pending Withdrawals</h4>
            <div className='table-responsive'>
              <table className='table table-striped'>
                <thead>
                  <tr>
                    <th scope='col'>Details</th>
                    <th scope='col'>Plan</th>
                    <th scope='col'>Princinpal</th>
                    <th scope='col'>Payout</th>

                    <th scope='col'>Date(payout)</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingwithdrawals.length > 0 &&
                    pendingwithdrawals.map((pendingwithdrawal) => (
                      <tr key={pendingwithdrawal._id}>
                        <td>
                          <Link
                            to={`/plan/${pendingwithdrawal._id}`}
                            className='mybtn'
                          >
                            Details
                          </Link>
                        </td>

                        <td>{pendingwithdrawal.investmentplan}</td>
                        <td>₦{pendingwithdrawal.capital}</td>
                        <td>₦5{pendingwithdrawal.amountaccrue}</td>
                        <td>
                          <Moment format='YYYY/MM/DD'>
                            {pendingwithdrawal.Date}
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

export default PendingWithdrawals;
