import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import InputForm from '../../components/input/InputForm';


export default function Email() {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_11i6ecf', 'template_11i6ecf', form.current, 'e7n4vc_R24IMqBV8Y'
        )
            .then((result) => {
                alert('message sent successfully...', result);
                form.current.reset();
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
            });
    };

    return (
        <div className="contactForm w-[80%] mx-auto" id="contact">
            <h2 className=" text-center text-4xl text-font1 pb-5 pt-2 font-font-secondary tracking-[0.5em] hover:animate-textRotation hover:text-black">Contact Form</h2>
            <form className='max-w-4xl mx-auto text-center p-4 sm:p-2' ref={form} onSubmit={sendEmail}>
                <div className="flex  justify-between gap-4">
                    <div className="w-full sm:w-1/2">
                        <InputForm
                            name="user_name"
                            type="text"
                            inputId="name"
                            placeHolder="Name"
                            autocomplete="off"
                            required="required"
                            ariaLabel="name"
                            className="border-0 bg-fond text-bg-color outline-0 p-4 rounded-md w-full mt-4 font-serif resize-none"
                        />
                        <InputForm
                            name="user_email"
                            type="email"
                            placeHolder="Email address"
                            required="required"
                            ariaLabel="email"
                            className="border-0 bg-fond text-bg-color outline-0 p-4 rounded-md w-full mt-4 font-serif resize-none"
                        />
                    </div>
                    <div className="w-full sm:w-1/2">
                        <textarea
                            className="border-0 bg-fond text-bg-color outline-0 p-4 rounded-md w-[100%] h-[90%] mt-4 mb-10 font-serif resize-none"
                            id="message"
                            name='message'
                            placeholder='Message'
                            aria-labelledby="message"
                            required
                        ></textarea>
                    </div>
                </div>
                <InputForm
                    name="input-submit"
                    type="submit"
                    value="Submit"
                    inputId='input-submit'
                    className="text-bg-color text-2xl font-font-secondary font-extrabold bg-font1 cursor-pointer shadow-md justify-center w-[50%]  mx-auto mt-4 p-3 rounded-lg hover:shadow-none"
                />
            </form>
        </div>);

}

