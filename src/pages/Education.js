import * as React from 'react';
import { useContext, useRef, useEffect } from 'react';
import StyleContext from '../components/Context';

import * as Edu from '../css/educationPage.module.css';
import '../css/global.module.css';

import { Helmet } from 'react-helmet';

const Education = () => {
    const style = useRef(useContext(StyleContext));

    useEffect(() => {
        style.current.setStyle(false);
    }, [])

    return (
        <>
            <Helmet title="Education :: Jarrod Boone">
                <meta charSet="utf-8"/>
                <meta name="description" content="Personal Website for Jarrod Boone. This page just describes the background of my education, like highschool, post-seconday and scholarships"/>
                <meta name="auther" content="Jarrod Boone"/>
                <meta name="keywords" content="Honors, Scholarship, MUN, Student, Engineering, Graduation, Memorial University"/>
                <meta name="viewport" content="width=device-width"/>
                <meta name="language" content="en"/>
            </Helmet>
            <main className={Edu.eduMain}>
                <div className={Edu.container}>
                    <div className={Edu.paraName}>
                        <b className={Edu.header}>Education</b>
                    </div>
                    <div className={Edu.paraContent}>
                        <p className={Edu.desc}>

                            <b>Memorial University of Newfoundland (MUN), St. John’s NL</b><br/>
                            <b className={Edu.rightTxt}>2017 - Present</b><br/>
                            <ul>
                                <li>Faculty of Engineering and Applied Science</li>
                                <li>Enrolled in Academic Term VI, Expected Graduation 2023</li>
                                <li>Bachelor of Engineering Co-op Program</li>
                            </ul>

                            <b>Gander Collegiate High School, Gander NL</b><br/>
                            <b className={Edu.rightTxt}>2014 - 2017</b><br/>
                            <ul>
                                <li>Graduated with French Immersion Credentials</li>
                                <li>Graduated with Honors</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <hr className={Edu.line}/>
                <div className={Edu.container}>
                    <div className={Edu.paraName}>
                        <b className={Edu.header}>Scholarships and Awards</b>
                    </div>
                    <div className={Edu.paraContent}>
                        <p className={Edu.desc}>
                            <ul>
                                <li>Honor Roll student in High School, 2014 – 2017</li>
                                <li>Recipient of the Concorde Award for having an average above 90% in High School, 2014 – 2017</li>
                                <li>Recipient of the MUN Entrance Scholarship, 2016 – 2017</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <hr className={Edu.line}/>
            </main>
        </>
    );
}

export default Education;
