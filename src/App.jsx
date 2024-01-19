import { useState } from "react";

export default function App() {

    const [fontData, setFontData] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        setFontData(data)
        setIsSubmitting(true)
    }



    return (
        <div className="container">

            <div className="formContainer">

                <header className="header">

                    <p>coded by yasiralakus.</p>

                    <div className="socials">

                        <a href="mailto:yasiralakus11@gmail.com"><i className="fa-solid fa-envelope"></i></a>
                        <a href="https://instagram.com/yasiralakus"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/yasiralakus/"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/yasiralakus"><i className="fa-brands fa-github"></i></a>
                        <a href="https://www.yasiralakus.com.tr"><i className="fa-solid fa-globe"></i></a>

                    </div>

                </header>

                <form onSubmit={handleSubmit} className="form">

                    <textarea required name="text" cols="50" rows="5" placeholder="Metin giriniz..."></textarea>

                    <div className="formBtn">

                        <select name="pickedFont" required>
                            <option value="tanimsiz" disabled selected>Font Seçiniz</option>
                            <option value="Merriweather">Merriweather</option>
                            <option value="Nunito">Nunito</option>
                            <option value="Ubuntu">Ubuntu</option>
                            <option value="Playfair Display">Playfair Display</option>
                            <option value="Raleway">Raleway</option>
                            <option value="Noto Sans">Noto Sans</option>
                            <option value="Oswald">Oswald</option>
                            <option value="Roboto Mono">Roboto Mono</option>
                            <option value="Roboto Condensed">Roboto Condensed</option>
                            <option value="Inter">Inter</option>
                            <option value="Poppins">Poppins</option>
                            <option value="Lato">Lato</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Open Sans">Open Sans</option>
                            <option value="Roboto">Roboto</option>
                        </select>

                        <select name="pickedFontSize" required>
                            <option value="tanimsiz" disabled selected>Font Size Seçiniz</option>
                            <option value="20px">20px</option>
                            <option value="21px">21px</option>
                            <option value="22px">22px</option>
                            <option value="23px">23px</option>
                            <option value="24px">24px</option>
                            <option value="25px">25px</option>
                            <option value="26px">26px</option>
                            <option value="27px">27px</option>
                            <option value="28px">28px</option>
                            <option value="29px">29px</option>
                            <option value="30px">30px</option>
                            <option value="31px">31px</option>
                            <option value="32px">32px</option>
                            <option value="33px">33px</option>
                            <option value="34px">34px</option>
                            <option value="35px">35px</option>
                            <option value="36px">36px</option>
                            <option value="37px">37px</option>
                            <option value="38px">38px</option>
                            <option value="39px">39px</option>
                            <option value="40px">40px</option>
                            <option value="41px">41px</option>
                            <option value="42px">42px</option>
                            <option value="43px">43px</option>
                            <option value="44px">44px</option>
                            <option value="45px">45px</option>
                            <option value="46px">46px</option>
                            <option value="47px">47px</option>
                            <option value="48px">48px</option>
                            <option value="49px">49px</option>
                            <option value="50px">50px</option>
                            <option value="51px">51px</option>
                            <option value="52px">52px</option>
                            <option value="53px">53px</option>
                            <option value="54px">54px</option>
                            <option value="55px">55px</option>
                            <option value="56px">56px</option>
                            <option value="57px">57px</option>
                            <option value="58px">58px</option>
                            <option value="59px">59px</option>
                            <option value="60px">60px</option>
                        </select>


                        <button>Göster</button>

                    </div>

                </form>

                <div className="results">

                    {<p style={{fontFamily: fontData.pickedFont, fontSize: fontData.pickedFontSize}}>{fontData.text}</p>}

                </div>

                {isSubmitting === true ? 
                    <p>Fontu beğendiniz mi? <a href={`https://fonts.google.com/specimen/${fontData.pickedFont}`} >Ücretsiz kullanın!</a></p>
                    : 
                    ''}

            </div>
        </div>
    )
}