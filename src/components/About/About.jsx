import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faChartPie, faTruckFast, faUserClock, faHouseLaptop, faPhone } from '@fortawesome/free-solid-svg-icons';
import AboutImage from '../../assets/about/about_img.jpg';

export default function About() {
    // Icons
    const faBusinessIcon = <FontAwesomeIcon icon={faBusinessTime} />
    const faChartPieIcon = <FontAwesomeIcon icon={faChartPie} />
    const faTruckFastIcon = <FontAwesomeIcon icon={faTruckFast} />
    const faUserClockIcon = <FontAwesomeIcon icon={faUserClock} />
    const faHouseLaptopIcon = <FontAwesomeIcon icon={faHouseLaptop} />
    const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />

    return (
        <>
            <section id="about">
                <div class="container">
                    <div className="title_headling">
                        <h3>We Provide Unique and Impactful Ideas!</h3>
                        <p>We believe in choosing the right goals, not just avoiding pain or chasing comfort.</p>

                    </div>
                    <div className="about_box_wrapper">
                        <div className="about_box">
                            <div className="about_icon">
                                {faBusinessIcon}
                            </div>
                            <div className="about_content">
                                <h5>Development</h5>
                                <p>We help you understand the root of your business challenges so you can act with clarity and confidence.</p>

                            </div>
                        </div>
                        <div className="about_box">
                            <div className="about_icon green_icon">
                                {faChartPieIcon}
                            </div>
                            <div className="about_content">
                                <h5>Integration</h5>
                                <p>Our team ensures smooth integration of tools and systems to simplify your business operations.</p>

                            </div>
                        </div>
                        <div className="about_box">
                            <div className="about_icon blue_icon">
                                {faTruckFastIcon}
                            </div>
                            <div className="about_content">
                                <h5>Branding</h5>
                                <p>We build strong and memorable brands that leave a lasting impact on your customers.</p>

                            </div>
                        </div>
                    </div>

                    <div className="about_box_details">
                        <div className="about_col">
                            <div className="about_image">
                                <img src={AboutImage} alt="about" className="about_main" />
                            </div>
                            <div className="img_info__box">
                                <h6 className="img_info__title">GET A PRICE QUOTE TODAY!</h6>
                                <p>No hidden costs or confusion — just transparent pricing tailored to your business goals.</p>

                                <a href="/">{faPhoneIcon} <span>1-800-654-3210</span></a>
                            </div>
                        </div>
                        <div className="about_col more_space">
                            <h3>We offer skills that can grow your income</h3>
                            <p>We provide practical solutions and expert advice to help you increase revenue and scale efficiently.</p>


                            <div className="grid_info">
                                <div className="icon">{faUserClockIcon}</div>
                                <div className="detail">
                                    <h4>Start your own business in minutes</h4>
                                    <p>With the right guidance and tools, launching your business can be fast, easy, and stress-free.</p>

                                </div>
                            </div>
                            <div className="grid_info">
                                <div className="icon green_icon">{faHouseLaptopIcon}</div>
                                <div className="detail">
                                    <h4>Open a business account online</h4>
                                    <p>Set up your business account securely from anywhere, without paperwork or delays.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
