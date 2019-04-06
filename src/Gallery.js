import React, {PureComponent} from "react";
import "./Gallery.css"
import amigo from './drawings/amigo.jpg'
import burger from './drawings/burger.jpg'
import cat from './drawings/cat.jpg'
import coffee from './drawings/coffee.jpg'
import ginger from './drawings/ginger.jpg'
import glen from './drawings/glen.jpg'
import hornet from './drawings/hornet.jpg'
import maninred from './drawings/maninred.jpg'

class Gallery extends PureComponent {
    render() {
        return (
            <section class="portfolio" id="gallery">
                <div class="container">
                    <h2 class="text-center text-uppercase text-secondary mb-0">Gallery</h2>
                    <hr class="star-dark mb-5"/>
                        <div class="row">
                            <div class="col-md-6 col-lg-4">
                                <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-1">
                                    <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                        <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                            <i class="fas fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img class="img-fluid" src={amigo} alt=""/>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-2">
                                    <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                        <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                            <i class="fas fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img class="img-fluid" src={burger} alt=""/>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-3">
                                    <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                        <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                            <i class="fas fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img class="img-fluid" src={cat} alt=""/>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-4">
                                    <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                        <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                            <i class="fas fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img class="img-fluid" src={coffee} alt=""/>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-5">
                                    <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                        <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                            <i class="fas fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img class="img-fluid" src={ginger} alt=""/>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-6">
                                    <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                        <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                            <i class="fas fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img class="img-fluid" src={glen} alt=""/>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-6">
                                    <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                        <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                            <i class="fas fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img class="img-fluid" src={hornet} alt=""/>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-6">
                                    <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                        <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                            <i class="fas fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img class="img-fluid" src={maninred} alt=""/>
                                </a>
                            </div>
                        </div>
                </div>

            </section>
        );
    }
}
export default Gallery;