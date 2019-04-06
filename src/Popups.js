import React, { PureComponent } from "react";
import cabin from './img/portfolio/cabin.png'
import cake from './img/portfolio/cake.png'
import circus from './img/portfolio/circus.png'
import game from './img/portfolio/game.png'
import safe from './img/portfolio/safe.png'
import submarine from './img/portfolio/submarine.png'

class Popups extends PureComponent {
  render() {
    return (
    <div>
        {/*Portfolio Modals*/}

        {/*Portfolio Modal 1*/}
        <div class="portfolio-modal mfp-hide" id="portfolio-modal-1">
            <div class="portfolio-modal-dialog bg-white">
                <a class="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
                    <i class="fa fa-3x fa-times"></i>
                </a>
                <div class="container text-center">
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                            <h2 class="text-secondary text-uppercase mb-0">Project Name</h2>
                            <hr class="star-dark mb-5"/>
                                <img class="img-fluid mb-5" src={cabin} alt=""/>
                                    <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <a class="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                                        <i class="fa fa-close"></i>
                                        Close Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/*Portfolio Modal 2*/}
        <div class="portfolio-modal mfp-hide" id="portfolio-modal-2">
          <div class="portfolio-modal-dialog bg-white">
              <a class="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
                  <i class="fa fa-3x fa-times"></i>
              </a>
              <div class="container text-center">
                  <div class="row">
                      <div class="col-lg-8 mx-auto">
                          <h2 class="text-secondary text-uppercase mb-0">Project Name</h2>
                          <hr class="star-dark mb-5"/>
                              <img class="img-fluid mb-5" src={cake} alt=""/>
                                  <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                  <a class="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                                      <i class="fa fa-close"></i>
                                      Close Project</a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        
         {/*Portfolio Modal 3*/}
        <div class="portfolio-modal mfp-hide" id="portfolio-modal-3">
          <div class="portfolio-modal-dialog bg-white">
              <a class="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
                  <i class="fa fa-3x fa-times"></i>
              </a>
              <div class="container text-center">
                  <div class="row">
                      <div class="col-lg-8 mx-auto">
                          <h2 class="text-secondary text-uppercase mb-0">Project Name</h2>
                          <hr class="star-dark mb-5"/>
                              <img class="img-fluid mb-5" src={circus} alt=""/>
                                  <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                  <a class="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                                      <i class="fa fa-close"></i>
                                      Close Project</a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        
         {/*Portfolio Modal 4*/}
        <div class="portfolio-modal mfp-hide" id="portfolio-modal-4">
          <div class="portfolio-modal-dialog bg-white">
              <a class="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
                  <i class="fa fa-3x fa-times"></i>
              </a>
              <div class="container text-center">
                  <div class="row">
                      <div class="col-lg-8 mx-auto">
                          <h2 class="text-secondary text-uppercase mb-0">Project Name</h2>
                          <hr class="star-dark mb-5"/>
                              <img class="img-fluid mb-5" src={game} alt=""/>
                                  <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                  <a class="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                                      <i class="fa fa-close"></i>
                                      Close Project</a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        
         {/*// Portfolio Modal 5*/}
        <div class="portfolio-modal mfp-hide" id="portfolio-modal-5">
          <div class="portfolio-modal-dialog bg-white">
              <a class="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
                  <i class="fa fa-3x fa-times"></i>
              </a>
              <div class="container text-center">
                  <div class="row">
                      <div class="col-lg-8 mx-auto">
                          <h2 class="text-secondary text-uppercase mb-0">Project Name</h2>
                          <hr class="star-dark mb-5"/>
                              <img class="img-fluid mb-5" src={safe} alt=""/>
                                  <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                  <a class="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                                      <i class="fa fa-close"></i>
                                      Close Project</a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        
         {/*// Portfolio Modal 6*/}
        <div class="portfolio-modal mfp-hide" id="portfolio-modal-6">
          <div class="portfolio-modal-dialog bg-white">
              <a class="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
                  <i class="fa fa-3x fa-times"></i>
              </a>
              <div class="container text-center">
                  <div class="row">
                      <div class="col-lg-8 mx-auto">
                          <h2 class="text-secondary text-uppercase mb-0">Project Name</h2>
                          <hr class="star-dark mb-5"/>
                              <img class="img-fluid mb-5" src={submarine} alt=""/>
                                  <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                  <a class="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                                      <i class="fa fa-close"></i>
                                      Close Project</a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
    );
  }
}
export default Popups;
