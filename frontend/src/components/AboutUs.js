import React from 'react';
import Header from './Header';
import Footer from './Footer';

function AboutUs() {
  return (
    <div>
      <Header />
      <main className="About-Us">
        <div className="about-us-content">
          <h1>About Us</h1>
          <p>Whisk & Wonder Pastry has been a leading bakery in Addis Ababa, offering handcrafted <br />pastries, cakes, and confections made with the finest ingredients. Learn more about us <br />and discover our exceptional flavors, commitment to quality, and passion for creating the perfect<br /> sweet treats.</p>
        </div>

        <div className="about-us-img">
          <div className="image1">
            <div className="about-us-image1">
              <img src="https://i.pinimg.com/736x/f1/3e/a7/f13ea799e3a4b4a67eff01eba9f632d0.jpg" alt="image of bakery interior" />
            </div>
            <div className="about-us-imgage1-story">
              <h2>A Legacy of Excellence</h2>
              <p>At Whisk & Wonder, we offer an exquisite selection of specialty cakes, pastries, cookies, croissants, and beverages. Whether you crave a sweet indulgence or need a cozy hangout spot, we have something for everyone.
                Our modern setup and welcoming ambiance make our cafe the perfect place to relax and enjoy high-quality pastries. Additionally, our creative and innovative cake designs showcase unique themes and flavors, making every dessert a masterpiece.</p>
            </div>
          </div>

          <div className="image2">
            <div className="about-us-image2-story">
              <h2>Commitment to Quality and Innovation</h2>
              <p>From sourcing to serving, our essential ingredients—the finest and freshest—are obtained from trusted and reputable local and global suppliers. But what distinguishes us from the competition is our commitment to making you satisfied.
                Whether you're stopping by for a morning pastry and coffee or settling in for a leisurely afternoon snack, the times you spend at our cozy and inviting patisserie are fulfilling.</p>
            </div>
            <div className="about-us-image2">
              <img src="https://i.pinimg.com/736x/f3/40/aa/f340aa237513bc33d67074f674b2305a.jpg" alt="image of pastry" />
            </div>
          </div>

          <div className="image3">
            <div className="about-us-image3">
              <img src="https://i.pinimg.com/736x/3e/84/00/3e840061c59a431fcd6e6ccb91c60970.jpg" alt="image of chef baking" />
            </div>
            <div className="about-us-image3-story">
              <h2>Passion for Perfection</h2>
              <p>Not only are our pastry chefs highly skilled, but they also have a great deal of passion for what they do. To create unique and tasty pastries that you won't find anywhere else, they are always experimenting with new tastes and ingredients.
                Attention to detail is the secret to making pastries that are genuinely remarkable. Every aspect of our pastries is meticulously planned and constructed, from the ideal sweetness balance to the texture and presentation.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AboutUs;
