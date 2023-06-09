import React from 'react';
import { Link } from 'react-router-dom';
import Particle from './partical';
import svg from '../home_svg.svg';

const main = () => {
  return (
    <>
      <Particle id='particle' color='#fff0e5' />
      <div className='container'>
        <div className='section1'>
          <div className='section1-left'>
            <div className='logo1'>CodeFusion</div>
            <span className='tagLine'>
              Empowering Developers with Real-Time Code Collaboration.
            </span>
            <p>
              Welcome to our real-time code syncing web app, the ultimate
              solution for developers who want to collaborate seamlessly and
              efficiently. With our platform, you can work on code together with
              your team members in real-time, no matter where you are in the
              world. Say goodbye to the hassle of manually sharing code snippets
              and files through email or messaging apps.
            </p>
            <Link to='/join' className='sharebtn '>
              Share Code Now
            </Link>
          </div>
          <div className='section1-img'>
            <img src={svg} alt='' />
          </div>
        </div>
        <div className='section3'>
          <div className='card'>
            <h1>Code with your team</h1>
            <p>
              Open a Codeshare editor, write or copy code, then share it with
              friends and colleagues. Pair program and troubleshoot together.
            </p>
            <Link to='/join' className='sharebtn card-btn'>
              Hack Together
            </Link>
          </div>
          <div className='card'>
            <h1>Interview developers</h1>
            <p>
              Set coding tasks and observe in real-time when interviewing
              remotely or in person. Nobody likes writing code on a whiteboard.
            </p>
            <Link to='/join' className='sharebtn card-btn'>
              Start An Interview
            </Link>
          </div>
          <div className='card'>
            <h1>Teach people to program</h1>
            <p>
              Share your code with students and peers then educate them.
              Universities and colleges around the world use Codeshare every
              day.
            </p>
            <Link to='/join' className='sharebtn card-btn'>
              Teach Code
            </Link>
          </div>
        </div>
        <div className='section2'>
          <div className='section-text'>
            <div id='logo2'>IDE</div>
            <p>
              An online IDE for HTML, CSS, and JavaScript is a web-based
              platform that enables developers to write, edit, and test their
              code in a browser. It offers features like syntax highlighting,
              auto-completion, and real-time collaboration, making it easier to
              write clean and error-free code.
            </p>
            <Link to='/ide' className='idebtn'>
              Go to IDE
            </Link>
          </div>
          <svg
            width='201'
            height='335'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clip-path='url(#clip0)'>
              <path
                d='M200.673 89.544v245.083L.328 245.462V.38l71.805 31.956 56.145 24.99 72.395 32.218z'
                fill='#73CAFF'
                stroke='#101737'
                stroke-linejoin='bevel'
              />
              <path
                d='M95.627 170.682l-.079.078-.118-.058a19.81 19.81 0 0 0-1.152-.537c-10.683-4.655-19.977.504-22.1 12.256l-.039.222-.314-.144-.184-.085c-6.608-2.88-12.254.812-12.955 8.407l80.733 35.164c2.541-3.856 3.982-8.891 4.152-14.567.537-17.756-11.134-37.482-26.094-43.983-8.449-3.693-16.414-2.508-21.85 3.247zM200.673 107.653v48.71l-55.163-24.027c.708-7.595 6.354-11.281 12.962-8.407l.177.085.315.151.045-.223c2.123-11.784 11.417-16.911 22.099-12.262.387.17.767.353 1.147.537l.124.065.079-.085c4.63-4.917 11.128-6.495 18.215-4.544zM131.454 75.082c-.17 5.683-1.611 10.717-4.152 14.573L46.569 54.491c.7-7.594 6.347-11.28 12.955-8.406l.184.085.314.144.04-.223c1.414-7.856 6.006-12.727 12.07-13.748l56.145 24.99a46.623 46.623 0 0 1 3.177 17.749zM200.673 246.444v47.244l-49.956-21.756c.708-7.594 6.354-11.28 12.962-8.406l.184.085.314.15.039-.222c2.123-11.785 11.417-16.911 22.099-12.263.387.17.767.354 1.153.537l.118.066.079-.086a16.756 16.756 0 0 1 13.008-5.349z'
                fill='#fff'
                stroke='#101737'
                stroke-linejoin='bevel'
              />
              <path
                d='M200.417 314.77L30.195 237.043V13.933L.4.143.079 0v245.809l.275-.078 200.253 89.125.321.144'
                fill='#101737'
              />
            </g>
            <defs>
              <clipPath id='clip0'>
                <path fill='#fff' d='M0 0h201v335H0z' />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
};

export default main;
