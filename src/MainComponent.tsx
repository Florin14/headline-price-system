import React from "react";
import "./MainComponent.css";

const MainComponent: React.FC = () => {
  return (
    <div className="price-container-main">
      <div className="header">
        {/* <h1 className="headline-title">HEADLINE</h1>
        <h2 className="studio-academy">STUDIO ACADEMY</h2>

        */}
        <div className="event-badge">
          <div className="badge-content">UNTOLD X 2025 • Cluj-Napoca</div>
        </div>
        <div className="main-description">
          Transformă-ți părul în opera de artă pentru Untold X. Coafuri
          spectaculoase
          <br />
          care rezistă toată noaptea și te fac să strălucești în mulțime.
        </div>
      </div>

      <div className="pricing-grid">
        {/* Services */}
        <div className="pricing-column">
          <div className="pricing-header">
            <div className="icon-circle">
              <div className="creative-icon"></div>
            </div>
            <div className="service-title">SERVICES</div>
          </div>

          <div className="service-item">
            <div className="service-info">
              <div className="service-name">
                Braids & styling
              </div>
              <div className="service-description">
                Styling complet + accesori "antifuz" je
              </div>
              {/* <div className="service-duration">
                <div className="duration-icon"></div>
                <span>2.5 h</span>
              </div> */}
            </div>
            <div className="service-price">
              <div className="price">180</div>
              <div className="currency">RON</div>
            </div>
          </div>

          <div className="service-item">
            <div className="service-info">
              <div className="service-name">Braids-styling & accesories</div>
              <div className="service-description">
                Stilizare icondoană pentru grupuri
              </div>
              {/* <div className="service-duration">
                <div className="duration-icon"></div>
                <span>4 h</span>
              </div> */}
            </div>
            <div className="service-price">
              <div className="price">200</div>
              <div className="currency">RON</div>
            </div>
          </div>

          <div className="service-item">
            <div className="service-info">
              <div className="service-name">Extensions braids</div>
              <div className="service-description">
                Rezultate rapida pentru after party
              </div>
              {/* <div className="service-duration">
                <div className="duration-icon"></div>
                <span>20 min</span>
              </div> */}
            </div>
            <div className="service-price">
              <div className="price">250</div>
              <div className="currency">RON</div>
            </div>
          </div>

          <div className="service-item">
            <div className="service-info">
              <div className="service-name">Full festival look</div>
              <div className="service-description">
                Styling pentru zodinte folia
              </div>
              {/* <div className="service-duration">
                <div className="duration-icon"></div>
                <span>90 min</span>
              </div> */}
            </div>
            <div className="service-price">
              <div className="price">350</div>
              <div className="currency">RON</div>
            </div>
          </div>
        </div>
      </div>

      <div className="stylists-section">
        <h2 className="stylists-title">OUR FESTIVAL STYLISTS</h2>
        <div className="stylists-grid">
          <div className="stylist-card">
            <a
              href="https://www.instagram.com/untold.hairstylist1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="stylist-image-container">
                <div className="stylist-image stylist-1"></div>
                <div className="instagram-icon"></div>
              </div>
              <div className="stylist-info">
                <h3>Alex Neon</h3>
                <p>Color Specialist</p>
              </div>
            </a>
          </div>

          <div className="stylist-card">
            <a
              href="https://www.instagram.com/untold.hairstylist2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="stylist-image-container">
                <div className="stylist-image stylist-2"></div>
                <div className="instagram-icon"></div>
              </div>
              <div className="stylist-info">
                <h3>Maria Waves</h3>
                <p>Braids & Extensions</p>
              </div>
            </a>
          </div>

          <div className="stylist-card">
            <a
              href="https://www.instagram.com/untold.hairstylist3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="stylist-image-container">
                <div className="stylist-image stylist-3"></div>
                <div className="instagram-icon"></div>
              </div>
              <div className="stylist-info">
                <h3>David Glitz</h3>
                <p>Festival Styling</p>
              </div>
            </a>
          </div>

          <div className="stylist-card">
            <a
              href="https://www.instagram.com/untold.hairstylist4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="stylist-image-container">
                <div className="stylist-image stylist-4"></div>
                <div className="instagram-icon"></div>
              </div>
              <div className="stylist-info">
                <h3>Elena Crystal</h3>
                <p>Creative Director</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-content">
          <span>Hair Styling Specialist</span>
          <span className="dot">•</span>
          <span>Festival Ready</span>
          <span className="dot">•</span>
          <span>7 – 10 august</span>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
