import React from 'react';
import SideNav from './SideNav';

const Spinner = () => {
  return (
    <div>
      <SideNav />
      <section>
        <div className='content-page'>
          <div className='content spinner-content'>
            <div className='row container'>
              <img src='./img/spinner.gif' alt='' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Spinner;
