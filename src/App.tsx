import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import './App.css';


type Tab = 'screening' | 'partnership';

const PulsePointLanding: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('screening');
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showPartnerModal, setShowPartnerModal] = useState(false);

  const handleScheduleClick = () => {
    setShowScheduleModal(true);
  };

  const handlePartnerClick = () => {
    setShowPartnerModal(true);
  };

  const closeModals = () => {
    setShowScheduleModal(false);
    setShowPartnerModal(false);
  };

  return (
    <div className="min-h-screen section-light">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="logo-container">
              <img 
                src="/LOGO.png" 
                alt="PulsePoint Diagnostics Logo" 
                className="hero-logo"
              />
            </div>
            <h1 className="hero-title">
              Early Detection.
              <span className="text-gradient">
                {' '}Healthier Communities.
              </span>
            </h1>
            <p className="hero-subtitle">
              We bring mobile Ankle-Brachial Index (ABI) screenings directly to your community to 
              help detect Peripheral Artery Disease (PAD) before it becomes life-threatening.
            </p>
            <div className="hero-buttons">
              <button className="button-primary" onClick={handleScheduleClick}>
                
                Schedule a Screening
              </button>
              <button className="button-secondary" onClick={handlePartnerClick}>
                
                Partner With Us
              </button>
            </div>

          </div>
        </div>
        <div className="hero-gradient-bottom"></div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-content">
            <div className="stats-badge">
              Critical Health Statistics
            </div>
            <h2 className="stats-title">
              1 in 5 adults over 60 may have PAD. Many don't know it.
            </h2>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <div className="stats-badge">
                <span></span>
                About PulsePoint Diagnostics
              </div>
              <h2 className="section-title">
                Dedicated to improving community health
              </h2>
              <p className="section-text">
                PulsePoint Diagnostics provides <strong>accessible, non-invasive vascular screenings</strong>. 
                Our mobile services make it simple for senior centers, wellness facilities, and primary care 
                providers to offer <strong>life-saving preventive care</strong> on-site.
              </p>
              
              <div className="feature-list">
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <span>Mobile ABI screenings - fast, non-invasive, insurance-billable</span>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <span>Community health events for underserved populations</span>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <span>Partnership programs with revenue opportunities</span>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <span>Educational resources and prevention tools</span>
                </div>
              </div>
            </div>
            
            <div className="pad-info-card">
              <h3 className="card-title">What is PAD?</h3>
              <p className="card-text">
                Peripheral Artery Disease (PAD) is a circulatory condition where narrowed arteries 
                reduce blood flow to the legs. PAD increases the risk of <strong>heart attack, stroke, 
                and amputation</strong> — often without obvious symptoms.
              </p>
              
              <h4 className="warning-title">Common Warning Signs:</h4>
              <ul className="warning-list">
                <li className="warning-item">
                  <div className="warning-bullet"></div>
                  <span>Leg pain when walking</span>
                </li>
                <li className="warning-item">
                  <div className="warning-bullet"></div>
                  <span>Slow-healing wounds on feet or toes</span>
                </li>
                <li className="warning-item">
                  <div className="warning-bullet"></div>
                  <span>Coldness in one leg compared to the other</span>
                </li>
                <li className="warning-item">
                  <div className="warning-bullet"></div>
                  <span>Numbness or weakness in legs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Why Choose PulsePoint?
            </h2>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3 className="feature-title">Convenient</h3>
              <p className="feature-desc">We come to you — no extra staff or equipment needed.</p>
            </div>
            
            <div className="feature-card">
              <h3 className="feature-title">Accurate</h3>
              <p className="feature-desc">Simple ABI testing detects PAD early.</p>
            </div>
            
            <div className="feature-card">
              <h3 className="feature-title">Affordable</h3>
              <p className="feature-desc">Covered by most insurance (CPT 93922).</p>
            </div>
            
            <div className="feature-card">
              <h3 className="feature-title">Community-Focused</h3>
              <p className="feature-desc">In-kind screenings available for high-risk groups.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works & Partnership Benefits */}
      <section className="tabs-section">
        <div className="container">
          <div className="tabs-header">
            <div className="tabs-nav">
              <button
                onClick={() => setActiveTab('screening')}
                className={activeTab === 'screening' ? 'tab-active' : 'tab-inactive'}
              >
                How It Works
              </button>
              <button
                onClick={() => setActiveTab('partnership')}
                className={activeTab === 'partnership' ? 'tab-active' : 'tab-inactive'}
              >
                Partnership Benefits
              </button>
            </div>
          </div>

          {activeTab === 'screening' && (
            <div className="process-grid">
              <div className="process-card">
                <div className="step-number step-blue">1</div>
                <h3 className="process-title">We Come to You</h3>
                <p className="process-desc">Our mobile team sets up at your facility, health fair, or outreach event.</p>
              </div>
              
              <div className="process-card">
                <div className="step-number step-gray">2</div>
                <h3 className="process-title">Non-Invasive Screenings</h3>
                <p className="process-desc">ABI testing takes less than 15 minutes per patient.</p>
              </div>
              
              <div className="process-card">
                <div className="step-number step-blue">3</div>
                <h3 className="process-title">Immediate Results</h3>
                <p className="process-desc">Patients and providers receive clear, easy-to-understand results.</p>
              </div>
              
              <div className="process-card">
                <div className="step-number step-gray">4</div>
                <h3 className="process-title">Follow-Up Support</h3>
                <p className="process-desc">Referral-ready forms for primary care and vascular specialists.</p>
              </div>
            </div>
          )}

          {activeTab === 'partnership' && (
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3 className="benefit-title">Revenue-Generating</h3>
                <p className="benefit-desc">ABI screening is billable (CPT 93922), creating a new income stream.</p>
              </div>
              
              <div className="benefit-card">
                <h3 className="benefit-title">Community Impact</h3>
                <p className="benefit-desc">Offer life-saving services at no extra burden to your staff.</p>
              </div>
              
              <div className="benefit-card">
                <h3 className="benefit-title">Easy Integration</h3>
                <p className="benefit-desc">We bring the equipment, staff, and reporting—minimal disruption to your workflow.</p>
              </div>
              
              <div className="benefit-card">
                <h3 className="benefit-title">Health Equity</h3>
                <p className="benefit-desc">Support underserved populations through in-kind screenings.</p>
              </div>
              
              <div className="benefit-card">
                <h3 className="benefit-title">Reputation Boost</h3>
                <p className="benefit-desc">Demonstrate leadership in preventive care and whole-person wellness.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">
            Bring Preventive Vascular Care to Your Community
          </h2>
          <p className="cta-subtitle">
            Partner with us today to bring accessible, preventive vascular health screening to your community.
          </p>
          
          <div className="contact-info">
            <div className="contact-item">
              <Phone className="contact-icon" size={24} />
              <span className="contact-text">833-STOPPAD</span>
            </div>
            <div className="contact-item">
              <Mail className="contact-icon" size={24} />
              <span className="contact-text">kent@pulsepointdiagnostics.com</span>
            </div>
          </div>
          
          <button className="cta-button" onClick={handlePartnerClick}>
            Schedule a Partnership Call →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3 className="footer-title">PulsePoint Diagnostics</h3>
              <p className="footer-location">Serving Metro Detroit</p>
            </div>
            
            <div className="footer-contact">
              <div className="footer-contact-item">
                <Phone size={16} />
                <span>833-786-7723</span>
              </div>
              <div className="footer-contact-item">
                <Mail size={16} />
                <span>kent@pulsepointdiagnostics.com</span>
              </div>
            </div>
            
            <p className="footer-copyright">© 2025 PulsePoint Diagnostics. All rights reserved. Pulse Point Diagnostics does not bill insurance companies.</p>
          </div>
        </div>
      </footer>

      {/* Schedule Modal */}
      {showScheduleModal && (
        <div className="modal-overlay" onClick={closeModals}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModals}>×</button>
            <h2 className="modal-title">Schedule a Screening</h2>
            <p className="modal-subtitle">Contact us to schedule a mobile ABI screening at your facility</p>
            
            <div className="modal-contact-info">
              <div className="modal-contact-item">
                <Phone className="modal-icon" size={24} />
                <div>
                  <div className="modal-label">Call Us</div>
                  <a href="tel:833-786-7723" className="modal-link">833-STOPPAD</a>
                </div>
              </div>
              
              <div className="modal-contact-item">
                <Mail className="modal-icon" size={24} />
                <div>
                  <div className="modal-label">Email Us</div>
                  <a href="mailto:kent@pulsepointdiagnostics.com" className="modal-link">kent@pulsepointdiagnostics.com</a>
                </div>
              </div>
            </div>
            
            <div className="modal-info">
              <p>Our team typically responds within 24 hours to schedule your screening event.</p>
            </div>
          </div>
        </div>
      )}

      {/* Partner Modal */}
      {showPartnerModal && (
        <div className="modal-overlay" onClick={closeModals}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModals}>×</button>
            <h2 className="modal-title">Partner With Us</h2>
            <p className="modal-subtitle">Learn how we can bring preventive vascular care to your community</p>
            
            <div className="modal-contact-info">
              <div className="modal-contact-item">
                <Phone className="modal-icon" size={24} />
                <div>
                  <div className="modal-label">Call Us</div>
                  <a href="tel:833-786-7723" className="modal-link">833-STOPPAD</a>
                </div>
              </div>
              
              <div className="modal-contact-item">
                <Mail className="modal-icon" size={24} />
                <div>
                  <div className="modal-label">Email Us</div>
                  <a href="mailto:partnerships@pulsepointdiagnostics.com" className="modal-link">partnerships@pulsepointdiagnostics.com</a>
                </div>
              </div>
            </div>
            
            <div className="modal-info">
              <p>We'll discuss partnership opportunities, revenue sharing, and how we can support your community health goals.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PulsePointLanding;