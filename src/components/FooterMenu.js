import React, { Component } from "react";

class FooterMenu extends Component{
    render(){
        return(
            <footer class="footer">
        <div class="footer__top">
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        <div class="company-info footer__info">
                            <p class="company-info__title">Infinity carports</p>
                            <p class="company-info__text company-info__address">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" viewBox="0 0 15.469 22">
                                    <g id="placeholder" transform="translate(-76)">
                                        <g id="Group_271" data-name="Group 271" transform="translate(76)">
                                            <g id="Group_270" data-name="Group 270">
                                                <path id="Path_742" data-name="Path 742"
                                                    d="M83.734,0a7.736,7.736,0,0,0-6.58,11.8l6.14,9.894a.645.645,0,0,0,.548.3h.005a.644.644,0,0,0,.548-.313l5.983-9.99A7.736,7.736,0,0,0,83.734,0Zm5.537,11.035-5.44,9.082-5.582-9a6.45,6.45,0,1,1,11.021-.087Z"
                                                    transform="translate(-76)" fill="#999" />
                                            </g>
                                        </g>
                                        <g id="Group_273" data-name="Group 273" transform="translate(79.867 3.867)">
                                            <g id="Group_272" data-name="Group 272">
                                                <path id="Path_743" data-name="Path 743"
                                                    d="M169.867,90a3.867,3.867,0,1,0,3.867,3.867A3.872,3.872,0,0,0,169.867,90Zm0,6.454a2.587,2.587,0,1,1,2.582-2.587A2.589,2.589,0,0,1,169.867,96.454Z"
                                                    transform="translate(-166 -90)" fill="#878787" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                737 South Main Street #3, Mount Airy, NC, 27030
                            </p>
                            <p class="company-info__text company-info__email company-info-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                    <path id="Path_913" data-name="Path 913"
                                        d="M17.072,2.929A10,10,0,1,0,2.93,17.071,10.006,10.006,0,0,0,14.749,18.8a.6.6,0,0,0-.572-1.059A8.8,8.8,0,1,1,18.8,10a8.678,8.678,0,0,1-.529,3.022,1.973,1.973,0,0,1-1.554,1.085,1.652,1.652,0,0,1-1.651-1.651V6.113a.6.6,0,1,0-1.2,0v.615a5.063,5.063,0,1,0,.089,6.437,2.859,2.859,0,0,0,2.765,2.145,3.161,3.161,0,0,0,2.633-1.756A9.642,9.642,0,0,0,20,10,9.934,9.934,0,0,0,17.072,2.929ZM10,13.86A3.86,3.86,0,1,1,13.861,10,3.864,3.864,0,0,1,10,13.86Z"
                                        transform="translate(-0.001 0)" fill="#999" />
                                </svg>
                                <a href="#" class="company-info-link__value">Info@infinitycarports.com</a>
                            </p>
                            <p class="company-info__text company-info__phone company-info-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19.911" height="20"
                                    viewBox="0 0 19.911 20">
                                    <path id="Path_739" data-name="Path 739"
                                        d="M17.106,39.328a2.088,2.088,0,0,0-1.514-.694,2.159,2.159,0,0,0-1.532.69l-1.416,1.411c-.116-.063-.233-.121-.345-.179-.161-.081-.314-.157-.444-.237a15.388,15.388,0,0,1-3.687-3.36,9.078,9.078,0,0,1-1.21-1.909c.367-.336.708-.685,1.039-1.022.125-.125.251-.255.376-.381a2.056,2.056,0,0,0,0-3.1L7.151,29.324c-.139-.139-.282-.282-.417-.426-.269-.278-.551-.565-.842-.833a2.121,2.121,0,0,0-1.5-.659,2.195,2.195,0,0,0-1.523.659l-.009.009L1.335,29.61a3.278,3.278,0,0,0-.972,2.083,7.854,7.854,0,0,0,.573,3.324,19.291,19.291,0,0,0,3.427,5.717,21.084,21.084,0,0,0,7.021,5.5A10.939,10.939,0,0,0,15.327,47.4c.094,0,.193.009.282.009a3.376,3.376,0,0,0,2.585-1.111c0-.009.013-.013.018-.022A10.185,10.185,0,0,1,19,45.462c.193-.184.39-.376.582-.578a2.235,2.235,0,0,0,.677-1.55,2.153,2.153,0,0,0-.69-1.537Zm1.6,4.718s0,0,0,0c-.175.188-.354.358-.547.547a11.78,11.78,0,0,0-.865.9,2.16,2.16,0,0,1-1.685.712c-.067,0-.139,0-.206,0a9.717,9.717,0,0,1-3.495-1.048A19.9,19.9,0,0,1,5.3,39.969,18.189,18.189,0,0,1,2.074,34.6a6.4,6.4,0,0,1-.5-2.8,2.057,2.057,0,0,1,.618-1.331l1.528-1.528a1.018,1.018,0,0,1,.681-.318.958.958,0,0,1,.654.314l.013.013c.273.255.533.52.806.8.139.143.282.287.426.435L7.522,31.4a.855.855,0,0,1,0,1.389c-.13.13-.255.26-.385.385-.376.385-.735.744-1.125,1.093-.009.009-.018.013-.022.022a.914.914,0,0,0-.233,1.017l.013.04a9.82,9.82,0,0,0,1.447,2.361l0,0a16.444,16.444,0,0,0,3.978,3.62,6.117,6.117,0,0,0,.551.3c.161.081.314.157.444.237.018.009.036.022.054.031a.971.971,0,0,0,.444.112.958.958,0,0,0,.681-.309l1.532-1.532a1.014,1.014,0,0,1,.677-.336.912.912,0,0,1,.645.327l.009.009,2.469,2.469A.886.886,0,0,1,18.71,44.046Z"
                                        transform="translate(-0.344 -27.406)" fill="#878787" />
                                </svg>
                                <a href="#"
                                    class="company-info-link__value company-info__phone-value">(866)-681-7846</a>
                            </p>
                        </div>
                    </div>
                    <div class="col-9">
                        <nav class="footer-menu">
                            <div class="footer-menu__col">
                                <p class="footer-menu__col-name">Explore</p>
                                <a href="#" class="footer-menu__link">Carports</a>
                                <a href="#" class="footer-menu__link">Garages</a>
                                <a href="#" class="footer-menu__link">Barns</a>
                                <a href="#" class="footer-menu__link">RV Covers</a>
                                <a href="#" class="footer-menu__link">Other Buildings</a>
                            </div>
                            <div class="footer-menu__col">
                                <p class="footer-menu__col-name">Service Areas</p>
                                <a href="#" class="footer-menu__link">Colorado</a>
                                <a href="#" class="footer-menu__link">North Carolina</a>
                                <a href="#" class="footer-menu__link">Pennsylvania</a>
                                <a href="#" class="footer-menu__link">Texas Metal Buildings</a>
                                <a href="#" class="footer-menu__link">+15 More Service Areas</a>
                            </div>
                            <div class="footer-menu__col">
                                <p class="footer-menu__col-name">Customer Service</p>
                                <a href="#" class="footer-menu__link">About Us</a>
                                <a href="#" class="footer-menu__link">Contact Us</a>
                                <a href="#" class="footer-menu__link">Color Planner</a>
                                <a href="#" class="footer-menu__link">Resources</a>
                                <a href="#" class="footer-menu__link">Knowledge Centre</a>
                            </div>
                            <div class="footer-menu__col">
                                <p class="footer-menu__col-name">Other links</p>
                                <a href="#" class="footer-menu__link">FAQ</a>
                                <a href="#" class="footer-menu__link">Locations</a>
                                <a href="#" class="footer-menu__link">Terms of use</a>
                                <a href="#" class="footer-menu__link">Privacy Policy</a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__bottom">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-8">
                        <div class="social footer__social">
                            <a href="#" target="_blank" rel="noopener noreferrer" class="social__link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12.487" height="22"
                                    viewBox="0 0 12.487 22">
                                    <path id="facebook"
                                        d="M8.213,22H4.69a1.068,1.068,0,0,1-1.067-1.067V12.986H1.567A1.068,1.068,0,0,1,.5,11.919V8.514A1.068,1.068,0,0,1,1.567,7.447H3.623V5.742a5.806,5.806,0,0,1,1.535-4.16A5.529,5.529,0,0,1,9.235,0l2.687,0a1.069,1.069,0,0,1,1.065,1.067V4.233A1.068,1.068,0,0,1,11.92,5.3H10.111c-.552,0-.692.111-.722.145-.05.056-.108.215-.108.654V7.447h2.5a1.085,1.085,0,0,1,.528.134,1.071,1.071,0,0,1,.549.933v3.405a1.068,1.068,0,0,1-1.067,1.067H9.28v7.947A1.068,1.068,0,0,1,8.213,22Zm-3.3-1.29H7.99v-8.3A.713.713,0,0,1,8.7,11.7H11.57V8.737H8.7a.713.713,0,0,1-.712-.713V6.1a2.2,2.2,0,0,1,.432-1.508,2.186,2.186,0,0,1,1.689-.581H11.7V1.294l-2.463,0C6.568,1.29,4.912,3,4.912,5.742V8.024a.713.713,0,0,1-.712.713H1.79V11.7H4.2a.713.713,0,0,1,.712.713ZM11.919,1.294h0Zm0,0"
                                        transform="translate(-0.5)" fill="#fff" opacity="0.5" />
                                </svg>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" class="social__link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16.512"
                                    viewBox="0 0 20 16.512">
                                    <path id="twitter"
                                        d="M7.61,16.512c-3.338,0-5.976-.583-7.238-1.6l-.025-.02L.325,14.87a1.027,1.027,0,0,1-.269-1.08l.012-.032a1.045,1.045,0,0,1,.954-.656A8.618,8.618,0,0,0,3.3,12.788a4.325,4.325,0,0,1-2.28-2.634.934.934,0,0,1,.326-1.089.953.953,0,0,1,.284-.145A6.308,6.308,0,0,1,.337,6.6L.33,6.576.324,6.549a.972.972,0,0,1,.45-1.043.968.968,0,0,1,.461-.13A4.877,4.877,0,0,1,.867,4.252a4.7,4.7,0,0,1,.5-3.133L1.492.87A.692.692,0,0,1,2.6.69l.226.226A10.664,10.664,0,0,0,8.975,4.284,4.9,4.9,0,0,1,10.3,1.46,4.64,4.64,0,0,1,13.61,0h.008a6.636,6.636,0,0,1,2.738.891C16.946.7,17.656.4,18.392.084a.93.93,0,0,1,1.041.183.914.914,0,0,1,.2,1q-.08.224-.182.439a.931.931,0,0,1,.271.187,1.006,1.006,0,0,1,.25.94l-.009.032A3.837,3.837,0,0,1,18.42,4.985C18.3,11.363,13.5,16.512,7.61,16.512ZM1.5,14.259a13.815,13.815,0,0,0,6.114,1.08A9.158,9.158,0,0,0,14.4,12.25a11.067,11.067,0,0,0,2.85-7.509V4.709a.691.691,0,0,1,.369-.611A2.49,2.49,0,0,0,18.7,2.9a.692.692,0,0,1-.666-1.089,3.807,3.807,0,0,0,.261-.414c-.636.267-1.24.507-1.765.666a.75.75,0,0,1-.577-.062,5.714,5.714,0,0,0-2.328-.833,3.647,3.647,0,0,0-3.508,3.7.692.692,0,0,1-.826.679A12.125,12.125,0,0,1,2.247,2a3.463,3.463,0,0,0-.228,2.025A4.28,4.28,0,0,0,3.034,6a.692.692,0,0,1-.7,1.124,3.168,3.168,0,0,1-.645-.248,5.843,5.843,0,0,0,2,2.323.692.692,0,0,1-.442,1.26,3.11,3.11,0,0,1-.918-.2,3.154,3.154,0,0,0,2.517,1.783.692.692,0,0,1,.206,1.293A8.311,8.311,0,0,1,1.5,14.259Zm0,0"
                                        transform="translate(0 0)" fill="#fff" opacity="0.5" />
                                </svg>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" class="social__link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15.56" height="20"
                                    viewBox="0 0 15.56 20">
                                    <path id="Path_340" data-name="Path 340"
                                        d="M38.079,39.1C36.862,39,36.35,38.4,35.4,37.821c-.525,2.753-1.166,5.393-3.066,6.772-.587-4.161.861-7.287,1.533-10.6-1.146-1.929.138-5.812,2.555-4.855,2.975,1.176-2.576,7.173,1.151,7.922,3.89.782,5.478-6.75,3.066-9.2-3.486-3.537-10.146-.08-9.327,4.983.2,1.238,1.479,1.614.511,3.322-2.231-.494-2.9-2.254-2.811-4.6a7.507,7.507,0,0,1,6.772-6.9c4.2-.47,8.145,1.543,8.689,5.495.612,4.46-1.9,9.291-6.389,8.944Z"
                                        transform="translate(-29 -24.593)" fill="#f1f2f2" opacity="0.5" />
                                </svg>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" class="social__link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                    <g id="instagram" opacity="0.5">
                                        <path id="Path_337" data-name="Path 337"
                                            d="M14.586,0H5.414A5.42,5.42,0,0,0,0,5.414v9.173A5.42,5.42,0,0,0,5.414,20h9.173A5.42,5.42,0,0,0,20,14.586V5.414A5.42,5.42,0,0,0,14.586,0Zm4.241,14.586a4.246,4.246,0,0,1-4.241,4.241H5.414a4.246,4.246,0,0,1-4.241-4.241V5.414A4.246,4.246,0,0,1,5.414,1.172h9.173a4.246,4.246,0,0,1,4.241,4.241Zm0,0"
                                            fill="#fff" />
                                        <path id="Path_338" data-name="Path 338"
                                            d="M121.473,116a5.469,5.469,0,1,0,5.469,5.469A5.475,5.475,0,0,0,121.473,116Zm0,9.765a4.3,4.3,0,1,1,4.3-4.3A4.3,4.3,0,0,1,121.473,125.769Zm0,0"
                                            transform="translate(-111.473 -111.473)" fill="#fff" />
                                        <path id="Path_339" data-name="Path 339"
                                            d="M359.593,66.285a1.616,1.616,0,1,0,1.616,1.616A1.618,1.618,0,0,0,359.593,66.285Zm0,2.059a.443.443,0,1,1,.444-.443A.444.444,0,0,1,359.593,68.344Zm0,0"
                                            transform="translate(-343.993 -63.696)" fill="#fff" />
                                    </g>
                                </svg>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" class="social__link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18.178"
                                    viewBox="0 0 24 18.178">
                                    <g id="youtube" opacity="0.5">
                                        <path id="Path_341" data-name="Path 341"
                                            d="M197.689,109.545l-5.3-2.9a.974.974,0,0,0-1.441.854v5.752a.972.972,0,0,0,1.435.858l5.3-2.851a.974.974,0,0,0,.006-1.712Zm-5.337,2.982v-4.3l3.963,2.168Zm0,0"
                                            transform="translate(-181.995 -101.53)" fill="#fff" />
                                        <path id="Path_342" data-name="Path 342"
                                            d="M23.823,4.29V4.279a5.489,5.489,0,0,0-1.058-2.785A3.905,3.905,0,0,0,20.178.281L20.059.267l-.042,0C16.844.032,12.052,0,12,0H12c-.048,0-4.84.032-8.041.262l-.042,0L3.8.281a3.807,3.807,0,0,0-2.572,1.25A5.752,5.752,0,0,0,.179,4.266l0,.025C.169,4.371,0,6.284,0,8.205V10c0,1.921.169,3.835.177,3.915v.012A5.435,5.435,0,0,0,1.232,16.68a3.985,3.985,0,0,0,2.673,1.2c.1.011.182.021.239.031l.055.008c1.832.174,7.576.26,7.819.264h.015c.048,0,4.839-.032,8.012-.262l.042,0,.135-.015a3.719,3.719,0,0,0,2.549-1.22,5.751,5.751,0,0,0,1.049-2.735l0-.025C23.83,13.836,24,11.922,24,10v-1.8C24,6.284,23.83,4.371,23.823,4.29ZM22.593,10c0,1.778-.155,3.609-.17,3.777a4.465,4.465,0,0,1-.69,1.948,2.313,2.313,0,0,1-1.66.77l-.15.017c-3.069.222-7.68.256-7.892.257-.238,0-5.9-.09-7.674-.255-.091-.015-.189-.026-.293-.038a2.63,2.63,0,0,1-1.8-.751l-.013-.014a4.051,4.051,0,0,1-.676-1.929c-.011-.127-.17-1.98-.17-3.783v-1.8c0-1.776.155-3.605.17-3.777a4.374,4.374,0,0,1,.69-1.949,2.427,2.427,0,0,1,1.695-.8l.115-.014c3.114-.223,7.757-.256,7.924-.257s4.809.034,7.895.257l.124.015a2.518,2.518,0,0,1,1.722.78l.006.006a4.117,4.117,0,0,1,.676,1.957c.011.12.17,1.977.17,3.784Zm0,0"
                                            fill="#fff" />
                                    </g>
                                </svg>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" class="social__link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20.502" height="14"
                                    viewBox="0 0 20.502 14">
                                    <path id="email"
                                        d="M47.717,0H28.785A.786.786,0,0,0,28,.785v12.43a.786.786,0,0,0,.785.785H47.717a.786.786,0,0,0,.785-.785V.785A.786.786,0,0,0,47.717,0ZM29.35,1.935l6,4.289-6,5.617Zm8.9,5.131L30.911,1.35H45.592ZM36.519,7l1.3,1.4a.783.783,0,0,0,.869,0l1.3-1.4,6.043,5.652H30.476Zm4.63-.775,6-4.289V11.84Zm0,0"
                                        transform="translate(-28)" fill="#fff" opacity="0.5" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="col-4">
                        <p class="copyright footer__copyright">Copyright &copy; 2019 Infinity Carports. All Rights
                            Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        )
    }
}

export default FooterMenu