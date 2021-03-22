import React, { useState } from 'react'


const Contact = () => {

  const [data, setData] = useState(
    {
      fullname: '',
      phone: '',
      email: '',
      message: '',

    }


  );
  const InputEvent = (event) => {

    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    })

  }

const formSubmit = (e) => {
  e.preventDefault();
  alert(`My name is ${data.fullname} . My mobile number is ${data.phone} and email is ${data.email} , Here is what I am want to say ${data.message}`)

};



return (
  <>
    <div className="my-5">
      <h1 className="text-center"> Contact Us   </h1>

    </div>
    <div className="container contact_div">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto my-auto">
          <form onSubmit={formSubmit}>


            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Full Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Phone number</label>
              <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Phone number" />
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Message</label>
              <textarea name="message" value={data.message} onChange={InputEvent} placeholder="Enter your message" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="col-12 ">
              <center><button class="btn btn-outline-primary rounded-pill " type="submit">Submit form</button></center>
            </div>
          </form>

        </div>
      </div>

    </div>


  </>
);
}

export default Contact;
