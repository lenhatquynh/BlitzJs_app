import { Image, BlitzPage, Head, useMutation, useRouter } from "blitz"
import Layout from "app/core/layouts/Layout"
import user from "public/img/user.svg"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import { Suspense } from "react"
import { ChangePassword } from "../../auth/validations"
import PasswordForm from "app/profile/components/PasswordChangeData"
import ProfileForm from "app/profile/components/ProfileDetailData"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <>
        {/* logout */}
        <button
          className="profile__logout"
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
        <a href="/signin" className="profile__logout header__sign-in">
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

const ProfileUser = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <>
        <div className="profile__meta">
          <h3>{currentUser.name}</h3>
          <span>BlitzJs ID: {currentUser.id}</span>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="profile__meta">
          <h3>Enter username</h3>
          <span>BlitzJs ID: enter id</span>
        </div>
      </>
    )
  }
}

const ProfileDetail = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return <></>
  } else {
    return <></>
  }
}

const Profile: BlitzPage = () => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      {/* <!-- children --> */}

      {/* <!-- page title --> */}
      <section className="section section--first section--bg custom-bg-profile">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section__wrap">
                {/* <!-- section title --> */}
                <h1 className="section__title">My BlitzJs</h1>
                {/* <!-- end section title --> */}

                {/* <!-- breadcrumb --> */}
                <ul className="breadcrumb">
                  <li className="breadcrumb__item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb__item breadcrumb__item--active">Profile</li>
                </ul>
                {/* <!-- end breadcrumb --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end page title --> */}

      {/* <!-- content --> */}
      <div className="content">
        {/* <!-- profile --> */}
        <div className="profile">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="profile__content">
                  <div className="profile__user">
                    <div className="profile__avatar">
                      <Image src={user} alt="" />
                    </div>
                    <Suspense fallback="Loading...">
                      <ProfileUser />
                    </Suspense>
                  </div>

                  {/* <!-- content tabs nav --> */}
                  <ul
                    className="nav nav-tabs content__tabs content__tabs--profile"
                    id="content__tabs"
                    role="tablist"
                  >
                    <li className="nav-item " role="presentation">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#tab-3"
                        role="tab"
                        aria-controls="tab-3"
                        aria-selected="true"
                      >
                        Settings
                      </a>
                    </li>
                  </ul>
                  {/* <!-- end content tabs nav --> */}

                  {/* <!-- content mobile tabs nav --> */}
                  <div
                    className="content__mobile-tabs content__mobile-tabs--profile"
                    id="content__mobile-tabs"
                  >
                    <div
                      className="content__mobile-tabs-btn dropdown-toggle"
                      role="navigation"
                      id="mobile-tabs"
                      data-toggle="dropdown"
                      aria-haspopup={true}
                      aria-expanded={false}
                    >
                      <input type="button" value="Settings" />
                      {/* <!-- <span></span> --> */}
                    </div>

                    <div
                      className="content__mobile-tabs-menu dropdown-menu"
                      aria-labelledby="mobile-tabs"
                    ></div>
                  </div>
                  {/* <!-- end content mobile tabs nav --> */}

                  <Suspense fallback="Loading...">
                    <UserInfo />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end profile --> */}

        <div className="container">
          {/* <!-- content tabs --> */}
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="tab-3"
              role="tabpanel"
              aria-labelledby="3-tab"
            >
              <div className="row row--grid">
                {/* <!-- details form --> */}
                <div className="col-12 col-lg-6">
                  <form action="#" className="profile__form">
                    <div className="row">
                      <div className="col-12">
                        <h4 className="profile__title">Profile details</h4>
                      </div>

                      <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                        <div className="profile__group">
                          <label className="profile__label" htmlFor="username">
                            Username
                          </label>
                          <input
                            id="username"
                            type="text"
                            name="username"
                            className="profile__input"
                            placeholder="User 123"
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                        <div className="profile__group">
                          <label className="profile__label" htmlFor="email">
                            Email
                          </label>
                          <input
                            id="email"
                            type="text"
                            name="email"
                            className="profile__input"
                            placeholder="email@email.com"
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                        <div className="profile__group">
                          <label className="profile__label" htmlFor="firstname">
                            First Name
                          </label>
                          <input
                            id="firstname"
                            type="text"
                            name="firstname"
                            className="profile__input"
                            placeholder="First name"
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                        <div className="profile__group">
                          <label className="profile__label" htmlFor="lastname">
                            Last Name
                          </label>
                          <input
                            id="lastname"
                            type="text"
                            name="lastname"
                            className="profile__input"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <button className="profile__btn" type="button">
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* <!-- end details form --> */}

                {/* <!-- password form --> */}
                <div className="col-12 col-lg-6">
                  <form action="#" className="profile__form">
                    <div className="row">
                      <div className="col-12">
                        <h4 className="profile__title">Change password</h4>
                      </div>

                      <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                        <div className="profile__group">
                          <label className="profile__label" htmlFor="oldpass">
                            Old Password
                          </label>
                          <input
                            id="oldpass"
                            type="password"
                            name="oldpass"
                            className="profile__input"
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                        <div className="profile__group">
                          <label className="profile__label" htmlFor="newpass">
                            New Password
                          </label>
                          <input
                            id="newpass"
                            type="password"
                            name="newpass"
                            className="profile__input"
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                        <div className="profile__group">
                          <label className="profile__label" htmlFor="confirmpass">
                            Confirm New Password
                          </label>
                          <input
                            id="confirmpass"
                            type="password"
                            name="confirmpass"
                            className="profile__input"
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <button className="profile__btn" type="button">
                          Change
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* <!-- end password form --> */}
              </div>
            </div>
          </div>
          {/* <!-- end content tabs --> */}
        </div>
      </div>
      {/* <!-- end content --> */}

      {/* <!-- end children --> */}
    </>
  )
}

Profile.suppressFirstRenderFlicker = true
Profile.getLayout = (page) => <Layout title="Details">{page}</Layout>

export default Profile
