import React, { useContext } from "react";
import { emailContext } from "../App";
import BulletPoint from "../images/BulletPoint.svg";
import Mob_pic from "../images/Mob-pic.svg";
import Des_pic from "../images/Des-pic.svg";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function Subscription() {
  const emailSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Valid email required"),
  });

  const navigate = useNavigate();
  const [email, setEmail] = useContext(emailContext);

  const handleSubmit = (value) => {
    setEmail(value.email);
    navigate("/greeting");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: emailSchema,
    onSubmit: handleSubmit,
  });

  const list = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];

  return (
    <div className="bg-CharcoalGrey flex justify-center items-center h-screen w-screen font-roboto">
      <div className="bg-white rounded-3xl p-5">
        <div className="sm:flex sm:flex-row flex flex-col-reverse">
          <div className="flex flex-col justify-center w-full sm:w-96">
            <h2 className="text-4xl text-center font-roboto font-bold mt-6">
              Stay updated!
            </h2>
            <p className="text-center p-3">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            {list.map((x, index) => (
              <div key={index} className="flex gap-3 mb-2 text-sm">
                <img className="pl-8" src={BulletPoint} alt="" />
                <p>{x}</p>
              </div>
            ))}
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col pl-8 p-9 gap-5"
            >
              <div className="flex flex-col">
                <div className="flex items-center justify-between text-center">
                  <label className="font-roboto font-bold" htmlFor="email">
                    Email address
                  </label>
                  <p className="text-Tomato text-center text-xs">
                    {formik.touched.email && formik.errors.email
                      ? formik.errors.email
                      : ""}
                  </p>
                </div>

                <input
                  name="email"
                  type="email"
                  placeholder="email@company.com"
                  className={`border p-3 rounded-lg ${
                    formik.touched.email && formik.errors.email
                      ? "border-Tomato"
                      : "border-black"
                  }`}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <button
                type="submit"
                className="bg-DarkSlateGrey text-white p-3 rounded-lg"
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
          <div>
            <img className="hidden sm:block" src={Des_pic} alt="" />
            <img className="block sm:hidden w-full" src={Mob_pic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
