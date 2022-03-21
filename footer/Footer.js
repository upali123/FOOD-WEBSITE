import React from "react";
import classes from "./Footer.module.css";
export const Footer = () => {
  const SubmitHandler = () => {};
  return (
    <div className={classes.foo}>
      <footer class="footer-bs">
        <div class="row">
          <div class="col-md-3 footer-brand animated fadeInLeft">
            <h2>Upali Khanduri</h2>
            <p>
              Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam
              porttitor vitae orci nec ultricies. Curabitur vehicula, libero
            </p>
            <p>© 2022 UPALI KHANDURI, All rights reserved</p>
          </div>
          <div class="col-md-4 footer-nav animated fadeInUp">
            <h4>Menu —</h4>
            <div class="col-md-6">
              <ul class="pages">
                <li>
                  <a href="#">Travel</a>
                </li>
                <li>
                  <a href="#">Nature</a>
                </li>
                <li>
                  <a href="#">Explores</a>
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul class="list">
                <li>
                  <a href="/Terms">Terms & Condition</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-2 footer-social animated fadeInDown">
            <h4>Follow Us</h4>
            <ul>
              <li>
                <a href="https://github.com/upali123">github</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/upali-khanduri-1aa77b203">
                  linkedin
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/p/CWbEC-6hY1HMHzN42c-vXi73dDryLmo2oiuaMc0/?utm_medium">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 footer-ns animated fadeInRight">
            <h4>Newsletter</h4>
            <p>A rover wearing a fuzzy suit doesn’t alarm the real penguins</p>
            <p>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search for..."
                />
                <span class="input-group-btn">
                  <button
                    class="btn btn-default"
                    type="button"
                    onSubmit={SubmitHandler}
                  >
                    <span class="glyphicon glyphicon-envelope"></span>
                  </button>
                </span>
              </div>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
