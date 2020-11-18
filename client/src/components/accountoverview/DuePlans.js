import React from 'react';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';

const DuePlans = ({duePlans}) => {
  return (
    <div>
      <div className='row'>
        <div className='col'>
          <div className='card'>
            <h4>Due Investment</h4>
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
                  {duePlans.length > 0 &&
                    duePlans.map((duePlan) => (
                      <tr key={duePlan._id}>
                        <td>
                          <Link to={`/plan/${duePlan._id}`} className='mybtn'>
                            Details
                          </Link>
                        </td>

                        <td>{duePlan.investmentplan}</td>
                        <td>₦{duePlan.capital}</td>
                        <td>₦{duePlan.amountaccrue}</td>
                        <td>
                          <Moment format='YYYY/MM/DD'>{duePlan.Date}</Moment>
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

export default DuePlans;
