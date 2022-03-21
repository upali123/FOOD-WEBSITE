import classes from "./Form.module.css";
// import image from "../asstes/img_avatar.png";
import { useForm } from "react-hook-form";
import image from "../asstes/facebook.png";
import instagram from "../asstes/instagram.png";
import linkedin from "../asstes/linkedin.png";
import Header from "../components/Layout/Header";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    console.log({ data });
  }; // your form submit function which will invoke after successful validation

  return (
    <>
      {/* <h2>Feedback Form</h2> */}
      {/* <Header /> */}
      <form onSubmit={handleSubmit(onSubmit)} className={classes.Form}>
        <label className={classes.lab}>First Name</label>
        <input
          placeholder="firstName"
          className={classes.input}
          {...register("firstName", {
            required: true,

            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors?.firstName?.type === "required" && (
          <p>This field is required</p>
        )}
        {errors?.firstName?.type === "maxLength" && (
          <p>First name cannot exceed 20 characters</p>
        )}
        {errors?.firstName?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        {/* <label className={classes.lab}>Last Name</label>
        <input
          className={classes.input}
          {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
        />
        {errors?.lastName?.type === "pattern" && (
          <p>Alphabetical characters only </p>
        )} */}
        <label className={classes.lab}>Email Address</label>
        <input
          placeholder="Email Address"
          className={classes.input}
          {...register("email", {
            required: true,
            pattern: /^[A-Za-z]+[0-9]+@/i,
          })}
        />
        {errors?.firstName?.type === "required" && (
          <p>This field is required</p>
        )}
        {errors?.lastName?.type === "pattern" && (
          <p>Alphabetical characters only </p>
        )}
        <label className={classes.lab}>Phone Number</label>
        <input
          placeholder="PhoneNumber"
          className={classes.input}
          {...register("phoneNumber", { minLength: 10 })}
        />
        {errors?.phoneNumber && <p> less than 10 digit </p>}
        <label className={classes.lab}>Age</label>
        <input
          placeholder="Age"
          className={classes.input}
          {...register("age", { min: 18, max: 99 })}
        />
        {errors.age && (
          <p>You Must be older then 18 and younger then 99 years old</p>
        )}
        <div>
          <input className={classes.sub} type="submit" />
        </div>
        <div className={classes.logo}>
          <a href="https://www.facebook.com/">
            <img src={image} alt="hgfhsd" />
          </a>

          <a href="https://www.instagram.com/">
            <img src={instagram} alt="hgfhsd" />
          </a>

          <a href="https://www.linkedin.com/">
            <img src={linkedin} alt="hgfhsd" />
          </a>
        </div>
      </form>
    </>
  );
};
export default Form;
