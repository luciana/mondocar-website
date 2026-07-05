import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header, Footer } from '../../Components/index';

const duties = [
  'Assist customers with professionalism, honesty, and excellent communication.',
  'Help manage daily shop operations using shop management software.',
  'Perform automotive maintenance and repair work based on your experience.',
  'Support vehicle inspections and diagnostics alongside experienced technicians.',
  'Coordinate with the team to keep work flowing efficiently.',
  'Maintain a clean, organized, and professional work environment.',
  'Deliver the outstanding customer experience that has made our shop successful for years.',
];

const traits = [
  'Friendly and enjoys working with customers.',
  'Honest and dependable.',
  'Organized and detail-oriented.',
  'Self-motivated with a positive attitude.',
  'Comfortable using computers and learning new software.',
  'Eager to learn and continue developing their automotive skills.',
];

const qualifications = [
  'At least 2 years of automotive repair experience or equivalent mechanical knowledge.',
  'Valid driver\'s license.',
  'Mechanical aptitude and a willingness to learn.',
  'Comfortable working on domestic, import, European, diesel, and light truck vehicles.',
];

const benefits = [
  'Family-owned business where you\'re treated with respect.',
  'Monday through Friday schedule — no weekends.',
  'Clean, air-conditioned, state-of-the-art facility.',
  'Loyal customer base built on honesty, trust, and quality workmanship.',
  'Learn from experienced technicians in a supportive environment.',
  'Opportunity to grow your skills and build a long-term career.',
  'Uniforms provided.',
  'Paid holidays.',
  'Work with a team that genuinely enjoys what they do.',
];

function HiringList({ title, items }) {
  return (
    <section className="hiring-section-card">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default function HiringPage() {
  const location = useLocation();

  useEffect(() => {
    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search + location.hash,
      page_search: location.search,
      page_hash: location.hash,
    });
  }, [location]);

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <main className="hiring-page bg-light">
        <section className="hiring-hero">
          <div className="container">
            <p className="hiring-eyebrow">Mondo Car Repair – Twinsburg, OH</p>
            <h1>We are Hiring an Automotive Technician</h1>
            <p className="hiring-lead">Join a shop where quality, honesty, and craftsmanship come first.</p>
          </div>
        </section>

        <section className="container hiring-content">
          <div className="hiring-intro-card">
            <p>
              Mondo Car Repair is a family-owned, state-of-the-art automotive repair shop in Twinsburg,
              Ohio, looking for a motivated Service Advisor / Automotive Technician to work on all makes
              and models.
            </p>
            <p>
              We're an independent three-bay shop built on long-term customer relationships, honest
              recommendations, and exceptional workmanship. Our customers trust us, and we take pride in
              earning that trust every day.
            </p>
            <p>
              If you enjoy working with people as much as working on vehicles, want to continue growing
              your mechanical skills, and are looking for a workplace where you can learn, we'd love to
              meet you.
            </p>
          </div>

          <HiringList title="What You'll Do" items={duties} />
          <HiringList title="We're Looking for Someone Who Is" items={traits} />
          <HiringList title="Qualifications" items={qualifications} />
          <HiringList title="Why Join Mondo Car Repair?" items={benefits} />

          <section className="hiring-section-card hiring-note">
            <p>
              Our owner has a special appreciation for Italian automotive engineering and craftsmanship,
              and we share a passion for quality work across all makes and models.
            </p>
          </section>

          <section className="hiring-contact-card" id="contact-hiring">
            <h2>Call, Email or Stop By</h2>
            <address>
              <strong>Location:</strong><br />
              Mondo Car Repair<br />
              9347 Ravenna Road, Unit E<br />
              Twinsburg, OH 44087
            </address>
            <div className="hiring-actions">
              <a className="btn btn-primary btn-xl text-uppercase" href="tel:13304050555">Call (330) 405-0555</a>
              <a className="btn btn-success btn-xl text-uppercase" href="mailto:autoservice@mondocaronline.com">Email Us</a>
            </div>
          </section>
        </section>
      </main>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
