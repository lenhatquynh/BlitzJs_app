import { Image, BlitzPage, Head, useRouter } from "blitz"
import logo from "public/img/logo.png"
import SignupForm from "../components/SignupForm"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const SignUp: BlitzPage = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <div className="sign section--bg custom-bg-signup">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sign__content">
                {/* <!-- registration form --> */}
                <SignupForm onSuccess={() => router.push("/")} />
                {/* <!-- registration form --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

SignUp.redirectAuthenticatedTo = "/"
// SignIn.getLayout = (page) => <Layout title="Details">{page}</Layout>

export default SignUp
