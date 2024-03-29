import React from 'react'
// import web from "../src/images/a1.jpg"
import Card from './card'
import Sdata from './Sdata'

const Services = () => {
  return (
    <div >

      <div className="my-5">
        <h1 className="text-center"> Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {
                Sdata.map((val,ind) =>{
                  return <Card key={ind} imgsrc={val.imgsrc} title={val.title}   />
                  
                })
              }





            </div>

          </div>
        </div>
      </div>




    </div>
  );
}

export default Services;
