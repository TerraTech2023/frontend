import { RegisterFormik } from '../../../utils/formik/Register/index.jsx';

export const Register = () => {

  const formik = RegisterFormik();

  return (
    <form onSubmit={ formik.handleSubmit }>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={ formik.handleChange }
          value={ formik.values.username }
        />
        { formik.errors.username ? <div>{ formik.errors.username }</div> : null }
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={ formik.handleChange }
          value={ formik.values.email }
        />
        { formik.errors.email ? <div>{ formik.errors.email }</div> : null }
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={ formik.handleChange }
          value={ formik.values.password }
        />
        { formik.errors.password ? <div>{ formik.errors.password }</div> : null }
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={ formik.handleChange }
          value={ formik.values.confirmPassword }
        />
        { formik.errors.confirmPassword ? <div>{ formik.errors.confirmPassword }</div> : null }
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
