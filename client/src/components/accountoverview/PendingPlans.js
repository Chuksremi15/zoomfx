import React from 'react';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';

const PendingPlans = ({pendingPlans}) => {
  return (
    <div className='my-3'>
      <div className='row'>
        <div className='col'>
          <div className='card'>
            <h4>Pending Investment</h4>
            <div className='table-responsive'>
              <table className='table table-striped'>
                <thead>
                  <tr>
                    <th scope='col'>View Details</th>
                    <th scope='col'>Plan</th>
                    <th scope='col'>Princinpal</th>
                    <th scope='col'>Payout</th>

                    <th scope='col'>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingPlans.length > 0 &&
                    pendingPlans.map((pendingPlan) => (
                      <tr key={pendingPlan._id}>
                        <td>
                          <Link
                            to={`/deposite-request/${pendingPlan._id}`}
                            className='mybtn'
                          >
                            Deposite
                          </Link>
                        </td>

                        <td>{pendingPlan.investmentplan}</td>
                        <td>₦{pendingPlan.capital}</td>
                        <td>₦{pendingPlan.amountaccrue}</td>
                        <td>
                          <Moment format='YYYY/MM/DD'>
                            {pendingPlan.Date}
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

export default PendingPlans;
