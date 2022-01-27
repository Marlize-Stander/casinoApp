import React from 'react'

const Contact = () => {
       return (
              <div className="sec__one">
                     <div class="container">
                            <div class="row align-items-center my-5">
                                   <div class="col-lg-7">
                                          <img
                                          class="img-fluid rounded mb-4 mb-lg-0"
                                          src="./images/photo5.jpg"
                                          alt=""
                                          />
                                   </div>
                                   <div class="col-lg-5">
                                          <h1 class="font-weight-light">Contact Us</h1>
                                   </div>
                            </div>
                            <div class="lt">
          <form class="form-horizontal"
                method="post" action="contact.php">
            <div class="form-group">
              <div class="col-sm-12">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="NAME"
                  name="name"
                  value=""
                />
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-12">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="EMAIL"
                  name="email"
                  value=""
                />
              </div>
            </div>
            <textarea
              class="form-control"
              rows="10"
              placeholder="MESSAGE"
              name="message">
            </textarea>
            <button
              class="btn btn-warning send-button"
              id="submit"
              type="submit"
              value="SEND">
              <i class="fa fa-paper-plane"></i>
              <span class="send-text">SEND</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

