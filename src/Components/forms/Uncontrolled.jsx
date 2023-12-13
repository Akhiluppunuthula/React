import { Formik } from "formik";

const Uncontrolled = () => {
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email || !values.password) {
            errors.email = "Both email and password are required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          if (!values.email || !values.password) {
            alert("Both email and password are required");
            setSubmitting(false);
            return;
          }
          const userDetails = {
            userEmail: values.email,
            userPassword: values.password,
          };

          alert(JSON.stringify(userDetails));

          localStorage.setItem("userDetails", JSON.stringify(userDetails));
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleSubmit} className="bg-slate-500">
              <input
                className="border-2 m-8"
                type="email"
                placeholder="User@gmail.com"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <h4 className="font-semibold text-orange-500">
                {errors.email && touched.email && errors.email}
              </h4>
              <input
                className="border-2 m-8"
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <h4 className="font-semibold  text-orange-500">
                {errors.password && touched.password && errors.password}
              </h4>
              <div className="flex justify-center my-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="border-2 "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Uncontrolled;
