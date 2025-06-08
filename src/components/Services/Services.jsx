import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faChartBar, faCopy, faMarker, faUserGear, faCoins } from '@fortawesome/free-solid-svg-icons';

export default function Services() {

    // Icons
    const faLaptopCodeIcon = <FontAwesomeIcon icon={faLaptopCode} />
    const faChartBarIcon = <FontAwesomeIcon icon={faChartBar} />
    const faCopyIcon = <FontAwesomeIcon icon={faCopy} />
    const faMarkerIcon = <FontAwesomeIcon icon={faMarker} />
    const faUserGearIcon = <FontAwesomeIcon icon={faUserGear} />
    const faCoinsIcon = <FontAwesomeIcon icon={faCoins} />
    return (
        <>
            <div id="services">
                <div className="container">
                    <div className="title_headling">
                        <h3>What's Services We Are Offering to Our Customers</h3>
                        <p>To provide better solutions, we offer exceptional services with the aim to resolve even the most complex challenges.</p>
                    </div>
                    <div className="service_wrapper">
                        <div className="service_box">
                            <div className="service_icon blue_icon">{faLaptopCodeIcon}</div>
                            <h4 className="number">01</h4>
                            <div className="service_content">
                                <h5>Cloud Computing</h5>
                                <p>We help you move to the cloud securely and efficiently, making your data accessible anytime, anywhere.</p>
                                <a href="/" className="read">Read more</a>
                            </div>
                        </div>
                        <div className="service_box">
                            <div className="service_icon">{faChartBarIcon}</div>
                            <h4 className="number">02</h4>
                            <div className="service_content">
                                <h5>Business Strategy</h5>
                                <p>Crafting tailored strategies to boost your business growth and market presence effectively.</p>
                                <a href="/" className="read">Read more</a>
                            </div>
                        </div>
                        <div className="service_box">
                            <div className="service_icon green_icon">{faCopyIcon}</div>
                            <h4 className="number">03</h4>
                            <div className="service_content">
                                <h5>Reports Analysis</h5>
                                <p>We analyze your business data to deliver meaningful insights for better decision-making.</p>
                                <a href="/" className="read">Read more</a>
                            </div>
                        </div>
                        <div className="service_box">
                            <div className="service_icon">{faMarkerIcon}</div>
                            <h4 className="number">04</h4>
                            <div className="service_content">
                                <h5>Decision Maker</h5>
                                <p>We help automate and simplify decision processes with powerful analytics and expert support.</p>
                                <a href="/" className="read">Read more</a>
                            </div>
                        </div>
                        <div className="service_box">
                            <div className="service_icon green_icon">{faUserGearIcon}</div>
                            <h4 className="number">05</h4>
                            <div className="service_content">
                                <h5>Customer Oriented</h5>
                                <p>Our services are designed with your customers in mind to ensure satisfaction and loyalty.</p>
                                <a href="/" className="read">Read more</a>
                            </div>
                        </div>
                        <div className="service_box">
                            <div className="service_icon blue_icon">{faCoinsIcon}</div>
                            <h4 className="number">06</h4>
                            <div className="service_content">
                                <h5>Solution Focused</h5>
                                <p>We focus on delivering practical and scalable solutions tailored to your unique business needs.</p>
                                <a href="/" className="read">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
