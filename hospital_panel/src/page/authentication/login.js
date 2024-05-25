import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import logoDark from "../../assets/images/logo-dark.png";

import bg1 from "../../assets/images/bg/bg-lines-one.png";

import {
  FiHome,
  AiFillFacebook,
  SlSocialGoogle,
} from "../../assets/icons/vander";
import { useRouter } from "../../hooks/use-router";
import { useDispatch } from "react-redux";
import useAxios from "../../network/useAxios";
import { loginHospitalAdmin } from "../../../src/urls/urls";
import { updateHospitalDetails, updateToken } from "../../redux/reducers/functionalities.reducer";
import { Alert } from "antd";

export default function Login() {
  const [formValues, setFormValues] = useState();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const loginButtonRef = React.useRef(null);

  const [message, setMessage] = useState({
    message: "",
    showMessage: "",
    type: "error",
  });
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
};
  const [
    authDetailsResponse,
    authDetailsError,
    authDetailsLoading,
    authDetailsFetch,
  ] = useAxios();
  const router = useRouter();
  const dispatch = useDispatch();
  const LoginFunction = () => {
    if (formValues?.email && formValues?.password) {
      authDetailsFetch(
        loginHospitalAdmin({
          email: formValues.email,
          password: formValues.password,
        })
      );
    }
  };
  useEffect(() => {
    if (authDetailsResponse?.result == "success") {
      localStorage.setItem("storedToken", authDetailsResponse?.token);
      dispatch(updateToken(authDetailsResponse?.token));
      dispatch(updateHospitalDetails(authDetailsResponse?.hospital));
      localStorage.setItem("hospitalLogo", authDetailsResponse?.hospital);

      
      router.push("/hospital-dashboard");
    } else if (authDetailsResponse?.result == "failure") {
      setMessage({
        message: "The email or password entered is invalid",
        showMessage: true,
        type: "error",
      });
    }
  }, [authDetailsResponse]);
  useEffect(() => {
    const check_token = localStorage.getItem("storedToken")
    if(check_token){
      router.push("/index")
    }
  },[])
  return (
    <>


      <section
        className="bg-home d-flex bg-light align-items-center"
        style={{ backgroundImage: `url(${bg1})`, backgroundPosition: "center" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8">
              <img
                src={logoDark}
                height="22"
                className="mx-auto d-block"
                alt=""
              />
              <div className="card login-page shadow mt-4 rounded border-0">
                <div className="card-body">
                  <h4 className="text-center">Hospital Admin</h4>
                  <div className="row mt-4">
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Enter Email <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Email ID"
                          name="email"
                          required=""
                          onChange={(e) => {
                            setFormValues((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }));
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Password <span className="text-danger">*</span>
                        </label>
                        <input
                         type={passwordVisible ? "text" : "password"}
                          className="form-control"
                          placeholder="Password"
                          required=""
                          onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                loginButtonRef.current.click();
                            }
                        }}
                          onChange={(e) => {
                            setFormValues((prev) => ({
                              ...prev,
                              password: e.target.value,
                            }));
                          }}
                        />
                           <button type="button" onClick={togglePasswordVisibility}
                                                    style={{
                                                        background: "transparent",
                                                        border: 0,
                                                        color: "blue",
                                                        float: "right",
                                                        marginBottom: "1rem",
                                                    }}
                                                >
                                                    {passwordVisible ? "Hide" : "Show"}
                                                </button>
                      </div>
                    </div>
                    {message?.showMessage && (
                      <Alert
                        style={{ marginTop: "1rem", marginBottom: "1rem" }}
                        message={message?.message}
                        type={message?.type}
                        closable
                        onClose={() => {
                          setMessage({
                            message: "",
                            showMessage: false,
                          });
                        }}
                      />
                    )}
                    <div className="col-lg-12">
                      <div className="d-flex justify-content-between">
                        <div className="mb-3">
                          <div className="form-check">
                            <input
                              className="form-check-input align-middle"
                              type="checkbox"
                              value=""
                              id="remember-check"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="remember-check"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>
                        {/* <Link to="/forgot-password" className="text-dark h6 mb-0">Forgot password ?</Link> */}
                      </div>
                    </div>
                    <div className="col-lg-12 mb-0">
                      <div className="d-grid">
                        <button
                          className="btn btn-primary"
                          ref={loginButtonRef}
                          onClick={() => {
                            LoginFunction();
                          }}
                        >
                          Sign in
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
