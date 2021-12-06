import React from "react";
import MainTitle from "../components/MainTitle";
import Fade from "react-reveal/Fade";

// a basic form
const NewsletterForm = ({status, message, className, style, onSubmitted}) => {
    let input;
    const submit = () =>
        input &&
        input.value.indexOf("@") > -1 &&
        onSubmitted({
            EMAIL: input.value
        });

    return (
        <div className={className} style={style}>

            {/*<input*/}
            {/*    ref={node => (input = node)}*/}
            {/*    type="email"*/}
            {/*    placeholder="Your email"*/}
            {/*/>*/}
            {/*<button onClick={submit}>Submit</button>*/}

            <div className="bg-dark py-20 w-full">
                <div className="">
                    <MainTitle title="Register For The Whitelist"/>
                </div>
                <div className="max-w-4xl px-6 md:px-16 -mt-16 mx-auto z-50">
                    <Fade bottom>
                        <p className=" text-base md:text-lg text-white font-semibold text-center pb-5">
                            Strictly limited positions on the Roughneck Rabbits whitelist don't miss out on your
                            chance
                            at early access
                        </p>
                    </Fade>

                    {/*<form onSubmit={(e) => {*/}
                    {/*    e.preventDefault();*/}
                    {/*    handleSubmit()*/}
                    {/*}}>*/}
                    <div className={'text-center pt-4'}>
                        {status === "sending" && <div style={{color: "white"}}>sending...</div>}
                        {status === "error" && (
                            <div
                                style={{color: "red"}}
                                dangerouslySetInnerHTML={{__html: message}}
                            />
                        )}
                        {status === "success" && (
                            <div
                                className={'text-secondary'}
                                // style={{color: "green"}}
                                dangerouslySetInnerHTML={{__html: 'Thanks for your whitelist registration, you will be updated when the pre-sale is open.'}}
                            />
                        )}
                    </div>

                    <div className={'mt-10 flex grid items-center  md:grid-cols-1fr-auto gap-8'}>


                        {/*    Input element*/}
                        <input
                            ref={node => (input = node)}
                            // onChange={onChangeValue}
                            className="h-[69px] bg-primary appearance-none block w-full bg-gray-200 text-white newsletter-input py-4 rounded px-4 leading-tight focus:outline-none"
                            id="grid-first-name" type="email" placeholder="Enter your Email"/>

                        {/*    Button   */}
                        <div className="flex justify-center sm:justify-start">
                            <Fade bottom>
                                <button onClick={submit}
                                        className="bg-green mx-auto py-4 text-white hover:text-white font-bold rounded-sm cursor-pointer transition-all hover:shadow-2xl px-10 py-1">
                                    SIGN ME UP
                                </button>
                            </Fade>
                        </div>

                    </div>
                    {/*</form>*/}

                </div>
            </div>
        </div>
    );
};

export default NewsletterForm;