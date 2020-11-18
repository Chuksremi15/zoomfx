import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const Landing = ({auth: {isAuthenticated}}) => {
  const [navData, setNavData] = useState({
    isactive: false,
    active: false,
  });

  const {isactive, active} = navData;

  const handleToggle = () => {
    setNavData({...navData, isactive: !isactive, active: !active});
  };

  if (isAuthenticated) {
    return <Redirect to='/account-overview' />;
  }

  return (
    <div>
      <section className='navbar-section'>
        <div className='container'>
          <nav className='navbar'>
            <img src='/img/logo/logo.png' className='img-fluid' />

            <div
              onClick={handleToggle}
              className={isactive ? 'isactive   menu-toggle' : '  menu-toggle'}
              id='mobile-menu'
            >
              <span className='bar'></span>
              <span className='bar'></span>
              <span className='bar'></span>
            </div>
            <ul className={active ? 'active  nav-menu' : 'nav-menu '}>
              <li>
                <a href='#' className='nav-links'>
                  Home
                </a>
              </li>
              <li>
                <a href='#about' className='nav-links'>
                  About
                </a>
              </li>
              <li>
                <a href='#investment' className='nav-links'>
                  Investment Plans
                </a>
              </li>
              <li>
                <a href='#faq' className='nav-links'>
                  FAQ
                </a>
              </li>
              <li>
                <a href='#contact' className='nav-links'>
                  Contact Us
                </a>
              </li>
              <li>
                <Link to='/signup' className='nav-links nav-links-btn'>
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to='/signin' className='nav-links nav-links-btn'>
                  Sign In
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <section className='showcase py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <h1 className='my-md-3 text-center'>Investment Platform</h1>
              <p className='lead text-center mb-4'>
                Experts at trading alternative assets classes, Real Estate,
                Agriculture, Fintech, Finance. We provide user-friendly,
                efficient and secure trading & investment solutions.
              </p>
              <Link to='/signup' className='mybtn showcase-btn my-5 py-3 px-5'>
                GET STARTED
              </Link>
            </div>

            <div className='col-md-6 d-md-block d-none'>
              <img src='./img/gfx-a.png' alt='' className='img-fluid' />
            </div>
          </div>
        </div>
      </section>

      <section className='investment-plan' id='investment'>
        <div className='container'>
          <div className='d-flex justify-content-center pb-4'>
            <h1>Investment Plans</h1>
          </div>

          <div className='row pr-5 pl-5'>
            <div className='card text-center'>
              <img src='/img/icons/icons8-coins-96.png' className='img-fluid' />

              <h3>Gold(15%)</h3>
              <p>Investment Below ₦500,000 comes with ROI 15% of capital</p>
              <h2>Below ₦500,000</h2>
              <Link to='/signup' className='mybtn  my-3'>
                Get Started
              </Link>
            </div>

            <div className='card text-center'>
              <img src='/img/icons/icons8-cash-96.png' className='img-fluid' />
              <h3>Premium(20%)</h3>
              <p>Investment above ₦500,000 comes with ROI 20% of capital</p>
              <h2>Above ₦500,000</h2>
              <Link to='/signup' className='mybtn my-3'>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='about-us my-5 py-5' id='about'>
        <div className='container'>
          <div className='row justify-content-center text-center'>
            <h1>About Us</h1>
            <p>
              Zoomfx investment compan is more of an investment club. Club
              members pull funds together to create a working capital and
              entrust it with the company, profits are what we give back in
              return. We are expert at trading alternative asset classes, real
              estate, agriculture, finance and fintech
            </p>
            <Link
              to='/signup'
              className='mybtn btn-inline showcase-btn my-2 py-3 '
            >
              KNOW MORE
            </Link>
          </div>
        </div>
      </section>

      <section id='faq'>
        <div className='d-flex justify-content-center pb-4'>
          <h1>FQA</h1>
        </div>
        <div className='faq-section'>
          <div className='box'>
            <h5>How much is the minimum investment?</h5>
            <p>₦10, 000</p>
          </div>
          <div className='box'>
            <h5>How long still i start getting my Roi?</h5>
            <p>
              You cannot withdraw your investment capital until after 1 month
              complete circle of investment with zoomfx. Thereafter, you can
              choose from our flexible withdrawal options which are withdrawing
              your ROI + capital or only your ROI
            </p>
          </div>
          <div className='box'>
            <h5>How long is the investment period?</h5>
            <p>30 Working days</p>
          </div>
          <div className='box'>
            <h5>What does Zoomfx invest invest in?</h5>
            <p>Zoomfx invest in real estate, logistics and forex</p>
          </div>
          <div className='box'>
            <h5>Is my investment safe?</h5>
            <p>
              We offer a calculated and strategic risk management policy for our
              investors and investment. Also, every investor is issued a binding
              document of understanding that binds investment agreement between
              Zoomfx and the investor
            </p>
          </div>
          <div className='box'>
            <h5>How do i withdraw my investment?</h5>
            <p>
              withdrawals will be paid to the account details provided in your
              profile
            </p>
          </div>
        </div>
      </section>

      <footer className='footer py-5'>
        <div className='container grid grid-3'>
          <div>
            <Link to='/'>
              <img
                src='/img/logo/logo.png'
                className='img-fluid  mb-2'
                height='91'
                width='150'
              />
            </Link>
            <p>Copyright &copy; 2020</p>
          </div>
          <nav>
            <ul>
              <li>
                <a href='#'>Home</a>
              </li>

              <li>
                <a href='#faq'>FAQ</a>
              </li>
              <li>
                <a href='#investment'>Investment Plans</a>
              </li>
              <li>
                <a href='#about'>About</a>
              </li>
              <li>
                <a href='#contact'>Contact Us</a>
              </li>
            </ul>
          </nav>
          <div className='social'>
            <a href=''>
              <i className='fab fa-twitter fa-2x'></i>
            </a>
            <a href=''>
              <i className='fab fa-facebook fa-2x'></i>
            </a>
            <a href=''>
              <i className='fab fa-whatsapp fa-2x'></i>
            </a>
            <a href=''>
              <i className='fab fa-instagram fa-2x'></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);
