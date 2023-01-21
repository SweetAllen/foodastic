// import home_img from '../../assets/images/home1.png'
import Home_img_1 from '../../assets/images/home1.png'
import blue from '../../assets/images/blue.png'
import green from '../../assets/images/green.png'
import yellow_img from '../../assets/images/yellow.png'
import red from '../../assets/images/red.png'

const Home = props =>{
  const Works=[
    {id:1,src:Home_img_1, subtitle:"sport book", desc:"Rewind"},
    {id:2,src:Home_img_1,subtitle:"sport book", desc:"Rewind"},
    {id:3,src:Home_img_1,subtitle:"sport book", desc:"Rewind"},
    {id:4,src:Home_img_1,subtitle:"sport book", desc:"Rewind"},
    {id:5,src:Home_img_1,subtitle:"sport book", desc:"Rewind"},
    {id:6,src:Home_img_1,subtitle:"sport book", desc:"Rewind"},

  ]
  const Service=[
    {id:1,src:blue, title:"Research & Analysis", desc:"Rewind"},
    {id:4,src:yellow_img,title:"Research & Analysis", desc:"Rewind"},

    {id:2,src:green,title:"Research & Analysis", desc:"Rewind"},
    {id:3,src:red,title:"Research & Analysis", desc:"Rewind"},
  
  ]
    return (
      // home section

      <div>
        <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className='="row'>
                <div className='col-12'>
        <section className="container">
          <div className="row">
            <div className="col-12">
              <div className="my-5 py-5">
                   <h3>Digital  Agency</h3>
                   <h3>We developer complex interface systems for Web, Mobile & Ar</h3>
              </div>

              <img src={Home_img_1} alt="home img" className="img-fluid"></img>

            </div>
          </div>
        </section>
        </div>
              </div>
             
            </div>
          </div>


{/* //work section */}
<div className='bg-light'>

<div className="row justify-content-center">
            <div className="col-lg-10">
              <div className='="row'>
                <div className='col-12'>

                <section className="container">
          <div className="row">
            <div className="col-12">
              <div className="my-5 py-5 ">
                   <h3 className='text-center mb-5'>Our Work Select Projects</h3>
                  <div className='row  row-cols-2 g-5'>

                    {Works.map( (work) => {
                      return (
<div key={work.id}   className='col'>
                   <div class="card" >
                  
                   <img src={work.src} alt="home img" className="img-fluid"></img>
                   <div class="card-body">
                <h5 class="card-title">{work.subtitle}</h5>
              <p class="card-text">{work.subtitle}</p>
                </div>
               </div>
               
                   </div>

                      )
                    })}
                  
                 

               

                  


               
                   </div>

     
              </div>


            </div>
          </div>
        </section>
        </div>
              </div>
             
            </div>
          </div>
{/* service section */}

<div className='bg-light'>

<div className="row justify-content-center">
            <div className="col-lg-10">
              <div className='="row'>
                <div className='col-12'>

                <section className="container">
           
                <div className='row'>

                   
<dv className='col-lg-6' >
<h4>Our Services</h4>
</dv>
<dv className='col-lg-6' >
<p>As a strategic partner, we create a working product with a thoughtful and large-scale architecture. We launch, support and development.</p>
</dv>
               
                   </div>
     
<div className='row mt-3'>

{Service.map( (service) => {
                      return (
<div className='col'>

                   <div class="card text-center py-5" >
                     <div className='mb-3'>
                     <img src={service.src} alt="home img" className="w-50"></img>

                      </div>
                   <div class="card-body">
                <h6 class="card-title">{service.title}</h6>
                </div>
               </div>
               
                   </div>
                    )
                  })}
                <div className='text-end my-5'>
                <button type="button" class="btn btn-dark">Explore More</button>

                 {/* <span>explore more</span> */}
                </div>
</div> 

        </section>
        </div>
              </div>
             
            </div>
          </div>
</div>

{/* story section */}
<div className=''>

<div className="row justify-content-center">
            <div className="col-lg-10">
              <div className='="row'>
                <div className='col-12'>

               <div className='row'>
               <div className='col'>
                <div className='my-5 py-5'>
                <div className='text-center py-5 my-5'>
                  <p>Next</p>
                  <h4>Our Story</h4>
                </div>
                </div>
                
               </div>
               </div>

           
        </div>
              </div>
             
            </div>
          </div>









</div>
</div>

</div>

    //   <div >
    //     <section className="container">
    //         <div className="row">
    //             <div className="col-12">
    //               <div className="my-5 py-5">
    //                 <h2 className='fw-light'>Zon Mee Mee Kyaw</h2>
    //                 <h4 className='mb-5'>Mobile Developer</h4>
    //                 <div class="container">
    // <div class="col-md-3 px-0 float-md-end">
    // {/* <div class="col-md-4" style="padding-left: 0px;  padding-right: 0px;"> */}
                    // <img src={sweet} alt="home img" className="img-fluid"></img>
    //                </div>
    //                </div>
    //               </div>
    //             </div>
    //         </div>
    //     </section>
    //   </div>
    )
  }
  export default Home;