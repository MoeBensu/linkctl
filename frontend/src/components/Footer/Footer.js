import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PageFooter() {
  return (
    <div>
      <footer
        className="bg-dark text-center text-white"
        style={{
          position: 'absolute',
          bottom: '0',
          width: '100%',
        }}>
        <div className="p-4 pb-0">
          <section className="mb-4">
            <Link
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>

            <Link
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>

            <Link
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2020 Copyright @Moe Bin Sumait
        </div>
      </footer>
    </div>
  );
}

export default PageFooter;
