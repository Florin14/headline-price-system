import React from "react";
import "./MainComponent.css";
import StylingInspo from "./StylingInspo";

const MainComponent: React.FC = () => {
  return (
    <div className="price-container-main">
      <div className="header">
        <div className="logo-container">
          <div className="headline-logo">
            <div className="headline-image"></div>
          </div>
          <div className="x-symbol">×</div>
          <div className="untold-logo">
            <div className="untold-image"></div>
          </div>
        </div>
        <h2 className="studio-academy">HEADLINE STUDIO & ACADEMY</h2>

        <div className="event-badge">
          <div className="badge-content">UNTOLD X 2025 • Cluj-Napoca</div>
          <div className="badge-glow"></div>
        </div>
        {/* <div className="main-description">
          Transformă-ți părul în opera de artă pentru Untold X. Coafuri
          spectaculoase
          <br />
          care rezistă toată noaptea și te fac să strălucești în mulțime.
        </div> */}
      </div>

      <div className="pricing-grid">
        {/* Services */}
        <div className="pricing-column">
          <div className="pricing-header">
            <div className="icon-circle">
              <div className="hairstyle-icon"></div>
            </div>
            <div className="service-title">SERVICES</div>
          </div>

          <div className="service-item">
            <div className="service-info">
              <div className="service-name">Braids & Styling</div>
              <div className="service-description">
                Împletituri/coafat simplu - pe păr natural
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
              <div className="service-name">Braids & Styling & Accessories</div>
              <div className="service-description">
                Împletituri/coafat cu accesorii de păr, sclipici, spray colorat.
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
              <div className="service-name">Extensions Braids</div>
              <div className="service-description">
                Împletituri/look-uri cu extensii colorate
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
              <div className="service-name">Full Festival Look</div>
              <div className="service-description">
                Pachet complet cu extensii colorate, accesorii, etc pentru cel
                mai tare look din festival
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
      <StylingInspo />

      <div className="stylists-section">
        <h2 className="stylists-title">OUR FESTIVAL STYLISTS</h2>
        <div className="stylists-grid">
          <div className="stylist-card">
            <a
              href="https://www.instagram.com/headline.studioacademy?igsh=aHdodGY2ZW9vZmpp"
              target="_blank"
              rel="noopener noreferrer"
              className="stylist-link"
            >
              <div className="instagram-icon"></div>
              <div className="stylist-info">
                <h3>@headline.studioacademy</h3>
              </div>
            </a>
          </div>

          <div className="stylist-card">
            <a
              href="https://www.instagram.com/iuliagujba/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="instagram-icon"></div>
              <div className="stylist-info">
                <h3>@iuliagujba</h3>
              </div>
            </a>
          </div>

          <div className="stylist-card">
            <a
              href="https://www.instagram.com/luizaconstantin?igsh=MWhpeXd6Z2owbHUxYg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="instagram-icon"></div>
              <div className="stylist-info">
                <h3>@luizaconstantin</h3>
              </div>
            </a>
          </div>

          <div className="stylist-card">
            <a
              href="https://www.instagram.com/roxanaa.08?igsh=MTlvNmxwNTM0cTlpMQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="instagram-icon"></div>
              <div className="stylist-info">
                <h3>@roxanaa.08</h3>
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
