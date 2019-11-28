import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  // <!-- Begin header -->
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="header__top row align-items-center no-gutters">
            <div class="col-2">
              <a href="#" class="logo header__logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="150.133"
                  height="65.129"
                  viewBox="0 0 150.133 65.129"
                >
                  <g
                    id="Group_505"
                    data-name="Group 505"
                    transform="translate(22189 -3608.807)"
                  >
                    <path
                      id="Path_1185"
                      data-name="Path 1185"
                      d="M4.061-20.708l-2.635-.4v-1.922h9.92v1.922l-2.728.4V-2.17l2.728.341V0H1.426V-1.86l2.635-.31Zm12.369,0-2.449-.4v-1.922h7.037l9.238,13.95,1.736,3.534V-20.708l-2.666-.4v-1.922h7.688v1.922l-2.387.4V0H30.876L21.235-14.663l-2.17-4.092V-2.17l3.131.31V0H13.981V-1.86l2.449-.31Zm24.862,0-2.542-.4v-1.922H55.862l.31,5.611h-2.48l-1.147-3.41-6.7-.341V-12.4l4.619-.093.589-2.728h1.984v7.874H51.088l-.62-2.79-4.619-.124V-2.17l4.743.31V0H38.9V-1.86l2.387-.31Zm19.685,0-2.635-.4v-1.922h9.92v1.922l-2.728.4V-2.17l2.728.341V0h-9.92V-1.86l2.635-.31Zm12.369,0-2.449-.4v-1.922h7.037l9.238,13.95,1.736,3.534V-20.708l-2.666-.4v-1.922H93.93v1.922l-2.387.4V0H87.792L78.151-14.663l-2.17-4.092V-2.17l3.131.31V0H70.9V-1.86l2.449-.31Zm25.265,0-2.635-.4v-1.922h9.92v1.922l-2.728.4V-2.17l2.728.341V0h-9.92V-1.86l2.635-.31Zm17.422-.279-4.433.155-1.209,6.758h-2.6l.527-8.959h20l.372,8.959h-2.449l-1.209-6.758-4.371-.155V-2.17l4.34.31V0H112.065V-1.86l3.968-.31ZM137.268-9.145l-6.634-11.563-1.767-.4v-1.922h9.114v1.922l-2.2.4,3.875,7.6.868,2.139.9-2.139,3.565-7.6-2.418-.4v-1.922h7.564v1.922l-1.922.372L142.042-9.176V-2.17l3.379.31V0H133.982V-1.86l3.286-.31Z"
                      transform="translate(-22189 3654)"
                      fill="#da3f42"
                    />
                    <path
                      id="Path_1183"
                      data-name="Path 1183"
                      d="M-22350.02,3627.31l31.578-17.5h86.086l32.336,17.5h-86.6l-31.826-14.66Z"
                      transform="translate(161.02 -1)"
                      fill="#da3f42"
                    />
                    <rect
                      id="Rectangle_1646"
                      data-name="Rectangle 1646"
                      width="150"
                      height="3"
                      transform="translate(-22189 3659)"
                      fill="#da3f42"
                    />
                    <path
                      id="Path_1184"
                      data-name="Path 1184"
                      d="M-51.624.088A2.634,2.634,0,0,1-53.7-.724a3.227,3.227,0,0,1-.72-2.22,3.313,3.313,0,0,1,.38-1.62A2.683,2.683,0,0,1-53-5.632a3,3,0,0,1,1.5-.376,5.112,5.112,0,0,1,.68.044q.328.044.776.116.336.056.368.056l-.088,1.648H-50.5l-.248-1.144a.671.671,0,0,0-.3-.144,2.254,2.254,0,0,0-.552-.056,1.254,1.254,0,0,0-1.092.628A3.325,3.325,0,0,0-53.1-3.04a3.951,3.951,0,0,0,.392,1.88,1.239,1.239,0,0,0,1.144.728A1.772,1.772,0,0,0-51.012-.5a.914.914,0,0,0,.332-.2l.352-.824.672.064-.16,1.24a2.017,2.017,0,0,0-.332.06q-.164.044-.2.052-.32.088-.6.14A3.725,3.725,0,0,1-51.624.088Zm2.5-1.336a1.174,1.174,0,0,1,.732-1.1A4.283,4.283,0,0,1-46.5-2.72V-2.9a1.53,1.53,0,0,0-.068-.512.493.493,0,0,0-.248-.276,1.183,1.183,0,0,0-.524-.092,2.3,2.3,0,0,0-.7.1,5.215,5.215,0,0,0-.648.26l-.248-.512a2.117,2.117,0,0,1,.4-.248,3.637,3.637,0,0,1,.676-.252,3.028,3.028,0,0,1,.808-.108,2.358,2.358,0,0,1,.964.16.968.968,0,0,1,.5.512,2.423,2.423,0,0,1,.152.944V-.48H-45v.448a4.468,4.468,0,0,1-.456.08,3.942,3.942,0,0,1-.52.04.584.584,0,0,1-.364-.08.434.434,0,0,1-.092-.328V-.536a2.162,2.162,0,0,1-.56.432,1.565,1.565,0,0,1-.776.192,1.474,1.474,0,0,1-.676-.156,1.209,1.209,0,0,1-.492-.456A1.359,1.359,0,0,1-49.12-1.248Zm1.864.672a.933.933,0,0,0,.384-.1A1.5,1.5,0,0,0-46.5-.92V-2.232a1.917,1.917,0,0,0-1.076.244.734.734,0,0,0-.356.628.846.846,0,0,0,.18.584A.628.628,0,0,0-47.256-.576Zm2.752.1.528-.064V-3.688l-.512-.144v-.552l1.24-.168h.024l.2.16v.176l-.024.648h.024a1.322,1.322,0,0,1,.264-.4,2.027,2.027,0,0,1,.524-.416,1.359,1.359,0,0,1,.684-.18.866.866,0,0,1,.3.048v1.2a.993.993,0,0,0-.584-.168,1.689,1.689,0,0,0-1.016.312V-.544l.928.072V0H-44.5Zm8.192-1.9a2.748,2.748,0,0,1-.276,1.232,2.156,2.156,0,0,1-.808.892,2.346,2.346,0,0,1-1.268.332A2.066,2.066,0,0,1-39,.06a1.433,1.433,0,0,1-.276-.068l.024.664v.728l.744.1v.456H-40.88V1.48l.52-.1V-3.688l-.52-.144v-.552l1.32-.168h.016l.2.16v.448a1.74,1.74,0,0,1,.544-.432,1.569,1.569,0,0,1,.752-.184,1.607,1.607,0,0,1,1.248.54A2.4,2.4,0,0,1-36.312-2.368ZM-38.464-3.9a1.038,1.038,0,0,0-.456.1,1.015,1.015,0,0,0-.328.232V-.592a.439.439,0,0,0,.228.136,1.222,1.222,0,0,0,.38.056.955.955,0,0,0,.828-.452,2.567,2.567,0,0,0,.308-1.42,2.258,2.258,0,0,0-.264-1.22A.8.8,0,0,0-38.464-3.9Zm2.808,1.68a2.553,2.553,0,0,1,.3-1.28,1.99,1.99,0,0,1,.8-.8,2.3,2.3,0,0,1,1.1-.268,1.967,1.967,0,0,1,1.556.62,2.452,2.452,0,0,1,.548,1.684,2.593,2.593,0,0,1-.3,1.292,1.938,1.938,0,0,1-.8.792,2.348,2.348,0,0,1-1.1.26A1.97,1.97,0,0,1-35.1-.532,2.441,2.441,0,0,1-35.656-2.216Zm2.168,1.784q.9,0,.9-1.744A3.484,3.484,0,0,0-32.8-3.564a.729.729,0,0,0-.7-.476q-.928,0-.928,1.744A3.319,3.319,0,0,0-34.2-.908.751.751,0,0,0-33.488-.432Zm2.864-.04.528-.064V-3.688l-.512-.144v-.552l1.24-.168h.024l.2.16v.176l-.024.648h.024a1.322,1.322,0,0,1,.264-.4,2.027,2.027,0,0,1,.524-.416,1.359,1.359,0,0,1,.684-.18.866.866,0,0,1,.3.048v1.2a.993.993,0,0,0-.584-.168,1.689,1.689,0,0,0-1.016.312V-.544l.928.072V0h-2.584Zm5.112.544a1.037,1.037,0,0,1-.744-.232A.985.985,0,0,1-26.5-.9V-3.832h-.52v-.416l.232-.084q.168-.06.256-.1a.794.794,0,0,0,.232-.36q.072-.168.264-.832h.64l.032,1.176h1.224v.616h-1.216v2.248a5.633,5.633,0,0,0,.024.632.321.321,0,0,0,.1.236.545.545,0,0,0,.28.052,2.084,2.084,0,0,0,.416-.044,1.765,1.765,0,0,0,.36-.108l.152.448a2.226,2.226,0,0,1-.656.3A2.79,2.79,0,0,1-25.512.072ZM-22.7-.656a.6.6,0,0,0,.292.18,1.322,1.322,0,0,0,.46.084.868.868,0,0,0,.564-.156A.509.509,0,0,0-21.2-.96a.5.5,0,0,0-.232-.428,4.771,4.771,0,0,0-.784-.4l-.224-.1a2.109,2.109,0,0,1-.824-.56,1.284,1.284,0,0,1-.272-.848,1.036,1.036,0,0,1,.216-.644,1.412,1.412,0,0,1,.608-.444,2.378,2.378,0,0,1,.9-.16,3.713,3.713,0,0,1,.644.048q.268.048.564.128a1.162,1.162,0,0,0,.24.064v1.048h-.632l-.184-.608a.419.419,0,0,0-.216-.144,1.073,1.073,0,0,0-.384-.064.884.884,0,0,0-.524.14.45.45,0,0,0-.2.388.529.529,0,0,0,.136.372,1.026,1.026,0,0,0,.3.228q.16.08.592.264a6.207,6.207,0,0,1,.716.352,1.507,1.507,0,0,1,.472.436,1.107,1.107,0,0,1,.188.652,1.168,1.168,0,0,1-.464.96A2.109,2.109,0,0,1-21.9.088a3.387,3.387,0,0,1-.732-.072q-.324-.072-.748-.192l-.176-.056V-1.288h.664Zm4.28-.688a.613.613,0,0,1,.508.3,1.278,1.278,0,0,1,.212.756,2.814,2.814,0,0,1-.164.944,3.2,3.2,0,0,1-.408.8,1.5,1.5,0,0,1-.468.46h-.008l-.344-.232v-.12A1.34,1.34,0,0,0-18.76.984a2.442,2.442,0,0,0,.152-.808.383.383,0,0,0-.048-.2,1.012,1.012,0,0,0-.152-.184A1.289,1.289,0,0,1-19-.46a.677.677,0,0,1-.064-.324.523.523,0,0,1,.168-.408.608.608,0,0,1,.424-.152Zm4.24-4-.68-.1v-.5h2.56v.5l-.7.1V-.56l.7.088V0h-2.56V-.48l.68-.08Zm3.048,1.656-.512-.144v-.552l1.328-.168h.024l.2.16v.312l-.008.192a2.466,2.466,0,0,1,.728-.456,2.277,2.277,0,0,1,.9-.192,1.39,1.39,0,0,1,.764.18,1,1,0,0,1,.4.564,3.609,3.609,0,0,1,.12,1.04V-.544L-6.7-.48V0H-8.768V-.48l.432-.064V-2.752A2.963,2.963,0,0,0-8.392-3.4a.569.569,0,0,0-.2-.344.7.7,0,0,0-.42-.108,1.655,1.655,0,0,0-.976.392V-.552l.48.072V0H-11.6V-.48l.464-.072ZM-6.24-2.2a2.635,2.635,0,0,1,.276-1.224,2.012,2.012,0,0,1,.792-.836,2.352,2.352,0,0,1,1.2-.3,2.76,2.76,0,0,1,.552.048q.232.048.52.128l.232.064-.048,1.368h-.7l-.2-.88q-.048-.208-.472-.208a.79.79,0,0,0-.7.392,2.36,2.36,0,0,0-.26,1.224,2.479,2.479,0,0,0,.3,1.348.925.925,0,0,0,.808.468,2.035,2.035,0,0,0,1.12-.328l.184.416A1.957,1.957,0,0,1-3.26-.1a2.231,2.231,0,0,1-.924.192,1.871,1.871,0,0,1-1.54-.632A2.536,2.536,0,0,1-6.24-2.2ZM-1.232.072A.612.612,0,0,1-1.664-.1a.571.571,0,0,1-.184-.436.617.617,0,0,1,.212-.484.75.75,0,0,1,.516-.188.594.594,0,0,1,.456.18A.606.606,0,0,1-.5-.6a.622.622,0,0,1-.2.492A.774.774,0,0,1-1.232.072Z"
                      transform="translate(-22039 3672)"
                      fill="#42588f"
                    />
                  </g>
                </svg>
              </a>
            </div>
            <div class="col-10">
              <div class="header__options">
                <div class="choice header__choice">
                  <a href="#" class="choice__link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="26"
                      viewBox="0 0 21.428 26.1"
                    >
                      <g transform="translate(-45.95 0.05)">
                        <g transform="translate(61.234 21.785)">
                          <path
                            d="M346.508,429a.508.508,0,1,0,.508.508A.508.508,0,0,0,346.508,429Z"
                            transform="translate(-346 -429)"
                            fill="#274180"
                            stroke="#274180"
                            stroke-width="0.1"
                          />
                        </g>
                        <g transform="translate(51.078 21.785)">
                          <path
                            d="M146.508,429a.508.508,0,1,0,.508.508A.508.508,0,0,0,146.508,429Z"
                            transform="translate(-146 -429)"
                            fill="#274180"
                            stroke="#274180"
                            stroke-width="0.1"
                          />
                        </g>
                        <g transform="translate(46)">
                          <path
                            d="M66.4,19.155a5.739,5.739,0,0,0-2.277-2.042.505.505,0,0,0-.288-.133,5.312,5.312,0,0,0-2.088-.426H60.219v-1.34a5.825,5.825,0,0,0,1.823-2.875h.209a2.03,2.03,0,0,0,1.492-3.408c.032-.027.063-.055.093-.085a1.523,1.523,0,0,0-.587-2.519,5.605,5.605,0,0,0-4.075-4.956A1.616,1.616,0,0,0,57.68,0H55.648a1.616,1.616,0,0,0-1.494,1.372A5.605,5.605,0,0,0,50.08,6.327a1.523,1.523,0,0,0-.493,2.6,2.03,2.03,0,0,0,1.491,3.408h.207a5.837,5.837,0,0,0,1.422,2.495c.128.133.263.26.4.38v1.34H51.586a5.313,5.313,0,0,0-2.088.426.505.505,0,0,0-.288.133A5.818,5.818,0,0,0,46,22.293v3.2a.508.508,0,0,0,.508.508H66.82a.508.508,0,0,0,.508-.508v-3.2A5.773,5.773,0,0,0,66.4,19.155ZM49.047,24.984H47.016V22.293a4.851,4.851,0,0,1,2.031-3.9Zm13.2-13.66h-.023c.015-.169.023-.339.023-.508V9.293a1.016,1.016,0,0,1,0,2.031Zm-8.125-8.88V4.723a.508.508,0,0,0,1.016,0V1.676c0-.315.266-.66.508-.66H57.68c.242,0,.508.346.508.66V4.723a.508.508,0,0,0,1.016,0V2.445a4.59,4.59,0,0,1,3.018,3.8H51.107A4.59,4.59,0,0,1,54.125,2.445Zm-3.047,8.88a1.016,1.016,0,0,1,0-2.031v1.523c0,.169.008.339.023.508Zm0-3.047H50.57a.508.508,0,0,1,0-1.016H62.758a.508.508,0,0,1,0,1.016H51.078Zm1.108,3.462,0-.016a4.683,4.683,0,0,1-.089-.907V9.293h9.141v1.523a4.685,4.685,0,0,1-.089.907l0,.017a4.81,4.81,0,0,1-1.77,2.856,4.36,4.36,0,0,1-5.418,0,4.705,4.705,0,0,1-.515-.463A4.816,4.816,0,0,1,52.186,11.74Zm3.97,13.245H52.094V23.816a.508.508,0,1,0-1.016,0v1.168H50.063V17.848a4.3,4.3,0,0,1,1.016-.248V20.77a.508.508,0,0,0,1.016,0v-3.2H53.4l2.757,2.895Zm-2.031-8.125v-.946a5.348,5.348,0,0,0,5.078,0v.946l-2.539,2.666Zm9.141,8.125H62.25V23.816a.508.508,0,1,0-1.016,0v1.168H57.172v-4.52l2.757-2.895h1.306v3.2a.508.508,0,0,0,1.016,0V17.6a4.3,4.3,0,0,1,1.016.248Zm3.047,0H64.281v-6.6a4.851,4.851,0,0,1,2.031,3.9Z"
                            transform="translate(-46)"
                            fill="#274180"
                            stroke="#274180"
                            stroke-width="0.1"
                          />
                        </g>
                      </g>
                    </svg>
                    Become a Installer
                  </a>
                  <a href="#" class="choice__link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="26"
                      viewBox="0 0 22.599 26.2"
                    >
                      <g transform="translate(-0.4 0.1)">
                        <path
                          d="M261.559,161.016a.508.508,0,1,0-.508-.508A.508.508,0,0,0,261.559,161.016Zm0,0"
                          transform="translate(-247.32 -151.875)"
                          fill="#274180"
                          stroke="#274180"
                          stroke-width="0.2"
                        />
                        <path
                          d="M161.559,161.016a.508.508,0,1,0-.508-.508A.508.508,0,0,0,161.559,161.016Zm0,0"
                          transform="translate(-152.398 -151.875)"
                          fill="#274180"
                          stroke="#274180"
                          stroke-width="0.2"
                        />
                        <path
                          d="M188.869,230.654a3.194,3.194,0,0,0,2.689.012.508.508,0,1,0-.424-.923,2.179,2.179,0,0,1-1.831-.008.508.508,0,1,0-.433.919Zm0,0"
                          transform="translate(-178.527 -218.023)"
                          fill="#274180"
                          stroke="#274180"
                          stroke-width="0.2"
                        />
                        <path
                          d="M22.9,20.605c0-2.792-3.18-4.982-5.906-5.086L15.6,14.27a6.625,6.625,0,0,0,2.722-5.332V5.586A5.6,5.6,0,0,0,12.72,0H10.689A5.568,5.568,0,0,0,5.121,5.586V8.938A6.636,6.636,0,0,0,7.807,14.26l-1.4,1.259C3.686,15.623.5,17.807.5,20.605v4.887A.508.508,0,0,0,1.008,26H22.391a.508.508,0,0,0,.508-.508ZM10.575,22.648h2.247l.532,2.336H10.027Zm2.291-1.016H10.543l-.39-1.214,1.547-.773,1.58.79ZM11.7,18.12,9.935,15.3a6.6,6.6,0,0,0,3.527,0Zm.727.754,2.438-3.9,1.315,1.181-1.673,3.76ZM10.689,1.016H12.72a4.584,4.584,0,0,1,4.588,4.57v.42l-.954-1.373a.508.508,0,0,0-.78-.065A5.009,5.009,0,0,1,11.7,6.094,5.012,5.012,0,0,1,7.824,4.567a.508.508,0,0,0-.782.069l-.9,1.326V5.586A4.566,4.566,0,0,1,10.689,1.016ZM6.137,8.938V7.764L7.547,5.7A6.083,6.083,0,0,0,11.7,7.109a6.08,6.08,0,0,0,4.156-1.415l1.453,2.092V8.938a5.586,5.586,0,1,1-11.172,0Zm2.4,6.035,2.438,3.9-2.08,1.04L7.22,16.154ZM1.516,20.605c0-2.092,2.543-3.9,4.765-4.062l1.9,4.269a.508.508,0,0,0,.691.248l.362-.181.412,1.283-.662,2.823H1.516Zm20.368,4.379H14.4l-.642-2.815.442-1.275.331.166a.508.508,0,0,0,.691-.248l1.9-4.269c2.222.164,4.765,1.971,4.765,4.063Zm0,0"
                          transform="translate(0)"
                          fill="#274180"
                          stroke="#274180"
                          stroke-width="0.2"
                        />
                        <path
                          d="M303.59,446h-2.031a.508.508,0,0,0,0,1.016h2.031a.508.508,0,0,0,0-1.016Zm0,0"
                          transform="translate(-285.288 -423.352)"
                          fill="#274180"
                          stroke="#274180"
                          stroke-width="0.2"
                        />
                        <path
                          d="M381.008,446a.508.508,0,1,1-.508.508A.508.508,0,0,1,381.008,446Zm0,0"
                          transform="translate(-360.703 -423.352)"
                          fill="#274180"
                          stroke="#274180"
                          stroke-width="0.2"
                        />
                      </g>
                    </svg>
                    Become a Dealer
                  </a>
                </div>
                <a href="tel:8666817846" class="header__phone-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 19.758 19.843"
                  >
                    <path
                      d="M16.136,38.638a1.967,1.967,0,0,0-1.427-.654,2.034,2.034,0,0,0-1.444.65l-1.334,1.33c-.11-.059-.219-.114-.325-.169-.152-.076-.3-.148-.418-.224a14.5,14.5,0,0,1-3.474-3.166,8.553,8.553,0,0,1-1.14-1.8c.346-.317.667-.646.979-.962.118-.118.236-.241.355-.359a1.937,1.937,0,0,0,0-2.921L6.757,29.213c-.131-.131-.266-.266-.393-.4-.253-.262-.519-.532-.794-.785a2,2,0,0,0-1.414-.621,2.068,2.068,0,0,0-1.435.621l-.008.008L1.278,29.483a3.088,3.088,0,0,0-.916,1.963A7.4,7.4,0,0,0,.9,34.578a18.175,18.175,0,0,0,3.229,5.386,19.864,19.864,0,0,0,6.615,5.179,10.306,10.306,0,0,0,3.715,1.1c.089,0,.182.008.266.008A3.181,3.181,0,0,0,17.162,45.2c0-.008.013-.013.017-.021a9.6,9.6,0,0,1,.739-.764c.182-.173.367-.355.549-.545a2.106,2.106,0,0,0,.637-1.461,2.029,2.029,0,0,0-.65-1.448Zm1.511,4.445s0,0,0,0c-.165.177-.333.338-.515.515a11.1,11.1,0,0,0-.815.844,2.035,2.035,0,0,1-1.587.671c-.063,0-.131,0-.194,0a9.155,9.155,0,0,1-3.292-.988,18.751,18.751,0,0,1-6.23-4.88,17.137,17.137,0,0,1-3.039-5.061A6.027,6.027,0,0,1,1.5,31.539a1.938,1.938,0,0,1,.583-1.254l1.439-1.439a.96.96,0,0,1,.642-.3.9.9,0,0,1,.616.3l.013.013c.257.241.5.49.76.756.131.135.266.27.4.409l1.152,1.152a.806.806,0,0,1,0,1.309c-.122.122-.241.245-.363.363-.355.363-.692.7-1.06,1.03-.008.008-.017.013-.021.021a.861.861,0,0,0-.219.958l.013.038A9.252,9.252,0,0,0,6.82,37.115l0,0a15.493,15.493,0,0,0,3.748,3.411,5.763,5.763,0,0,0,.519.283c.152.076.3.148.418.224.017.008.034.021.051.03a.915.915,0,0,0,.418.106.9.9,0,0,0,.642-.291l1.444-1.444a.955.955,0,0,1,.637-.317.86.86,0,0,1,.608.308l.008.008,2.326,2.326A.835.835,0,0,1,17.647,43.083Z"
                      transform="translate(0.155 -26.906)"
                      fill="#fff"
                      stroke="#fff"
                      stroke-width="1"
                    />
                  </svg>
                  866-681-7846
                </a>
              </div>
            </div>
          </div>
          <div class="header__bottom">
            <nav class="menu header__menu">
              <div class="menu__item">
                <a href="#" class="menu__link has-children">
                  Carports
                </a>
              </div>
              <div class="menu__item">
                <a href="#" class="menu__link has-children">
                  Garages
                </a>
              </div>
              <div class="menu__item">
                <a href="#" class="menu__link has-children">
                  Barns
                </a>
              </div>
              <div class="menu__item">
                <a href="#" class="menu__link has-children">
                  RV Covers
                </a>
              </div>
              <div class="menu__item">
                <a href="#" class="menu__link has-children">
                  Other Buildings
                </a>
              </div>
              <div class="menu__item">
                <a href="#" class="menu__link has-children">
                  Knowledge Center
                </a>
              </div>
              <div class="menu__item">
                <a href="#" class="menu__link has-children">
                  About Us
                </a>
              </div>
            </nav>
            <div class="search header__search">
              <form class="form search__form">
                <input
                  type="text"
                  name="s"
                  class="search__input"
                  placeholder="Search all type of buildings…."
                />
                <button type="submit" class="search__btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M26.8,25.864l-3.847-3.847a6.737,6.737,0,1,0-.944.944L25.86,26.8a.666.666,0,0,0,.944-.94Zm-9.061-2.72a5.4,5.4,0,1,1,5.4-5.4A5.408,5.408,0,0,1,17.743,23.144Z"
                      transform="translate(-11 -11)"
                      fill="#fff"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  //<!-- End header -->
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
