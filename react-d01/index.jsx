/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable import/no-absolute-path */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import 'custom/components/teamMembers/Eliza_Arzanukaeva/styles/main.scss';
import ninja from './data/ninja.json';
import images from './data/images.json';
import bulkImages from './data/bulkImages.js';
// import ruth from './images/team/ruth.jpg';
// import icons from './components/icons.jsx'; 

const pageTitle = 'Eliza Arzanukaeva';
// favicon ^
function getFaviconEl() {
  return document.getElementById('favicon');
 
}

function changeFavicon() {
  const favicon = getFaviconEl();
  favicon.href = './eli.jpg';
}
// 
function PageElizaArzanukaeva(props) {
  useEffect(() => {
    props.changeSiteTitle(pageTitle);
    
    changeFavicon();

    const pageBackgroundColor = 'floralwhite';
    document
      .getElementsByClassName('mainContainer')[0]
      .setAttribute('style', `background-color: ${pageBackgroundColor}`);
    document.body.style.backgroundColor = pageBackgroundColor;
  }, []);
  return (
    <div className="page_elizaArzanukaeva">
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>       
    
      <header className="header" id="header"> 
        <div className="container">
          <div className="header_inner">
            <div className="header_logo">
              <a className="nav_link" href="https://weareowlsome.com/">
                Elis.s
              </a>

            </div>
            <nav className="nav">
              <a className="nav_link" href="https://icons.getbootstrap.com/" data-scroll="header">
              B.Icons
              </a>
              <a className="nav_link" href="http://localhost:3000/curriculum" data-scroll="features">
                Lehrplan
              </a>
              <a className="nav_link" href="https://undesign.learn.uno/generator/" data-scroll="works">
                Generators
              </a>
              <a className="nav_link" href="https://github.com/elis-11" data-scroll="/team">
                Github
              </a>
              <a className="nav_link" href="https://songdatabase.vercel.app/" data-scroll="/reviews"> 
              SDB
             </a>
              <a className="nav_link" href="http://google.com" data-scroll="/download">
              Google
              </a>
            </nav>
            <div className="header_lang">
              <a className="nav_link" href="https://www.google.com/search?q=google+translate&oq=cgoo&aqs=chrome.2.69i57j0i10l9.6316j0j7&sourceid=chrome&ie=UTF-8">
                en
              </a>
            </div>
            <div className="burger">
              <span className="burger_item"> Menu</span>
            </div>
          </div>
        </div>
        
      </header>
      <div className="intro" id="intro">
        <div className="container">
          <div className="intro_inner">
            <h1 className="intro_title">
              {' '}
              Welcome to Elisa's Page
            </h1>
            <h2 className="intro_subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Eius
              consequatur aut odio exercitationem error?Asperiores eum hic atque
              quod voluptatum?
            </h2>
            <a className="btn btn--red" href="https://vim.rtorr.com/">
              vim Cheat Sheet
            </a>
          </div>
        </div>
      </div>
      <div className="container">
      <h1>Welcome to Elisa's Page</h1>
      <hr/>
      <h2>Bulk Image Test</h2>
      <h3>Grafiken in Reihenfolge darstellen (mit JavaScript Module)</h3>

      <div className="cards2">
        <div className="bulkImageArea">
          {bulkImages.map((img) => (
            <img key={img} src={img} alt="test of bulk" className="bulkImage" />
          ))}
        </div>
        <hr />
        <h3>Einzelne Bilder anzeigen (mit JSON Datei)</h3>
        <div className="referencedImagesArea">
          <img src={images.window} alt="test" className="testImageIconWithShadow" />
          <img src={images.map} alt="test" className="testImageIcon" />
          <img src={images.lamp} alt="test" className="testImageIcon" />
          <img src={images.window} alt="test" className="testImageIcon" />
          <img src={images.map} alt="test" className="testImageIconWithShadow" />
        </div>
        </div>
      </div>
      <div className="container" id="features">
        <div className="features">
          <div className="features_item">
            <img className="features_icon" src="/img/logo/1.png" alt="icon" />
            <h4 className="features_title">Easily Customised</h4>
            <div className="features_text">
              p Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              minus dolor nisi tempore natus odio maiores ullam magnam
              excepturi, aspernatur necessitatibus harum dolores, placeat
              explicabo! Consequatur numquam hic deserunt dolores.
            </div>
          </div>
          <div className="features_item">
            <img className="features_icon" src="/img/logo/2.png" alt="icon" />
            <h4 className="features_title">Responsive Ready</h4>
            <div className="features_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              minus dolor nisi tempore natus odio maiores ullam magnam
              excepturi, aspernatur necessitatibus harum dolores, placeat
              explicabo! Consequatur numquam hic deserunt dolores.
            </div>
          </div>
          <div className="features_item">
            <img className="features_icon" src="/img/logo/3.png" alt="icon" />
            <h4 className="features_title">Modern Design</h4>
            <div className="features_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              minus dolor nisi tempore natus odio maiores ullam magnam
              excepturi, aspernatur necessitatibus harum dolores, placeat
              explicabo! Consequatur numquam hic deserunt dolores.
            </div>
          </div>
          <div className="features_item">
            <img className="features_icon" src="../" alt="icon" />
            <h4 className="features_title">Clean Code</h4>
            <div className="features_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              minus dolor nisi tempore natus odio maiores ullam magnam
              excepturi, aspernatur necessitatibus harum dolores, placeat
              explicabo! Consequatur numquam hic deserunt dolores.
            </div>
          </div>
          <div className="features_item">
            <img className="features_icon" src="/img/logo/5.png" alt="icon" />
            <h4 className="features_title">Ready to Ship</h4>
            <div className="features_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              minus dolor nisi tempore natus odio maiores ullam magnam
              excepturi, aspernatur necessitatibus harum dolores, placeat
              explicabo! Consequatur numquam hic deserunt dolores.
            </div>
          </div>
          <div className="features_item">
            <img className="features_icon" src="/img/logo/6.png" alt="icon" />
            <h4 className="features_title">Download for free</h4>
            <div className="features_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              minus dolor nisi tempore natus odio maiores ullam magnam
              excepturi, aspernatur necessitatibus harum dolores, placeat
              explicabo! Consequatur numquam hic deserunt dolores.
            </div>
          </div>
        </div>
      </div>
      <div className="works" id="work">
        <div className="works_item">
          {/* <img className="works_photo" src={world} alt="world" /> */}
          <img src={images.bloc} alt="test" className="testImageIcon" />
          <div className="works_content">
            <div className="works_title">Project Writing</div>
            <div className="works_text">Tralala</div>
          </div>
        </div>
        <div className="works_item">
          <img src={images.coffee} alt="test" className="testImageIcon" />
          {/* <img className="works_photo" src={bloc} alt="bloc" /> */}
          <div className="works_content">
            <div className="works_title">Project Coffee</div>
            <div className="works_text">Tralala</div>
          </div>
        </div>
        <div className="works_item">
          <img src={images.flower} alt="test" className="testImageIcon" />
          {/* <img className="works_photo" src={coffee} alt="coffee" /> */}
          <div className="works_content">
            <div className="works_title">Project Tipping</div>
            <div className="works_text">Tralala</div>
          </div>
        </div>
        <div className="works_item">
          <img src={images.job} alt="test" className="testImageIcon" />
          {/* <img className="works_photo" src={flower} alt="flower" /> */}
          <div className="works_content">
            <div className="works_title">Project Light</div>
            <div className="works_text">Tralala</div>
          </div>
        </div>
        <div className="works_item">
          <img src={images.light} alt="test" className="testImageIcon" />
          {/* <img className="works_photo" src={job} alt="job" /> */}
          <div className="works_content">
            <div className="works_title">Project Development</div>
            <div className="works_text">Tralala</div>
          </div>
        </div>
        <div className="works_item">
          <img src={images.pen} alt="test" className="testImageIcon" />
          {/* <img className="works_photo" src={light} alt="light" /> */}
          <div className="works_content">
            <div className="works_title">Project Teaching</div>
            <div className="works_text">Tralala</div>
          </div>
        </div>
        <div className="works_item">
          <img src={images.table} alt="test" className="testImageIcon" />
          {/* <img className="works_photo" src={pen} alt="pen" /> */}
          <div className="works_content">
            <div className="works_title">Project Learning</div>
            <div className="works_text">Tralala</div>
          </div>
        </div>
        <div className="works_item">
          <img src={images.world} alt="test" className="testImageIcon" />
          {/* <img className="works_photo" src={table} alt="table" /> */}
          <div className="works_content">
            <div className="works_title">Project Reading</div>
            <div className="works_text">Tralala</div>
          </div>
        </div>
      </div>
      
      <div className="team" id="team">
        <div className="container">
          <div className="team_inner">
            <div className="team_item">
          <img src={images.fruth} alt="test" className="testImageIcon" />
              {/* <img className="team_photo" src={fruth} alt="Fruth" /> */}
              <div className="team_name">Fruth</div>
              <div className="team_prof">Founder, CEO</div>
              <div className="team_text">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Commodi deleniti vitae, laudantium ullam possimus
                  necessitatibus{' '}
                </p>{' '}
                <p>
                  architecto commnsequatur dolorum est blanditiis, aspernatur
                  porro reiciendis nostrum dolor. Quibusdam, accusantium. Id,
                  tenetur atque?
                </p>
                <div className="social social--footer">
                  <a className="social_item" href="https://www.github.com/" target="blank">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                     <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                     </svg>
                  </a>
                  <a className="social_item" href="https://www.twitter.com/" target="blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                  </a>
                  <a className="social_item" href="https://www.linkedin.com/" target="blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                       </svg>
                  </a>
              </div>

              </div>
            </div>
            <div className="team_item">
          <img src={images.mruth} alt="test" className="testImageIcon" />
              <div className="team_name">Mruth</div>
              <div className="team_prof">Founder, CEO</div>
              <div className="team_text">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Commodi deleniti vitae, laudantium ullam possimus
                  necessitatibus{' '}
                </p>{' '}
                <p>
                  architecto consequatur dolorum est blanditiis, aspernatur
                  porro reiciendis nostrum dolor. Quibusdam, accusantium. Id,
                  tenetur atque?
                </p>
                <div className="social social--footer">
                  <a className="social_item" href="https://www.github.com/" target="blank">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                     <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                     </svg>
                  </a>
                  <a className="social_item" href="https://www.twitter.com/" target="blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                  </a>
                  <a className="social_item" href="https://www.linkedin.com/" target="blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                       </svg>
                  </a>
              </div>

              </div>
            </div>
            <div className="team_item">
          <img src={images.bruth} alt="test" className="testImageIcon" />
              <div className="team_name">Bruth</div>
              <div className="team_prof">Founder, CEO</div>
              <div className="team_text">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Commodi deleniti vitae, laudantium ullam possimus
                  necessitatibus{' '}
                </p>{' '}
                <p>
                  architecto consequatur dolorum est blanditiis, aspernatur
                  porro reiciendis nostrum dolor. Quibusdam, accusantium. Id,
                  tenetur atque?
                </p>
                <div className="social social--footer">
                  <a className="social_item" href="https://www.github.com/" target="blank">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                     <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                     </svg>
                  </a>
                  <a className="social_item" href="https://www.twitter.com/" target="blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                  </a>
                  <a className="social_item" href="https://www.linkedin.com/" target="blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                       </svg>
                  </a>
              </div>


              </div>
            </div>
            <div className="team_item">
          <img src={images.ruth} alt="test" className="testImageIcon" />
              <div className="team_name">Ruth</div>
              <div className="team_prof">Founder, CEO</div>
              <div className="team_text">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Commodi deleniti vitae, laudantium ullam possimus
                  necessitatibus{' '}
                </p>{' '}
                <p>
                  architecto consequatur dolorum est blanditiis, aspernatur
                  porro reiciendis nostrum dolor. Quibusdam, accusantium. Id,
                  tenetur atque?
                </p>
                <div className="social social--footer">
                  <a className="social_item" href="https://www.github.com/" target="blank">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                     <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                     </svg>
                  </a>
                  <a className="social_item" href="https://www.twitter.com/" target="blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                  </a>
                  <a className="social_item" href="https://www.linkedin.com/" target="blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                       </svg>
                  </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews" id="reviews">
        <div className="container">
          <div className="reviews_item">
            <div className="reviews_photo">
          <img src={images.fiona} alt="test" className="testImageIcon" />
              {/* <img className="reviews_img" src={fiona} alt="Fiona" /> */}
            </div>
            <div className="reviews_content">
              <div className="reviews_text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                atque repellat.
              </div>
              <div className="reviews_author">
                Susan Sims, Interaction Designer at XYZ
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="download" id="download">
        <div className="container">
          <h3 className="download_title">
            Are You Ready to Start?Download Now For Free!
          </h3>
          <div className="download_text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
             <a className="btn btn--red  btn--long" href="http://localhost:3000/curriculum">lehrplan</a>
        </div>
      </div>

     <footer className="footer">
       <div className="container">
          <div className="footer_inner">

              <div className="footer_block">
                   <h4 className="footer_title">Location</h4>
                   <address className="footer_adress">
                     <div>3941 Melrose Place.</div>
                     <div>Beverly Hills, CA 364738</div>
                   </address>
              </div>

               <div className="footer_block">
                <h4 className="footer_title">Share with Love</h4>
                <div className="social social--footer">
                  <a className="social_item" href="https://www.github.com/" target="blank">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                     <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                     </svg>
                  </a>
                  <a className="social_item" href="https://www.twitter.com/" target="blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                  </a>
                  <a className="social_item" href="https://www.linkedin.com/" target="blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                       </svg>
                  </a>
              </div>

              </div>

              {/* About */}
              <div className="footer_block">
                <h4 className="footer_title">About ActiveBox</h4>
                <div className="footer_text">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.Itaque
                    molestias eligendi maxime et{' '}
                  </p>
                </div>
              </div>

          </div>
        </div>
      </footer>
          
          {/* copyright */}
      <div className="copyright">
          <div className="container">
                <div className="copyright_text">
                    <div>Copyright 2021 ActiveBox.All Rights Reserved </div>
                    <div>Made with Y <span> by Tralala</span></div>
                </div>
           </div>
      </div>
      {/* <div>
        <h2>Ninja Belts</h2>
        {ninja.belts.map((belt) => {
          return (
            <>
              <div>
                {belt.title} ({belt.description})
              </div>
            </>
          );
        })}
      </div> */}
    </div>
  )
}

export default PageElizaArzanukaeva;
