import { ReactNode, PropsWithoutRef } from "react"
import { Form as FinalForm, FormProps as FinalFormProps } from "react-final-form"
import { z } from "zod"
import { validateZodSchema } from "blitz"
export { FORM_ERROR } from "final-form"

export interface FormProps<S extends z.ZodType<any, any>>
  extends Omit<PropsWithoutRef<JSX.IntrinsicElements["form"]>, "onSubmit"> {
  /** All your form fields */
  children?: ReactNode
  /** Text to display in the submit button */
  submitText?: string
  schema?: S
  onSubmit: FinalFormProps<z.infer<S>>["onSubmit"]
  initialValues?: FinalFormProps<z.infer<S>>["initialValues"]
}

export function FormSignIn<S extends z.ZodType<any, any>>({
  children,
  submitText,
  schema,
  initialValues,
  onSubmit,
  ...props
}: FormProps<S>) {
  return (
    <FinalForm
      initialValues={initialValues}
      validate={validateZodSchema(schema)}
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, submitError }) => (
        <form className="form sign__form" onSubmit={handleSubmit} {...props}>
          <a href="/" className="sign__logo">
            <img src="./img/logo.png" alt="" />
          </a>

          {children}

          <div className="sign__group sign__group--checkbox">
            <input id="remember" name="remember" type="checkbox" defaultChecked={true} />
            <label htmlFor="remember">Remember Me</label>
          </div>

          {submitText && (
            <button className="sign__btn" type="submit" disabled={submitting}>
              {submitText}
            </button>
          )}

          <span className="sign__text">
            Do not have an account? <a href="/signup">Sign up!</a>
          </span>

          <span className="sign__text">
            <span className="highligh-text">Forgot password?</span>
          </span>

          {submitError && (
            <div role="alert" style={{ color: "red" }}>
              {submitError}
            </div>
          )}
        </form>
      )}
    />
  )
}

export default FormSignIn
