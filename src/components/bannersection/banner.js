import React from 'react'
import './banner.css'
import illustration from '../../assets/ILLUSTRATION.png'
import spanv from '../../assets/spanv.png'
import vector from '../../assets/Vector-4.png'
import dungeon from '../../assets/dungeon.png'
import vector1 from '../../assets/Vector-1.png'
import Group from '../../assets/Group.png'
import Group1 from '../../assets/Group-1.png'
import Group2 from '../../assets/Group-2.png'
import Group3 from '../../assets/Group-3.png'
import arrow from '../../assets/arrow.png'
import vector3 from '../../assets/Vector-3.png'
import search from '../../assets/search.png'
import fb from '../../assets/fb.png'
import ins from '../../assets/ins.png'
import you from '../../assets/utube.png'
import lin from '../../assets/in.png'

export default function Banner() {
    return (
        <div className="container">
            <div className="content">
                <div className="row pb-5">
                    <div className="col-6 col-xs-8">
                        <p className='claimp'>Claim a Free Quote</p>
                        <h2 className='geth'><span className='geths'>Get started</span> on fulfilling your Dubai or UAE dream.</h2>
                        <p className='uaep'>UAE & Offshore Company</p>
                        <p className='weh'>We provide you with information about UAE or Offshore Company Registration & help you setup your company with a bank account and visas.</p>
                        <div className="btn-group">
                            <a href="#" className="gbtn1" aria-current="page">Start a Company</a>
                            <a href="#" className="gbtn2">Renew a Company</a>
                        </div>
                    </div>
                    <div id="col2"className="col-6 col-xs-4  ">
                        <div id='sdiv' className='row'>
                            <input id='searchtop' className="form-control me-2" type="search" placeholder="Search a Term | Topic" aria-label="Search" />
                        </div>
                        <div id='bpic'>
                            <img src={illustration} className='img-fluid'/>
                        </div>
                    </div>
                </div>

                <div className='py-4'>
                    <p className='watchthe'>Watch the video about UAE or Offshore Company Registration <span><img src={spanv} alt="" srcset="" /></span></p>
                </div>


                <div className='py-3'>
                    <p className='dedicated'>Dedicated </p><p className='tour'>to our mission we are</p>
                </div>


                <div className='row py-4' id='cen'>
                    <div className='col-6'>
                        <p className='ourserv'>Our services include Company Formation & Renewals, Trust & Fiduciary, Tax Residency Setup With Family, Bank Accounts, Remote Management, Stock Trading Platforms, Ownership Solutions.</p>
                    </div>
                </div>

                <div className="cards py-4">
                    <div className="card" id='cardsec'>
                        <div className="card-body">
                            <p><img src={dungeon} /></p>
                            <h5 className="card-title">UAE Free Zone Company</h5>
                            <p className="card-text">Your registration agent, will answer all of your questions and help you to reach a conclusion that meets your objectives of investing in the UAE.</p>
                            <a href="#" className="card-link">Get Started</a>
                        </div>
                    </div>

                    <div className="card" id='cardsec'>
                        <div className="card-body">
                            <p><img src={vector1} /></p>
                            <h5 className="card-title">Dubai Local Companies</h5>
                            <p className="card-text">The Dubai LLC formation documents are actually articles of organization or a certificate of organization. You can get yours today.</p>
                            <a href="#" className="card-link">Get Started</a>
                        </div>
                    </div>

                    <div className="card" id='cardsec'>
                        <div className="card-body">
                            <p><img src={vector1} /></p>
                            <h5 className="card-title">Offshore Companies</h5>
                            <p className="card-text">You can register an offshore companyand open its bank account in Dubai.Your agent will help you along all the process.</p>
                            <a href="#" className="card-link">Get Started</a>
                        </div>
                    </div>
                </div>



                <div className="row py-4" id='cenrow'>
                    <div className="col">
                        <p id='learn'>Learn the ways in which you can benefit from a UAE/Offshore Company. Then get started on fulfilling your UAE dream.</p>
                        <p id='claim'>Claim a Free Quote</p>
                        <div className="card" id='cardbtm'>
                            <div className="card-body">
                                <p className='cardimg'><img src={Group3} /></p>
                                <h5 className="cardtitle">Bank Account Setup</h5>
                                <p className='ctext'>There are many banks in the United Arab Emirates [UAE]. Both locallyowned and branches of multinational ones. Foreign banks adjust according to their parent strategies and have changed local requirements overnight in the past.But we are here to help you.</p>
                                <a href="#" className="cardlink">Learn More <img src={arrow} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" id='cardbtm'>
                            <div className="card-body">
                                <p className='cardimg'><img src={Group} /></p>
                                <h5 className="cardtitle">Advice & Guidance</h5>
                                <p className='ctext'>All activities in the UAE are licensed. Whether manufacturing, finance, trading, marketing, consultancy or restaurants. In some countries only manufacturing is licensed. In othersthere is a threshold below which business are encouraged. Get our insightfull guidance today.</p>
                                <a href="#" className="cardlink">Learn More <img src={arrow} /></a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col">

                        <div className="card" id='cardbtm'>
                            <div className="card-body">
                                <p className='cardimg'><img src={Group2} /></p>
                                <h5 className="cardtitle">UAE Company Visas</h5>
                                <p className='ctext'>Your application for visas is critical especially if you intend to move to Dubai. This becomes even more urgent if your family will also move with you. All the paperwork is done on your behalf smoothly so that you may only focus on doing what matters most to you.</p>
                                <a href="#" className="cardlink">Learn More <img src={arrow} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col" style={{ marginTop: '-159px' }}>
                        <div className="card" id='cardbtm'>
                            <div className="card-body">
                                <p className='cardimg'><img src={Group1} /></p>
                                <h5 className="cardtitle">Registration Document Preparation</h5>
                                <p className='ctext'>Several documents must be prepared to start the process of registering a new company in the United Arab Emirates. Be it a Dubai local company, a free zone one or an offshore entity. Your registered agent is dedicated to get this done for you for a seamless process.</p>
                                <a href="#" className="cardlink">Learn More  <img src={arrow} /></a>
                            </div>
                        </div>
                        <div className="card" id='cardbtml'>
                            <div className="card-body">
                                <p className="card-text">We have gathered a team of
                                    professionals to craft adequate
                                    services you can rely on for a friction
                                    free setup in UAE.</p>
                                <a href="#" className="cardlink">More About our Services. <img src={arrow} /></a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='row' id='rowcen'>
                    <div className='col-5'>
                        <p>Most <span id='rowc'>popular affordable pricing</span> per jurisdictions are brought to you to kick off your adventure.</p>
                    </div>
                </div>


                <div className="row py-5" style={{ justifyContent: "space-between" }}>
                    <div className="col-5 py-5">
                        <h3 className='hbtm'>Read about our blogs for more information on our processes </h3>
                        <div style={{ display: "flex", paddingTop: "20px", marginBottom: "40px", height: "92px" }}>
                            <div style={{ padding: '15px 15px', border: '2px solid blue', borderRadius: "5px" }}>
                                <img src={vector} alt="" srcset="" width='40' height='40' />
                            </div>
                            <div style={{ marginLeft: "10px" }}>
                                <p>How to start a company formation in Dubai</p>
                                <p>5 Minutes</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", paddingTop: "20px", marginBottom: "40px", height: "92px" }}>
                            <div style={{ padding: '15px 15px', border: '2px solid blue', borderRadius: "5px" }}>
                                <img src={vector} alt="" srcset="" width='40' height='40' />
                            </div>
                            <div style={{ marginLeft: "10px" }}>
                                <p>How to start an Offshore company formation in Dubai</p>
                                <p>5 Minutes</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", paddingTop: "20px", marginBottom: "40px", backgroundColor: "blue", borderRadius: "5px" }}>
                            <div style={{ padding: '15px 15px', border: '2px solid blue', borderRadius: "5px" }}>
                                <img src={vector} alt="" srcset="" width='40' height='40' />
                            </div>
                            <div style={{ marginLeft: "10px" }}>
                                <p style={{ color: "white" }}>SEO Dubai: Who benefits the most?</p>
                                <p style={{ color: "white" }}>5 Minutes</p>
                            </div>
                        </div>
                        <h3 className='hbtm' style={{ marginTop: "70px" }}>Satisfied We are When Our Customers Are Happy</h3>
                        <div style={{ display: "flex",marginTop:"45px" }}>
                            <div style={{ borderBottom: "3px solid blue",padding:"20px 20px" }}>
                                <img src={vector3} alt="" srcset="" />
                            </div>
                            <div style={{ marginLeft: "10px",padding:"20px 20px" }}>
                                <p style={{fontSize:"20px"}}>"I am very happy with them. I’ll continue to use their services in future & highly recommend them to anyone"</p>
                                <p style={{fontSize:"17px",fontWeight:"bold"}}>Muhib Abrar</p>
                            </div>
                        </div>

                        <div style={{ display: "flex",marginTop:"45px" }}>
                            <div style={{ borderBottom: "3px solid blue",padding:"20px 20px" }}>
                                <img src={vector3} alt="" srcset="" />
                            </div>
                            <div style={{ marginLeft: "10px",padding:"20px 20px" }}>
                                <p style={{fontSize:"20px"}}>"Rama has a high level of integrity, intellect, knowledge of his business, resourcefulness and humanity,</p>
                                <p style={{fontSize:"17px",fontWeight:"bold"}}>Colin Saldahna</p>
                            </div>
                        </div>

                        <div style={{ display: "flex" ,marginTop:"45px"}}>
                            <div style={{ borderBottom: "3px solid blue",padding:"20px 20px" }}>
                                <img src={vector3} alt="" srcset="" />
                            </div>
                            <div style={{ marginLeft: "10px",padding:"20px 20px" }}>
                                <p style={{fontSize:"20px"}}>Your advise was so complete that I actually realized how beneficial this would be to my clients and my business.</p>
                                <p style={{fontSize:"17px",fontWeight:"bold"}}>Mark Swann</p>
                            </div>
                        </div>

                    </div>

                    <div className="col-5 py-5">
                        <h3 className='hbtm'>Get to know the whole us and more of our services</h3>
                        <div style={{ marginTop: "30px" }}>
                            <div style={{ padding: '0px 30px' }}>
                                <h4>Services</h4>
                                <p className='lit'>Products</p>
                                <p className='lit'>Solutions</p>
                                <p className='lit'>Assurance</p>
                                <p className='lit'>FAQ</p>
                                <p className='lit'>Working at Varal Singhania</p>
                            </div>

                            <div style={{ padding: '0px 30px', marginTop: "50px" }}>
                                <h4>Policies</h4>
                                <p className='lit'>Privacy Policy</p>
                                <p className='lit'>Terms and Conditions</p>
                            </div>

                            <div style={{ padding: '0px 30px', marginTop: "50px" }}>
                                <h4>About</h4>
                                <p className='lit'>About Us</p>
                                <p className='lit'>Contact Us</p>
                            </div>

                            <div style={{ padding: '0px 30px', marginTop: "50px" }}>
                                <h4>Address</h4>
                                <p className='lit'>608 One Lake Plaza, Cluster T,<br />
                                    Al Sarayat Street, Jumeirah<br />
                                    Lake Towers<br />
                                    Dubai<br />
                                    United Arab Emirates<br />
                                    Office Hours: Sunday <br />
                                    Thursday 8:30 AM to 6:30 PM<br />
                                    [GMT+4]<br />
                                    M: +971 55 794 2016<br />
                                    O: +971 4 447 2061</p>
                            </div>

                            <div style={{ padding: '0px 30px', marginTop: "50px" }}>
                                <h4>Subscribe Now</h4>
                                <p className='lit'>Subscribe now to receive our Newsletters about amazing opportunities in Dubai</p>
                            </div>


                            <div style={{ padding: '0px 30px', marginTop: "50px" }}>
                                <div class="input-group flex-nowrap" id='searchbar'>
                                    <input  type="text" class="form-control" placeholder="Enter email address" aria-label="Username" />
                                    <span class="input-group-text" id="addon-wrapping"><img src={search} style={{width:"62px",height:"50px"}}/></span>
                                </div>
                            </div>

                            <div style={{ display: "flex" ,justifyContent:"left",marginTop:"20px"}}>
                                <div style={{padding:"20px 20px" }}>
                                    <img src={fb} alt="" srcset="" style={{marginLeft:"7px"}}/>
                                </div>
                                <div style={{ marginLeft: "10px",padding:"20px 20px" }}>
                                    <img src={ins} alt="" srcset="" />
                                </div>
                                <div style={{ marginLeft: "10px",padding:"20px 20px" }}>
                                    <img src={you} alt="" srcset="" />
                                </div>
                                <div style={{ marginLeft: "10px",padding:"20px 20px" }}>
                                    <img src={lin} alt="" srcset="" />
                                </div>
                        </div>
                         
                        </div>
                    </div>

                </div>

             
                <div className="col-12 text-center" style={{ color: '#817e7e', fontSize: '15px' }}>
                    <p>
                        Might not be a responsible design.___ AdnanRiyaz
                    </p>
                        <p> Varaluae 2021 <i className="fa fa-copyright"></i> All Right Reserved </p>
                </div>
            </div>
        </div>
    )
}
