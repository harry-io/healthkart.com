
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import LoginPopup from "./LoginPopup";
import image from "../../Asset/logo.png"


import "./Navbar.css";

const Navbar = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
   const navigate = useNavigate();
  // const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div>
      
      <div className="navbar">
        <div className="logo">
        
          <img
            onClick={() => navigate(`/`)}
            src={image}
            alt="logo"
          />
        </div>
        <div className="input">
          <form>
            <input
              placeholder="Search for products & brands"
              //  onClick={() => navigate('/Search')}
            />
           
          </form>
        </div>
        
        <div className="loginbtn">
          <div className="LoginPopup">
            <main>
              <button>Login</button>
            </main>
          
          </div>
        </div>
        <div className="cartlogo">
          <div id="cart-div">
         
          <svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 26C11.5523 26 12 25.3284 12 24.5C12 23.6716 11.5523 23 11 23C10.4477 23 10 23.6716 10 24.5C10 25.3284 10.4477 26 11 26Z" stroke="#1C1C28" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24 26C24.5523 26 25 25.3284 25 24.5C25 23.6716 24.5523 23 24 23C23.4477 23 23 23.6716 23 24.5C23 25.3284 23.4477 26 24 26Z" stroke="#1C1C28" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 1H5.90909L9.19818 17.9603C9.31041 18.5434 9.6178 19.0672 10.0665 19.4401C10.5153 19.8129 11.0768 20.0109 11.6527 19.9995H23.5818C24.1578 20.0109 24.7193 19.8129 25.168 19.4401C25.6168 19.0672 25.9241 18.5434 26.0364 17.9603L28 7.33318H7.13636" stroke="#1C1C28" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </div>
          
        </div>
      </div>
      <hr />
      <div className="navbar2">
        <div className="dropdown1">
          <button className="category-button drop-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12H12" stroke="#00B5B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 6H19" stroke="#00B5B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 18H16" stroke="#00B5B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          <p>Shop By Category</p>
          </button>
          
          <div className="dropdown-content">
            <div className="dropdown-content1">
              <div>
                <p>Sports Nutrition &gt;</p>
                <p>Vitamins & Supplements &gt;</p>
                <p>Ayurveda & Herbs &gt;</p>
                <p>Health Food & Drinks &gt;</p>
                <p>fitness &gt;</p>
                <p>Wellness &gt;</p>
              </div>
              <div>
                <p>Proteins</p>
                <br />
                
                  <p>Whey Protiens</p>
                
                <p>Beginners Whey Protein</p>
                <p>Whey Protein Isolate</p>
                <p>Raw Whey Proteins</p>
                <p>Plant Proteins</p>
                <p>Protein for Women</p>
                <p>Protein for Blends</p>
                <p>Casein Proteins</p>
                <p>Soy Proteins</p>
              </div>
              <div>
                <p>Gainers</p>
                <br />
                <p>Weight Gainers</p>
                <p>Mass Gainers</p>
                <p>Herbal Gainers</p>
              </div>
              <div className="Dropdownunder">
                <p>Protein Foods</p>
                <br />
                <p>Peanut Butter</p>
                <p>Muesli</p>
                <p>Protein Shakes</p>
                <p>Oats</p>
                <p>Cereals</p>
                <p>Granola</p>
                <p>Protein Bars</p>
                <p>Protein Water</p>
              </div>
              <div className="Dropdownunder">
                <p>Pre/Post Workout</p>
                <br />
                <p>Pre-Workout</p>
                <p>Creatine</p>
                <p>BCAAs</p>
                <p>Carb Blends</p>
                <p>Electrolytes</p>
                <p>EAA</p>
                <p>Nitric Oxide</p>
                <p>Other Supports</p>
                <p>Citrulline Malate</p>
              </div>
              <div className="Dropdownunder">
                <p>Workout Essentials</p>
                <br />
                <p>Fat Burners</p>
                <p>Consult Services</p>
                <p>L Carnitine</p>
                <p>Multivitamins for</p>
                <p>Bodybuilding</p>
                <p>Pre Hormone</p>
                <p>ZMA</p>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown2">
        <button className="category-button">
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5567 19.5C9.35571 19.5 8.14618 19.0402 7.23477 18.1291L3.3762 14.272C2.43924 13.3354 1.94521 12.0412 2.00483 10.7214L2.20926 6.45561C2.30296 4.42062 3.91282 2.81136 5.9571 2.70918L10.216 2.50483C11.5448 2.44523 12.831 2.93908 13.7679 3.87568L17.6265 7.7328C19.4578 9.56345 19.4578 12.5521 17.6265 14.3827L13.8872 18.1206C12.9673 19.0402 11.7662 19.5 10.5567 19.5Z" fill="#33C4C5"></path><path d="M7.5 10.5C6.12308 10.5 5 9.37692 5 8C5 6.62308 6.12308 5.5 7.5 5.5C8.87692 5.5 10 6.62308 10 8C10 9.37692 8.87692 10.5 7.5 10.5ZM7.5 6.65385C6.76154 6.65385 6.15385 7.26154 6.15385 8C6.15385 8.73846 6.76154 9.34615 7.5 9.34615C8.23846 9.34615 8.84615 8.73846 8.84615 8C8.84615 7.26154 8.23846 6.65385 7.5 6.65385Z" fill="white"></path><path d="M10.6802 15.5C10.5073 15.5 10.3344 15.4363 10.1979 15.2999C9.93403 15.0362 9.93403 14.5996 10.1979 14.3358L13.8376 10.6978C14.1015 10.4341 14.5382 10.4341 14.8021 10.6978C15.066 10.9616 15.066 11.3981 14.8021 11.6619L11.1624 15.2999C11.0259 15.4363 10.853 15.5 10.6802 15.5Z" fill="white"></path></svg>
          <p>Best Seller</p>
          </button>
          <div className="dropdown-content2">
            <div>
              <div className="dropdown-content23">
                <p>Sport Nutrition &gt;</p>
                <p>Health Nutrition &gt;</p>
                <p>Fitness &gt;</p>
                <p>Wellness &gt;</p>
              </div>
              <div className="dropdown-content234">
                <p>Protein Powder</p>
                <p>Whey Protein</p>
                <p>Whey Protein Isolate</p>
                <p>Mass Gainer</p>
                <p>BCAA</p>
                <p>Fat Burners</p>
                <p>Pre Workout</p>
                <p>Creatine</p>
                <p>Protein Bars</p>
                <p>Weight Gainer</p>
                <p>Carb Blends</p>
                <p>Other Support</p>
                <p>Casein Protein</p>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown3">
          <button className="category-button">
              <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 6.36341C12.9964 4.67688 12.3101 3.06049 11.0916 1.86783C9.87316 0.675247 8.22173 0.00371928 6.49847 0C0.435452 0 -2.28802 7.47812 2.30352 11.231V17.3105C2.30462 17.4853 2.37331 17.6533 2.4957 17.7805C2.61823 17.9078 2.78531 17.9851 2.96342 17.9967C3.1417 18.0085 3.31793 17.9537 3.45657 17.8437L6.49859 15.3924L9.5335 17.8435C9.63709 17.9264 9.76247 17.9789 9.89512 17.9949C10.0279 18.0108 10.1625 17.9896 10.2834 17.9336C10.4052 17.8785 10.5083 17.7907 10.5809 17.6803C10.6536 17.57 10.6927 17.4417 10.6937 17.3105V11.231C12.1564 10.0193 13 8.23907 13 6.36341ZM9.27195 15.8424L7.39722 14.3261C7.14345 14.1207 6.82447 14.0081 6.49524 14.0081C6.16584 14.0081 5.84686 14.1207 5.59327 14.3261L3.71853 15.8424V12.1173C5.4772 12.9272 7.51316 12.9272 9.27219 12.1173L9.27195 15.8424ZM3.56265 6.14856C3.4229 6.0161 3.37253 5.81734 3.43269 5.63637C3.49286 5.45538 3.65313 5.3237 3.84564 5.29696L5.08367 5.13081C5.25153 5.10577 5.39665 5.00253 5.47277 4.85385L6.02449 3.74597C6.11277 3.57689 6.29042 3.47055 6.48433 3.47055C6.67841 3.47055 6.8559 3.57689 6.94417 3.74597L7.50302 4.85385C7.57581 5.00222 7.71888 5.10593 7.88516 5.13081L9.13031 5.30392C9.32281 5.33066 9.48309 5.46234 9.54326 5.64333C9.60342 5.82431 9.55289 6.02308 9.4133 6.15552L8.51476 7.02104C8.39332 7.13557 8.33774 7.30156 8.36616 7.46415L8.5784 8.67588C8.60398 8.85455 8.52881 9.03276 8.38211 9.14186C8.23541 9.25098 8.03992 9.27401 7.87093 9.20214L6.75324 8.62751C6.60481 8.55116 6.42763 8.55116 6.27917 8.62751L5.16149 9.20214C4.98778 9.31991 4.75802 9.32038 4.58369 9.20368C4.40951 9.08684 4.32692 8.87695 4.37619 8.67586L4.58842 7.46413C4.62001 7.30262 4.56695 7.13631 4.44694 7.02102L3.56265 6.14856Z" fill="#77777E"></path></svg>
              <p>Brand</p>
          </button>
          <div className="dropdown-content3">
            <div>
              <img
                src="https://img6.hkrtcdn.com/8846/bnr_884565_o.png"
                
              />
              <img
                src="https://img10.hkrtcdn.com/8846/bnr_884579_o.png"
                alt=""
               
              />
              <img
                src="https://img10.hkrtcdn.com/8846/bnr_884569_o.png"
                alt=""
               
              />
              <img
                src="https://img10.hkrtcdn.com/10848/bnr_1084799_o.png"
                alt=""
                
              />
              <img
                src="https://img2.hkrtcdn.com/8846/bnr_884581_o.png"
                alt=""
                
              />
              <img
                src="https://img8.hkrtcdn.com/8846/bnr_884587_o.png"
                alt=""
               
              />
              <img
                src="https://img2.hkrtcdn.com/10849/bnr_1084801_o.png"
                alt=""
              />
              <img
                src="https://img6.hkrtcdn.com/8846/bnr_884595_o.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="dropdown4">
        <button className="category-button">
         <img class="deal-icon" src="https://static1.hkrtcdn.com/hknext/static/media/pdp/deal-icon.svg" />
              <p>Deal</p>
          </button>
          <div className="dropdown-content4">
            <div>
              <h3>Offers & Deals</h3>
            </div>
            <div className="Deals">
              <div>
                <img
                  src="https://img5.hkrtcdn.com/20091/smn_image_2009054_o.png"
                  alt=""
                  
                />
                <p>Flash Sale</p>
              </div>
              <div>
                <img
                  src="https://img3.hkrtcdn.com/20091/smn_image_2009062_o.png"
                  alt=""
           
                />
                <p>Clearance Sale</p>
              </div>
              <div>
                <img
                  src="https://img7.hkrtcdn.com/20091/smn_image_2009056_o.png"
                  alt=""
                 
                />
                <p>Under RS2999</p>
              </div>
              <div>
                <img
                  src="https://img9.hkrtcdn.com/20091/smn_image_2009058_o.png"
                  alt=""
                 
                />
                <p>Under RS1999</p>
              </div>
              <div>
                <img
                  src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/crazy.svg"
                  alt=""
                  // onClick={() => navigate("/health")}
                />
                <p>Crazy Deals</p>
              </div>
            </div>
          </div>
        </div>
        <div> 
          <p>Blogs</p>
        </div>
        <div>
          <p >Gift Card</p>
        </div>
        <div className="dropdown7">
          <p>customer Support</p>
          <div className="dropdown-content7">
            <div className="support1">
              <p>Chat with us</p>
              <p>Email us</p>
              <p>Ask our Experts</p>
              <p>Returns policy</p>
              <p>FAQS</p>
              <p>Terms & Conditions</p>
            </div>
            <div className="support2">
              <p>For Support & Order Enquiries</p>
              <p>Call us at : 1024-4616444</p>
              <p>10 AM to 7 PM</p>
            </div>
          </div>
        </div>
        <div>
          <p>Store Locator</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
