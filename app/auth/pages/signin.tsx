import { BlitzPage, Head, useRouter } from "blitz"
import LoginForm from "app/auth/components/LoginForm"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const SignIn: BlitzPage = () => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <div className="sign section--bg custom-bg-signin">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sign__content">
                {/* <!-- authorization form --> */}
                <LoginForm
                  onSuccess={(_user) => {
                    const next = router.query.next
                      ? decodeURIComponent(router.query.next as string)
                      : "/"
                    router.push(next)
                  }}
                />
                {/* <!-- end authorization form --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

SignIn.redirectAuthenticatedTo = "/"

export default SignIn
