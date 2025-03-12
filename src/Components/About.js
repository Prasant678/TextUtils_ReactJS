import React from 'react'

export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#010b22',
        backgroundColor: props.mode === 'dark' ? 'rgb(40 74 108)' : 'White',
        border: '1px Solid',
        borderColor: props.mode === 'dark' ? 'white' : '#010b22'
    }
    return (
        <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#010b22' }}>
            <h1>ABOUT US</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>About TextModifier</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>About TextModifier :</strong> Our web application is designed to make text processing simple, efficient, and hassle-free. Whether you're writing, editing, or formatting text, our suite of tools helps you streamline the process with just a few clicks.

                            <p>Features:</p>

                            <p>🔹 Word Counter – Instantly count words and characters to stay within limits for writing assignments, social media posts, and more.</p>

                            <p>🔹 Uppercase to Lowercase Converter – Easily convert all text from UPPERCASE to lowercase for consistent formatting.</p>

                            <p>🔹 Lowercase to Uppercase Converter – Transform text from lowercase to UPPERCASE with a single click for emphasis or styling.</p>

                            <p>🔹 Copy Text – Quickly copy the processed text to your clipboard for easy pasting wherever you need it.</p>

                            <p>🔹 Extra Space Remover – Automatically eliminate unnecessary spaces to ensure clean and properly formatted text.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free To Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>Free to use :</strong> Our text utility web application is completely free to use with no hidden costs, subscriptions, or sign-ups required. Whether you need to count words, convert text between uppercase and lowercase, remove extra spaces, or copy text quickly, our tool is available anytime, anywhere.

                            <p>✔ No Registration Needed – Access all features instantly without creating an account.</p>
                            <p>✔ Unlimited Usage – Use the tool as many times as you need, with no restrictions.</p>
                            <p>✔ Fast & Secure – Enjoy quick text processing without storing or tracking your data.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>Browser Compatibilty :</strong> IOur text utility web application is designed to work seamlessly across all major web browsers, ensuring a smooth and reliable experience on any device. Supported Browsers: Google Chrome, Mozilla Firefox, Microsoft Edge, Apple Safari, Opera.
                            Cross-Platform Accessibility:
                            Our tool is fully responsive and works on Windows, macOS, Linux, Android, and iOS devices. Whether you're using a desktop, laptop, tablet, or smartphone, you can access and use our features effortlessly.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
