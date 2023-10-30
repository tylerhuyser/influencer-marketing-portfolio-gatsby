import React from 'react'

import "../../styles/IconLogo.css"

export default function IconLogo(props) {
  
  const { windowSize } = props

  console.log(windowSize)

  return (
  <>
      
      <div className='icon-logo-container'>
        <svg className="icon-logo" width={windowSize.width < 768 || (windowSize.width >= 1024 && windowSize.width < 1240) ? "90" : "321.1"} height={windowSize.width < 768  || (windowSize.width >= 1024 && windowSize.width < 1240) ? "82" : "64.22"} viewBox={windowSize.width < 768  || (windowSize.width >= 1024 && windowSize.width < 1240) ? "0 0 90 82" : "0 0 410 82"}>
          <defs id="SvgjsDefs1772"></defs>
          <g className="icon-rectangle" id="SvgjsG1773" featurekey="symbolContainer" transform="matrix(1,0,0,1,0,0)" fill="#e51065">
            <rect width="90" height="82"></rect>
          </g>
          <g className="icon-hand" id="SvgjsG1774" featurekey="symbolFeature-0" transform="matrix(2.3951493985218715,0,0,2.3951493985218715,16.25907749506683,12.125820607564131)" fill="#FFFFFF">
            <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" d="M8.186,6.642C7.446,7.034,6.752,7.473,6.006,7.88  C5.44,8.189,3.621,9.175,3.323,9.458L2.902,9.88c-0.822,0.829-1.34,2.559-1.34,3.849c0,1.225-0.02,1.893,0.445,3.056  c0.306,0.766,0.8,1.36,1.405,1.844c1.454,1.162,3.085,1.092,4.773,1.092v1.771c0,0.306,0.25,0.734,0.412,0.896  c0.088,0.088,0.282,0.215,0.396,0.277c0.151,0.083,0.313,0.133,0.531,0.134h0.011h9.915c0.337,0,0.732-0.253,0.908-0.441  c0.205-0.219,0.399-0.549,0.399-0.95v-2.067h0.464c1.551,0,1.749-2.489-0.169-2.489h-2.109c-1.181,0-1.528,1.048-1.195,1.828  c0.078,0.181,0.129,0.208,0.256,0.335c0.428,0.429,0.99,0.326,1.699,0.326V20.1H9.24V9.722c0-0.119,0.96-0.729,1.182-0.885  l2.055-1.574c0.521-0.439,1.024-0.921,1.024-1.675c0-0.577-0.44-1.055-1.012-1.055c-0.675,0-1.225,0.419-1.702,0.661L9.24,6.051  V3.52h10.463v4.683c-0.423,0-1.179,0.01-1.45,0.153c-1.021,0.542-0.741,2.335,0.522,2.335h2.573c0.501,0,1.055-0.512,1.055-1.012  c0-0.492,0.038-0.859-0.457-1.231c-0.31-0.233-0.736-0.246-1.188-0.246V2.592c0-0.402-0.194-0.731-0.399-0.951  C20.183,1.453,19.787,1.2,19.45,1.2H9.536C9.05,1.2,8.66,1.509,8.45,1.801C8.14,2.233,8.186,2.529,8.186,3.225  C8.186,4.364,8.186,5.503,8.186,6.642L8.186,6.642z M17.636,12.211c0-0.535,0.533-1.097,1.055-1.097h2.658  c0.327,0,0.626,0.209,0.792,0.389c0.631,0.679,0.176,2.058-0.75,2.058h-2.658c-0.61,0-1.097-0.533-1.097-1.139V12.211L17.636,12.211  z M17.636,15.08c0-0.552,0.525-1.098,1.182-1.098h2.446c1.176,0,1.482,1.516,0.776,2.169c-0.261,0.241-0.524,0.32-0.987,0.32h-2.109  c-0.384,0-0.712-0.112-0.919-0.304C17.647,15.82,17.636,15.511,17.636,15.08L17.636,15.08z M14.472,20.651  c0.392,0,0.71,0.318,0.71,0.71c0,0.393-0.318,0.71-0.71,0.71c-0.393,0-0.71-0.317-0.71-0.71  C13.762,20.97,14.079,20.651,14.472,20.651L14.472,20.651z M12.95,2.236h3.043c0.101,0,0.184,0.083,0.184,0.185l0,0  c0,0.102-0.083,0.184-0.184,0.184H12.95c-0.101,0-0.184-0.083-0.184-0.184l0,0C12.767,2.319,12.85,2.236,12.95,2.236z">
            </path>
          </g>

          {windowSize.width < 768 ?
            <></>
            :

            <g className="icon-text" id="SvgjsG1775" featurekey="nameFeature-0" transform="matrix(1.0788262891477016,0,0,1.0788262891477016,108.27387855467303,8.549481460142392)" fill="#FFFFFF">
              <path d="M11.32 40 l0 -23.44 l-9.72 0 l0 -7.76 l27.44 0 l0 7.76 l-9.72 0 l0 23.44 l-8 0 z M32.24 41.12 c0 6.24 5.32 11.64 12.08 11.64 c6.92 0 12.12 -5.28 12.12 -11.64 l0 -24.32 l-6.48 0 l0 11.64 c0 2.92 -2.52 5.44 -5.64 5.44 c-3.08 0 -5 -2.24 -5.56 -5.04 l-0.04 -12.04 l-6.48 0 l0 11.88 c0 6.08 5.68 11.28 12.08 11.28 c2.04 0 3.96 -0.44 5.68 -1.32 l-0.04 2.48 c-0.08 3.08 -2.28 5.56 -5.64 5.56 c-3.16 0 -5.6 -2.64 -5.6 -5.56 l0 -0.36 l-6.48 0 l0 0.36 z M59.64000000000001 40.04 l6.48 0 l-0.08 -31.28 l-6.36 0 l0 0.4 z M69.32 28.36 c0 -6.16 5.24 -11.52 11.96 -11.52 c6.68 0 11.92 5.36 11.92 11.52 c0 0.84 -0.08 1.64 -0.24 2.4 l-16.68 0.04 c0.88 1.8 2.72 3.08 5 3.08 c1.56 0 2.96 -0.64 3.92 -1.6 l7.28 0 c-1.64 4.36 -6 7.64 -11.2 7.64 c-6.72 0 -11.96 -5.2 -11.96 -11.4 l0 -0.16 z M76.48 25.6 l-0.2 0.56 l10.12 0 l-0.32 -0.56 c-0.96 -1.6 -2.68 -2.72 -4.8 -2.72 s-3.88 1.12 -4.8 2.72 z M96.39999999999999 16.84 l0 23.16 l6.36 0 l0.08 -12.08 c0.04 -2.96 2.44 -5.44 5.6 -5.44 l1.68 0 l0.04 -6.08 l-1.72 0 c-1.96 0 -3.88 0.4 -5.6 1.28 l0 -0.84 l-6.44 0 z M127.35999999999999 40 l0 -31.2 l7.96 0 l0 12.12 l12.72 0 l0 -12.12 l8 0 l0 31.2 l-8 0 l0 -11.6 l-12.72 0 l0 11.6 l-7.96 0 z M162.35999999999999 36.72 c2.28 2.44 5.36 3.28 8.72 3.28 c1.8 0 3.68 -0.28 5.36 -1 l0 1 l6.48 0 l0 -23.2 l-7.12 0 l0 11.2 c0 3.12 -1.32 5.16 -4.72 5.16 c-3.44 0 -4.68 -2.08 -4.68 -5.16 l0 -11.2 l-7.16 0 l0 11.56 c0 3.08 0.88 6 3.12 8.36 z M186.11999999999998 41.12 c0 6.24 5.32 11.64 12.08 11.64 c6.92 0 12.12 -5.28 12.12 -11.64 l0 -24.32 l-6.48 0 l0 11.64 c0 2.92 -2.52 5.44 -5.64 5.44 c-3.08 0 -5 -2.24 -5.56 -5.04 l-0.04 -12.04 l-6.48 0 l0 11.88 c0 6.08 5.68 11.28 12.08 11.28 c2.04 0 3.96 -0.44 5.68 -1.32 l-0.04 2.48 c-0.08 3.08 -2.28 5.56 -5.64 5.56 c-3.16 0 -5.6 -2.64 -5.6 -5.56 l0 -0.36 l-6.48 0 l0 0.36 z M213.55999999999997 32.96 c0 5.6 7.08 7.04 11.4 7.04 c4.28 0 10.68 -1.4 10.68 -6.8 c0 -1.64 -0.48 -2.44 -1.44 -3.64 c-0.8 -1.04 -2 -1.8 -3.12 -2.36 c-0.84 -0.44 -1.76 -0.8 -2.68 -1.08 c-0.92 -0.32 -1.84 -0.56 -2.72 -0.88 c-0.48 -0.16 -1.08 -0.32 -1.72 -0.56 c-0.6 -0.2 -1.2 -0.4 -1.56 -0.6 c-0.2 -0.12 -0.4 -0.24 -0.56 -0.36 s-0.2 -0.24 -0.2 -0.36 c0 -0.32 0.32 -0.6 0.96 -0.84 c0.64 -0.2 1.36 -0.28 1.8 -0.28 c0.68 0 1.6 0.16 2.36 0.48 c0.76 0.36 1.24 0.84 1.24 1.48 l0 1.04 l7.28 -0.04 l0 -1.12 c0 -2.36 -1.28 -4.08 -3.2 -5.36 c-2.36 -1.52 -5.04 -2 -7.8 -2 c-4.32 0 -10.52 1.8 -10.52 7.08 c0 0.92 0.24 1.8 0.72 2.6 c0.4 0.64 0.92 1.36 1.56 1.88 c1.32 1.04 3.32 1.88 4.92 2.4 c0.84 0.28 1.76 0.48 2.6 0.8 c0.48 0.16 1.12 0.32 1.76 0.52 c0.64 0.24 1.2 0.44 1.64 0.64 c0.44 0.24 0.72 0.52 0.72 0.84 c0 0.36 -0.28 0.6 -1 0.8 c-0.64 0.16 -1.4 0.16 -1.84 0.16 c-1 0 -2.28 -0.12 -3.04 -0.56 c-0.24 -0.12 -0.48 -0.32 -0.68 -0.52 s-0.32 -0.36 -0.32 -0.52 l-0.04 -1.4 l-7.24 0 l0 0.16 c0.04 0.44 0.04 0.88 0.04 1.36 z M238.83999999999997 28.36 c0 -6.16 5.24 -11.52 11.96 -11.52 c6.68 0 11.92 5.36 11.92 11.52 c0 0.84 -0.08 1.64 -0.24 2.4 l-16.68 0.04 c0.88 1.8 2.72 3.08 5 3.08 c1.56 0 2.96 -0.64 3.92 -1.6 l7.28 0 c-1.64 4.36 -6 7.64 -11.2 7.64 c-6.72 0 -11.96 -5.2 -11.96 -11.4 l0 -0.16 z M245.99999999999997 25.6 l-0.2 0.56 l10.12 0 l-0.32 -0.56 c-0.96 -1.6 -2.68 -2.72 -4.8 -2.72 s-3.88 1.12 -4.8 2.72 z M265.92 16.84 l0 23.16 l6.36 0 l0.08 -12.08 c0.04 -2.96 2.44 -5.44 5.6 -5.44 l1.68 0 l0.04 -6.08 l-1.72 0 c-1.96 0 -3.88 0.4 -5.6 1.28 l0 -0.84 l-6.44 0 z">
              </path>
            </g>

          }

        </svg>
      </div>

  </>
  )
  
}