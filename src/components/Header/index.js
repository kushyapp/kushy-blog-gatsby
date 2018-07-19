import React, { Component } from 'react'
import Link from 'gatsby-link'

class Header extends Component {

  render() {    
    return(
      <header className="SiteHeader ui menu fixed inverted red">
        <Link to={'/'} className="item logo">
          <svg width="39px" height="62px" viewBox="0 0 39 62" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <path d="M0.139355886,45.5454546 C-0.100645314,44.825451 -0.0306460143,43.6654626 0.349355886,42.0654546 C0.729357786,40.4654466 1.30935199,38.5954653 2.08935589,36.4554546 C2.86935979,34.3154439 3.77935069,32.005467 4.81935589,29.5254546 C5.85936109,27.0454422 6.92935039,24.5454672 8.02935589,22.0254546 C9.12936139,19.505442 10.1893508,17.0554665 11.2093559,14.6754546 C12.229361,12.2954427 13.1193521,10.165464 13.8793559,8.28545464 C14.6393597,6.40544524 15.1993541,4.84546084 15.5593559,3.60545464 C15.9193577,2.36544844 15.9793571,1.62545584 15.7393559,1.38545464 C15.4593545,1.14545344 15.5893532,0.865456236 16.1293559,0.545454636 C16.6693586,0.225453036 17.3493518,0.0454548356 18.1693559,0.00545463561 C18.98936,-0.0345455644 19.8193517,0.145452636 20.6593559,0.545454636 C21.4993601,0.945456636 22.0993541,1.74544864 22.4593559,2.94545464 C22.6993571,3.78545884 22.5793583,5.08544584 22.0993559,6.84545464 C21.6193535,8.60546344 20.9193605,10.6354431 19.9993559,12.9354546 C19.0793513,15.2354661 18.009362,17.7054414 16.7893559,20.3454546 C15.5693498,22.9854678 14.3393621,25.6054416 13.0993559,28.2054546 C13.9393601,27.5254512 14.8793507,26.7754587 15.9193559,25.9554546 C16.9593611,25.1354505 18.0093506,24.285459 19.0693559,23.4054546 C20.1293612,22.5254502 21.1593509,21.6354591 22.1593559,20.7354546 C23.1593609,19.8354501 24.049352,19.0054584 24.8293559,18.2454546 C25.6093598,17.4854508 26.2393535,16.7954577 26.7193559,16.1754546 C27.1993583,15.5554515 27.4393559,15.0654564 27.4393559,14.7054546 C27.4393559,14.3454528 27.7393529,14.2454538 28.3393559,14.4054546 C28.9393589,14.5654554 29.5393529,14.9354517 30.1393559,15.5154546 C30.7393589,16.0954575 31.1793545,16.8354501 31.4593559,17.7354546 C31.7393573,18.6354591 31.5593591,19.6254492 30.9193559,20.7054546 C30.4393535,21.5454588 29.689361,22.3654506 28.6693559,23.1654546 C27.6493508,23.9654586 26.4993623,24.725451 25.2193559,25.4454546 C23.9393495,26.1654582 22.5993629,26.8454514 21.1993559,27.4854546 C19.7993489,28.1254578 18.4593623,28.705452 17.1793559,29.2254546 C17.7793589,30.1454592 18.5293514,31.4454462 19.4293559,33.1254546 C20.3293604,34.805463 21.3393503,36.6554445 22.4593559,38.6754546 C23.5793615,40.6954647 24.7793495,42.7454442 26.0593559,44.8254546 C27.3393623,46.905465 28.669349,48.805446 30.0493559,50.5254546 C31.4293628,52.2454632 32.809349,53.6554491 34.1893559,54.7554546 C35.5693628,55.8554601 36.9193493,56.4254544 38.2393559,56.4654546 C38.5993577,56.4654546 38.7493562,56.7354519 38.6893559,57.2754546 C38.6293556,57.8154573 38.3593583,58.4054514 37.8793559,59.0454546 C37.3993535,59.6854578 36.7193603,60.2754519 35.8393559,60.8154546 C34.9593515,61.3554573 33.8993621,61.6054548 32.6593559,61.5654546 C30.7793465,61.5254544 29.0993633,60.765462 27.6193559,59.2854546 C26.1393485,57.8054472 24.8093618,55.9554657 23.6293559,53.7354546 C22.44935,51.5154435 21.3893606,49.1154675 20.4493559,46.5354546 C19.5093512,43.9554417 18.6493598,41.525466 17.8693559,39.2454546 C17.089352,36.9654432 16.3693592,35.0354625 15.7093559,33.4554546 C15.0493526,31.8754467 14.3793593,30.9654558 13.6993559,30.7254546 C13.1393531,31.005456 12.649358,31.2554535 12.2293559,31.4754546 C11.8093538,31.6954557 11.4593573,31.9054536 11.1793559,32.1054546 C10.2993515,33.9454638 9.48935959,35.6954463 8.74935589,37.3554546 C8.00935219,39.0154629 7.38935839,40.505448 6.88935589,41.8254546 C6.38935339,43.1454612 6.02935699,44.26545 5.80935589,45.1854546 C5.58935479,46.1054592 5.57935489,46.7454528 5.77935589,47.1054546 C5.93935669,47.4254562 5.80935799,47.7554529 5.38935589,48.0954546 C4.96935379,48.4354563 4.42935919,48.6154545 3.76935589,48.6354546 C3.10935259,48.6554547 2.42935939,48.4454568 1.72935589,48.0054546 C1.02935239,47.5654524 0.499357686,46.7454606 0.139355886,45.5454546 Z" id="k" fill="#FFFFFF"></path>
              </g>
          </svg>
        </Link>
        <nav className="Navigation right menu">
          <Link to={'/blog'} className="item">Blog</Link>
          <Link to={'/tags'} className="item">Tags</Link>
        </nav>
      </header>
    )
  }
  
}

export default Header