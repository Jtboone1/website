import * as React from "react";
import { useContext, useRef, useEffect } from "react";
import StyleContext from "../components/Context";

import * as Edu from "../css/educationPage.module.css";

import { FaLink } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

const Experience = () => {
    const style = useRef(useContext(StyleContext));

    useEffect(() => {
        style.current.setStyle(false);
    }, []);

    return (
        <>
            <Helmet title="Jarrod Boone::Experience">
                <meta charSet="utf-8" />
                <meta
                    name="description"
                    content="Personal Website for Jarrod Boone. This page just describes things like work experience, skills and extra-curricular activities"
                />
                <meta name="author" content="Jarrod Boone" />
                <meta
                    name="keywords"
                    content="Rust, HTML, CSS, Portfolio, Website, JavaScript, Student"
                />
                <meta name="viewport" content="width=device-width" />
                <meta name="language" content="en" />
            </Helmet>
            <main className={Edu.eduMain}>
                <div className={Edu.container}>
                    <div className={Edu.paraName}>
                        <b className={Edu.header}>Work Experience</b>
                    </div>
                    <div className={Edu.paraContent}>
                        <div className={Edu.desc}>
                            <b>Mysa Smart Thermostats, St John's NL</b>
                            <br />
                            <b className={Edu.rightTxt}>May 2021 - Present</b>
                            <br />
                            <ul>
                                <li>
                                    Worked closely with senior engineers to develop the back-end 
                                    infrastructure for a new manufacturing line in the Philippines.
                                </li>
                                <li>
                                    Reduced the amount of bugs in the React Native application used by
                                    all products.
                                </li>
                                <li>
                                    Used CI/CD technologies in order to improve developer experience.
                                </li>
                            </ul>

                            <b>Prospre Nutrition, Mount Pearl NL</b>
                            <br />
                            <b className={Edu.rightTxt}>
                                September 2020 - December 2020
                            </b>
                            <br />
                            <ul>
                                <li>
                                    Created front end components using React to
                                    enhance both desktop and mobile user
                                    experience.
                                </li>
                                <li>
                                    Built reusable code in order to optimize web
                                    page development.
                                </li>
                                <li>
                                    Troubleshot interface software and debugged
                                    application code to improve functionality
                                    and performance.
                                </li>
                            </ul>

                            <b>Nokia, Ottawa ON</b>
                            <br />
                            <b className={Edu.rightTxt}>
                                January 2019 - April 2019
                            </b>
                            <br />
                            <ul>
                                <li>
                                    Automated the workflow for setting up virtual 
                                    machines using Python, decreasing setup time by 10%.
                                </li>
                                <li>
                                    Performed troubleshooting tasks for various
                                    networking software.
                                </li>
                                <li>
                                    Completed the majority of tickets within the
                                    quarter of that year.
                                </li>
                            </ul>

                            <b>MUN IT Services, St John's NL</b>
                            <br />
                            <b className={Edu.rightTxt}>
                                May 2018 - August 2018
                            </b>
                            <br />
                            <ul>
                                <li>
                                    Worked on migrating the OS of every computer
                                    in the university to Windows 10.
                                </li>
                                <li>
                                    Helped various faculty members in computer
                                    hardware installations.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className={Edu.line} />
                <div className={Edu.container}>
                    <div className={Edu.paraName}>
                        <b className={Edu.header}>Skills</b>
                    </div>
                    <div className={Edu.paraContent}>
                        <div className={Edu.desc}>
                            <ul>
                                <li>
                                    Programming languages include JavaScript, C++, Rust, Python, C#.
                                </li>
                                <li>
                                    Web technologies include React, React Native, HTML/CSS, Node, Express, TypeScript, Gatsby.
                                </li>
                                <li>
                                    Other technologies include Git, Linux, VIM, Docker, CI/CD, AWS, MongoDB, Jira. 
                                </li>
                                <li>
                                    Experienced in troubleshooting software
                                    issues.
                                </li>
                                <li>
                                    Possess a good understanding on how to
                                    develop and understand solutions, concepts
                                    and ideas.
                                </li>
                                <li>First aid certified.</li>
                                <li>Valid driver's license.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className={Edu.line} />
                <div className={Edu.container}>
                    <div className={Edu.paraName}>
                        <b className={Edu.header}>Projects</b>
                    </div>
                    <div className={Edu.paraContent}>
                        <div className={Edu.descProject}>
                            <b>Chip8 Emulator</b>
                            <div className={Edu.divPro}>
                                <a
                                    href="https://github.com/Jtboone1/Boone8"
                                    className={Edu.link}
                                >
                                    <FaLink className={Edu.linkIcon} />
                                    https://github.com/Jtboone1/Boone8
                                </a>
                            </div>
                            Emulator for the Chip8 interpreted programming
                            language from the 1970s. Made with Rust and compiled
                            to WebAssembly.{" "}
                            <Link to="/Projects/Chip8" className={Edu.link}>
                                Hosted here
                            </Link>
                            .
                        </div>
                    </div>
                    <div className={Edu.paraContent}>
                        <div className={Edu.descProject}>
                            <b>Calendar Scheduler</b>
                            <div className={Edu.divPro}>
                                <a
                                    href="https://github.com/Jtboone1/calender_app"
                                    className={Edu.link}
                                >
                                    <FaLink className={Edu.linkIcon} />
                                    https://github.com/Jtboone1/calendar_app
                                </a>
                            </div>
                            Desktop application to help students keep track of their day to day tasks. 
                            Uses{" "}
                            <a className={Edu.link} href="https://www.twilio.com/">
                                Twilio
                            </a>{" "}
                            and{" "}
                            <a className={Edu.link} href="https://nodemailer.com/about/">
                                NodeMailer
                            </a>{" "}
                            for mobile and email notifications. 
                            Back-end created using{" "}
                            <a className={Edu.link} href="https://expressjs.com/">
                                Express
                            </a>{" "}
                            to handle multiple users.
                        </div>
                    </div>
                    <div className={Edu.paraContent}>
                        <div className={Edu.descProjectLast}>
                            <b>This Website</b>
                            <div className={Edu.divPro}>
                                <a
                                    href="https://github.com/Jtboone1/website"
                                    className={Edu.link}
                                >
                                    <FaLink className={Edu.linkIcon} />
                                    https://github.com/Jtboone1/website
                                </a>
                            </div>
                            A simple static website made using{" "}
                            <a href="https://reactjs.org/" className={Edu.link}>
                                React
                            </a>{" "}
                            with the{" "}
                            <a
                                href="https://www.gatsbyjs.com/"
                                className={Edu.link}
                            >
                                Gatsby
                            </a>{" "}
                            framework. Built with SEO techniques in mind to increase user traffic. 
                            Uses Github Actions for automatic deployment. Hosted with Github Pages.
                        </div>
                    </div>
                </div>
                <hr className={Edu.line} />
                <div className={Edu.container}>
                    <div className={Edu.paraName}>
                        <b className={Edu.header}>
                            Extra-Curricular Activities
                        </b>
                    </div>
                    <div className={Edu.paraContent}>
                        <div className={Edu.desc}>
                            <ul>
                                <li>
                                    Volunteered with the Gander food bank, 2014
                                    to 2015
                                </li>
                                <li>
                                    Member of the Gander Collegiate coding club,
                                    2015 to 2016
                                </li>
                                <li>
                                    Played house league tennis, 2014 to 2015
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className={Edu.line} />
            </main>
        </>
    );
};

export default Experience;
