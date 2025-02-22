import React from 'react'
import Acordions from '../../components/Acordions'
import "../about/About.css"
import imgAbout from "../../img/img4.png"
import NewListing from '../../components/newlisting/NewListing'
import List from '../../components/list/List'

const About = () => {
    return (
        <>
            <div className="container">

                <div className="about">

                    <div className="row">
                        <div className="col-6">
                            <h1>Welcome to Binance!</h1>
                            <p>
                                At Binance, we believe that everyone should have the freedom to earn, hold, spend, share and give their money - no matter who you are or where you come from.
                            </p>
                        </div>
                        <div className="col-6">
                            <img src={imgAbout} alt="" />
                        </div>
                    </div>
                    <List />
                    <div className="Our-Ecosystem">
                        <h1>Our Ecosystem</h1>
                        <p>Our platform is trusted by millions worldwide, and features an unmatched portfolio of financial product offerings.</p>
                    </div>
                    <div className="binance-board">


                        <h1>Binance Board of Directors</h1>
                        <p>Gabriel Abed is a globally recognized technology entrepreneur, seasoned board member and former diplomat specializing in the intersection of regulatory innovation and financial technologies. He has over 13 years of experience within the blockchain industry and has navigated complex financial landscapes within regulated environments across several industries and countries. Mr. Abed launched the first Barbadian Embassy in the Middle East, serving as Ambassador of Barbados to the United Arab Emirates and Non-Resident Ambassador to Kuwait.
                            In 2013, Mr. Abed was the founding CEO of Bitt, the trailblazing company that introduced one of the world’s earliest Central Bank Digital Currencies (CBDCs) <br /> In 2016, he co-founded Digital Asset Capital Management (DACM), a hedge fund that quickly became best-performing in its category. <br /> Today, he continues to be a leading authority on digital economy affairs, regulation and blockchain technologies.
                            In April 2018, Mr. Abed was appointed as the Special Technology Advisor to the Honourable David Burt of Bermuda. In 2020 he had a leadership role in the World Economic Forum’s Global Future Council on Cryptocurrencies’ Regulatory Framework Group. He was also a board member of the Barbados Stock Exchange and of ANSA Bank (Trinidad). Mr. Abed serves as an honorary member for the Barbados Financial Services Commission’s subcommittee for FinTech.
                            Mr. Abed graduated with honors from the Ontario Technology University, with a Bachelor’s Degree in Information Technology, majoring in Network Security. Due to his contributions to blockchain and regulation technology, Mr. Abed was also conferred an Honorary Doctorate in Law by the University of the West Indies.
                            As Chairman of Binance’s Board of Directors, Mr. Abed remains dedicated to forging multilateral relationships across governments, governance, technology and regulation.</p>
                    </div>

                </div>




            </div>
        </>
    )
}

export default About
