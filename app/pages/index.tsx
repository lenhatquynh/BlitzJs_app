import { Suspense } from "react"
import { Image, Link, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import logo from "public/img/logo.png"
import cover from "public/img/covers/cover.jpg"
import cover2 from "public/img/covers/cover2.jpg"
import { ListCard1 } from "app/core/components/ListCard1"
import { ListCard2 } from "app/core/components/ListCard2"
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
        <button
          className="button small"
          onClick={async () => {
            await logoutMutation()
          }}
        >
          Logout
        </button>
        <div>
          User id: <code>{currentUser.id}</code>
          <br />
          User role: <code>{currentUser.role}</code>
        </div>
      </>
    )
  } else {
    return (
      <>
        <Link href={"/signup"}>
          <a className="button small">
            <strong>Sign Up</strong>
          </a>
        </Link>
        <Link href={"/login"}>
          <a className="button small">
            <strong>Login</strong>
          </a>
        </Link>
      </>
    )
  }
}

const Home: BlitzPage = () => {
  return (
    <>
      {/* <!-- children --> */}
      {/* <!-- home --> */}
      <section className="home">
        {/* <!-- home bg --> */}
        <div className="owl-carousel home__bg custom_home">
          <div className="item home__cover "></div>
        </div>
        {/* <!-- end home bg --> */}

        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="home__title">
                <b>NEW ITEMS</b>
              </h1>
            </div>

            <div className="col-12">
              <div className="owl-carousel home__carousel custom-list-card1">
                {/* <!-- card --> */}
                <Suspense fallback={<div>Loading...</div>}>
                  <ListCard1 />
                </Suspense>
                {/* <!-- end card --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end home --> */}

      {/* <!-- content --> */}
      <section className="content">
        <div className="content__head">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* <!-- content title --> */}
                <h2 className="content__title">Movies</h2>
                {/* <!-- end content title --> */}
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          {/* <!-- content tabs --> */}
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="tab-1"
              role="tabpanel"
              aria-labelledby="1-tab"
            >
              <div className="row row--grid">
                {/* <!-- card --> */}
                <Suspense fallback={<div>Loading...</div>}>
                  <ListCard2 page={8} />
                </Suspense>

                {/* <!-- end card --> */}
              </div>
            </div>
          </div>
          {/* <!-- end content tabs --> */}
        </div>
      </section>
      {/* <!-- end content --> */}

      {/* <!-- end children --> */}
    </>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
