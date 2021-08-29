import * as React from "react";
import { useContext, useRef, useEffect } from "react";

import * as Main from "../css/mainPage.module.css";

import StyleContext from "../components/Context";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "react-responsive";
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Index() {

    const very_large_screen = useMediaQuery({ query: "(min-width: 1500px)" });
    const large_screen = useMediaQuery({ query: "(max-width: 1500px) and (min-width: 900px)" });
    const medium_screen = useMediaQuery({ query: "(max-width: 900px) and (min-width: 800px)" });
    const small_screen = useMediaQuery({ query: "(max-width: 800px) and (min-width: 630px)" });
    const very_small_screen = useMediaQuery({ query: "(max-width: 630px) and (min-width: 370px)" });
    const style = useRef(useContext(StyleContext));

    const getResumeWidth = () => {
        const width = 
        very_large_screen ? 830 :
        large_screen ? 750 : 
        medium_screen ? 700 :
        small_screen ? 580 : 
        very_small_screen ? 360 :
        265;

        return width;
    }

    useEffect(() => {
        style.current.setStyle(false);
    }, []);

    return (
        <>
            <Helmet title="Jarrod Boone">
                <meta charSet="utf-8" />
                <meta
                    name="description"
                    content="Personal Website for Jarrod Boone. This page just describes the idea behind why this website exists."
                />
                <meta name="author" content="Jarrod Boone" />
                <meta
                    name="keywords"
                    content="projects, Jarrod, Boone, website, student"
                />
                <meta name="viewport" content="width=device-width" />
                <meta name="language" content="en" />
            </Helmet>
            <main>
                <div className={Main.imageDiv}>
                    <StaticImage
                        src="./jarrod.jpg"
                        alt="Image of Jarrod"
                        className={Main.image}
                    />
                </div>
                <h1 className={Main.title}>Jarrod Boone</h1>
                <p className={Main.desc}>
                    Hello! I am currently a term 6 Computer Engineering student
                    at Memorial University of Newfoundland, where I am expecting
                    to graduate in April of 2023. I'm currently completing my
                    fourth work term as a software engineering student at{" "}
                    <a
                        className={Main.mainLink}
                        href="https://getmysa.com/?country=CA"
                    >
                        Mysa Smart Thermostats
                    </a>
                    . Before that, I had the opportunity to work on Nokia's SAM
                    software in Ottawa.
                </p>
                <p className={Main.desc}>
                    I love problem-solving and getting to work on projects that
                    can influence a large number of people. I also love learning
                    about newer technologies and trying to apply what I've
                    learned to my own projects. The idea behind this website is
                    to serve as an online resumé that will hopefully be a bit
                    more interesting to look at than a black and white sheet of
                    paper!
                </p>
                <p className={Main.desc}>
                    My resumé can be found{" "}
                    <a 
                        className={Main.mainLink} 
                        href="./Resume.pdf"
                    >
                        here
                    </a>.
                </p>
                <div>
                    <Document 
                        file="Resume.pdf" 
                        className={Main.pdfBorder}
                    >
                        <Page 
                            pageNumber={1}
                            width={getResumeWidth()} 
                            className={Main.pdfBorderStyle}
                            renderAnnotationLayer={false}
                        />
                    </Document>
                </div>
            </main>
        </>
    );
}
