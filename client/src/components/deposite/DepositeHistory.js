import React from 'react';
import Moment from 'react-moment';

const DepositeHistory = ({paidDeposites}) => {
  return (
    <div>
      <div className='row'>
        <div className='col'>
          <div className='card'>
            <h4>Deposite History</h4>
            <div className='table-responsive'>
              <table className='table table-striped'>
                <thead>
                  <tr>
                    <th scope='col'>Plan</th>
                    <th scope='col'>Princinpal</th>
                    <th scope='col'>Payout</th>

                    <th scope='col'>Date(payout)</th>
                    <th scope='col'>Date(Deposite)</th>
                  </tr>
                </thead>
                <tbody>
                  {paidDeposites.length > 0 &&
                    paidDeposites.map((paidDeposite) => (
                      <tr key={paidDeposite._id}>
                        <td>{paidDeposite.plan}</td>
                        <td>₦{paidDeposite.capital}</td>
                        <td>₦5{paidDeposite.amountaccrue}</td>
                        <td>
                          <Moment format='YYYY/MM/DD'>
                            {paidDeposite.Date}
                          </Moment>
                        </td>
                        <td>
                          <Moment format='YYYY/MM/DD'>
                            {paidDeposite.depositedate}
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

export default DepositeHistory;
