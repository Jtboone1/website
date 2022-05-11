import * as React from "react";
import { useContext, useRef, useEffect, useState } from "react";
import StyleContext from "../components/Context";
import { Helmet } from "react-helmet";
import axios from 'axios';
import * as CSS from "../css/shopify.module.css";


const Experience = () => {

    const [prompt, setPrompt] = useState("");
    const [promptList, setPromptList] = useState([]);

    useEffect(() => {
        style.current.setStyle(false);
    }, []);

    const style = useRef(useContext(StyleContext));

    const getPrompt = async () => {

        const data = {
            prompt: prompt,
            temperature: 0.5,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        };


        const response = await axios({
            url: "https://api.openai.com/v1/engines/text-curie-001/completions",
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer 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",
            },
            data: JSON.stringify(data)
        })

        const responseText = response.data.choices[0].text;
        const newPromptList = promptList;

        newPromptList.unshift(
        );

        setPromptList(list => [
            <div className={CSS.prompt}>
                <b className={CSS.clientInput}>{prompt}</b>
                <b className={CSS.response}>{responseText}</b>
            </div>,
            ...list
        ]);
        console.log(promptList)
    };

    return (
        <>
            <Helmet title="Jarrod Boone::Experience">
                <meta charSet="utf-8" />
                <meta
                    name="description"
                    content="This page was created for the Shopify intern challenge"
                />
                <meta name="author" content="Jarrod Boone" />
                <meta
                    name="keywords"
                    content="HTML, CSS, Portfolio, Website, JavaScript, Student"
                />
                <meta name="viewport" content="width=device-width" />
                <meta name="language" content="en" />
            </Helmet>
            <main className={CSS.shopMain}>
                <div>
                    <b className={CSS.header}>Enter any prompt!</b>
                </div>
                <div>
                    <textarea 
                        className={CSS.textbox}
                        onChange={(e) => setPrompt(e.target.value)}
                        value={prompt}
                    />
                </div>
                <div>
                    <button 
                        className={CSS.submitButton}
                        onClick={getPrompt}
                    >
                        Submit
                    </button>
                </div>
                {promptList.map(prompt => prompt)}
            </main>
        </>
    );
};

export default Experience;
