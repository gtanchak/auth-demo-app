import FormTitle from "components/FormTitle/FormTitle";
import { SubmitHandler, useForm } from "react-hook-form";

type RegisterForm = {
  username: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<RegisterForm>();

  const onSubmit: SubmitHandler<RegisterForm> = (data) => {
    console.log(data);
  };

  return (
    <section className='auth-layout'>
      <FormTitle title='Sign Up' />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-wrapper'>
          <label className='form-label' htmlFor='username'>
            UserName:
          </label>
          <input
            className='form-input'
            type='text'
            {...register("username", {
              required: { value: true, message: "This is required filed" },
              pattern: /^[a-zA-Z0-9-_]{3,23}$/,
            })}
          />
          {errors.username && (
            <p className='error'>{errors.username.message}</p>
          )}
        </div>
        <div className='form-wrapper'>
          <label className='form-label' htmlFor='password'>
            Password:
          </label>
          <input
            className='form-input'
            type='password'
            {...register("password", {
              required: {
                value: true,
                message: "Password Field is required",
              },
            })}
          />
          {errors.password && (
            <p className='error'>{errors.password.message}</p>
          )}
        </div>
        <div className='form-wrapper'>
          <label className='form-label' htmlFor='confirmPassword'>
            Confirm Password:
          </label>
          <input
            className='form-input'
            type='password'
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "Confirm Password Field is required",
              },
              validate: (value) => value === getValues("password"),
            })}
          />
          {errors.confirmPassword && (
            <p className='error'>{errors.confirmPassword.message}</p>
          )}
        </div>
        <button className='button'>Submit</button>
      </form>
    </section>
  );
};

export default Register;
