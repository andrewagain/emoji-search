import React, { PureComponent } from "react";
import "./Footer.css"

class Footer extends PureComponent {
  render() {
    return (
        <div>
            <footer class="footer text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 mb-5 mb-lg-0">
                            <h4 class="text-uppercase mb-4">Location</h4>
                            <p class="lead mb-0">Glasgow, Scotland</p>
                        </div>
                        <div class="col-md-6 mb-5 mb-lg-0">
                            <h4 class="text-uppercase mb-4">Around the Web</h4>
                            <ul class="list-inline mb-0">
                                <li class="list-inline-item">
                                    <a class="btn btn-outline-light btn-social text-center rounded-circle" href="https://www.facebook.com/cammyshaw" target="_blank">
                                        <i class="fab fa-fw fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="btn btn-outline-light btn-social text-center rounded-circle" href="https://twitter.com/CameronShaw" target="_blank">
                                        <i class="fab fa-fw fa-twitter"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="btn btn-outline-light btn-social text-center rounded-circle" href="https://www.linkedin.com/in/cameron-shaw-71855424/" target="_blank">
                                        <i class="fab fa-fw fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

            <div class="copyright py-4 text-center text-white">
              <div class="container">
                  <small>Copyright &copy; Cameron Shaw 2019</small><br/>
                  <small>Created by using the Freelance theme from&nbsp;
                      <a href="http://startbootstrap.com">Start Bootstrap</a></small>
              </div>
            </div>

            {/*Scroll to Top Button (Only visible on small and extra-small screen sizes)*/}
            <div class="scroll-to-top d-lg-none position-fixed ">
                <a class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
                    <i class="fa fa-chevron-up"></i>
                </a>
            </div>
        </div>
    );
  }
}
export default Footer;
