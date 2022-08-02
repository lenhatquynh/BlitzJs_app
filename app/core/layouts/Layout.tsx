import { Head, BlitzLayout, Image, useMutation } from "blitz"
import logo from "/public/img/logo.png"
import download from "/public/img/Download_on_the_App_Store_Badge.svg"
import google from "/public/img/google-play-badge.png"
import { Suspense } from "react"
import { useCurrentUser } from "../hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <>
        {/* logout */}
        <button
          className="header__sign-in "
          type="button"
          onClick={async () => {
            await logoutMutation()
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z" />
          </svg>
          <span>Logout</span>
        </button>
        {/* end logout */}
      </>
    )
  } else {
    return (
      <>
        {/* sign  in */}
        <a href="/signin" className="header__sign-in">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20,12a1,1,0,0,0-1-1H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H19A1,1,0,0,0,20,12ZM17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V16a1,1,0,0,0-2,0v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,17,2Z" />
          </svg>
          <span>sign in</span>
        </a>
        {/* end sign in */}
      </>
    )
  }
}

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title || "blitz_movie"}</title>
        <link rel="icon" href="/img/logo.png" />
        {/* <!-- JS --> */}
      </Head>
      {/* <!-- header --> */}
      <header className="header">
        <div className="header__wrap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header__content">
                  {/* <!-- header logo --> */}
                  <a href="/" className="header__logo">
                    <Image src={logo} alt="" width={85} height={187} />
                  </a>
                  {/* <!-- end header logo --> */}

                  {/* <!-- header nav --> */}
                  <ul className="header__nav">
                    {/* <!-- dropdown --> */}
                    <li className="dropdown header__nav-item">
                      <a className=" header__nav-link mr40 " href="/about">
                        <span>ABOUT</span>
                      </a>
                      <a className=" header__nav-link mr40 " href="/profile">
                        <span>PROFILE</span>
                      </a>
                      <a className=" header__nav-link mr40" href="/signin">
                        <span>SIGNIN</span>
                      </a>
                      <a className=" header__nav-link mr40" href="/signup">
                        <span>SIGNUP</span>
                      </a>
                      <a className=" header__nav-link mr40" href="/404">
                        <span>404</span>
                      </a>
                      <a className=" header__nav-link mr40" href="/privacy">
                        <span>PRIVACY</span>
                      </a>
                    </li>
                    {/* <!-- end dropdown --> */}
                  </ul>
                  {/* <!-- end header nav --> */}

                  {/* <!-- header auth --> */}
                  <div className="header__auth">
                    <Suspense fallback="Loading...">
                      <UserInfo />
                    </Suspense>
                  </div>
                  {/* <!-- end header auth --> */}

                  {/* <!-- header menu btn --> */}
                  <button className="header__btn" type="button">
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                  {/* <!-- end header menu btn --> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- end header search --> */}
      </header>
      {/* <!-- end header --> */}

      {/* <!-- children --> */}
      {children}

      {/* <!-- footer --> */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            {/* <!-- footer list --> */}
            <div className="col-12 col-md-3">
              <h6 className="footer__title">Download App</h6>
              <ul className="footer__app">
                <li>
                  <a href="">
                    <Image src={download} alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <Image src={google} alt="" />
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- end footer list --> */}

            {/* <!-- footer list --> */}
            <div className="col-6 col-sm-4 col-md-3">
              <h6 className="footer__title">Resources</h6>
              <ul className="footer__list">
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Pricing Plan</a>
                </li>
                <li>
                  <a href="">Help Center</a>
                </li>
              </ul>
            </div>
            {/* <!-- end footer list --> */}

            {/* <!-- footer list --> */}
            <div className="col-6 col-sm-4 col-md-3">
              <h6 className="footer__title">Legal</h6>
              <ul className="footer__list">
                <li>
                  <a href="">Terms of Use</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Security</a>
                </li>
              </ul>
            </div>
            {/* <!-- end footer list --> */}

            {/* <!-- footer list --> */}
            <div className="col-12 col-sm-4 col-md-3">
              <h6 className="footer__title">Contact</h6>
              <ul className="footer__list">
                <li>
                  <a href="">034 617 4284</a>
                </li>
                <li>
                  <a href="">nhatquynhle2001@gmail.com</a>
                </li>
              </ul>
              <ul className="footer__social">
                <li className="facebook">
                  <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z" />
                    </svg>
                  </a>
                </li>
                <li className="instagram">
                  <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z" />
                    </svg>
                  </a>
                </li>
                <li className="twitter">
                  <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" />
                    </svg>
                  </a>
                </li>
                <li className="vk">
                  <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M15.07294,2H8.9375C3.33331,2,2,3.33331,2,8.92706V15.0625C2,20.66663,3.32294,22,8.92706,22H15.0625C20.66669,22,22,20.67706,22,15.07288V8.9375C22,3.33331,20.67706,2,15.07294,2Zm3.07287,14.27081H16.6875c-.55206,0-.71875-.44793-1.70831-1.4375-.86463-.83331-1.22919-.9375-1.44794-.9375-.30206,0-.38544.08332-.38544.5v1.3125c0,.35419-.11456.5625-1.04162.5625a5.69214,5.69214,0,0,1-4.44794-2.66668A11.62611,11.62611,0,0,1,5.35419,8.77081c0-.21875.08331-.41668.5-.41668H7.3125c.375,0,.51044.16668.65625.55212.70831,2.08331,1.91669,3.89581,2.40625,3.89581.1875,0,.27081-.08331.27081-.55206V10.10413c-.0625-.97913-.58331-1.0625-.58331-1.41663a.36008.36008,0,0,1,.375-.33337h2.29169c.3125,0,.41662.15625.41662.53125v2.89587c0,.3125.13544.41663.22919.41663.1875,0,.33331-.10413.67706-.44788a11.99877,11.99877,0,0,0,1.79169-2.97919.62818.62818,0,0,1,.63544-.41668H17.9375c.4375,0,.53125.21875.4375.53125A18.20507,18.20507,0,0,1,16.41669,12.25c-.15625.23956-.21875.36456,0,.64581.14581.21875.65625.64582,1,1.05207a6.48553,6.48553,0,0,1,1.22912,1.70837C18.77081,16.0625,18.5625,16.27081,18.14581,16.27081Z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- end footer list --> */}

            {/* <!-- footer copyright --> */}
            <div className="col-12">
              <div className="footer__copyright">
                <small>
                  © BlitzJs, Create by <a href="">LNQ</a>.
                </small>

                <ul>
                  <li>
                    <a href="">Terms of Use</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- end footer copyright --> */}
          </div>
        </div>
      </footer>
      {/* <!-- end footer --> */}
    </>
  )
}

export default Layout
