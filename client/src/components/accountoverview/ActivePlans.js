import React from 'react';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';

const ActivePlans = ({activePlans}) => {
  return (
    <div className='my-3'>
      <div className='row'>
        <div className='col'>
          <div className='card'>
            <h4>Active Investment</h4>
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
                  {activePlans.length > 0 &&
                    activePlans.map((activePlan) => (
                      <tr key={activePlan._id}>
                        <td>
                          <Link
                            to={`/plan/${activePlan._id}`}
                            className='mybtn'
                          >
                            Details{' '}
                          </Link>
                        </td>

                        <td>{activePlan.investmentplan}</td>
                        <td>₦{activePlan.capital}</td>
                        <td>₦{activePlan.amountaccrue}</td>
                        <td>
                          <Moment format='YYYY/MM/DD'>{activePlan.Date}</Moment>
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

export default ActivePlans;
