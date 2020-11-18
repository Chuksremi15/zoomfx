import React from 'react';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';

const Users = ({data}) => {
  return (
    <div class='my-3'>
      <div className='row'>
        <div className='container'>
          <div className='col-sm-12'>
            <div className='card'>
              <div className='card-header'>
                <h4>Users</h4>
              </div>
              <div className='table-responsive'>
                <table className='table table-striped'>
                  <thead className='thead-inverse'>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Date Created</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length > 0 &&
                      data.map(($data, index) => (
                        <tr>
                          <td scope='row'>{(index += 1)}</td>
                          <td>
                            {$data.name.firstname} {$data.name.lastname}
                          </td>
                          <td>{$data.email}</td>
                          <td>
                            <Moment format='YYYY/MM/DD'>{$data.Date}</Moment>
                          </td>
                          <td>
                            <Link
                              to={`/user/${$data._id}`}
                              className='btn btn-secondary'
                            >
                              <i className='fa fa-angle-double-right'></i>{' '}
                              Details
                            </Link>
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
    </div>
  );
};

export default Users;
