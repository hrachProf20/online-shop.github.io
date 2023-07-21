import userData from "./userData";

const UsersItem = () => {
    return(
        <>
          <div className="users-item">
              <div className="users-desc">
                  <img src="/images/users-icon.png" alt=""/>
                  <div className="header-users">
                      {
                          userData.map((value, index) => {
                              return(
                                  <div key={index}>
                                      <div className='desc-userAcc'>
                                          <label htmlFor="">{/*{value.label}:*/} aaaa</label>
                                          <h1>{/*{value.desc}*/} skskk</h1>
                                      </div>


                                  </div>
                              )
                          })
                      }

                      <div className='profession'>
                          <h1>Graphic Designer</h1>
                          <p>$50.000 - $60.0000</p>
                      </div>

                  </div>
              </div>

              <div className="About">
                  <div className="desc-about">
                      <div className='about-p'>
                          <h1>about Adriana</h1>

                          <p>Lorem ipsum dolor sit amet, A, aperiam eum exercitationem impedit ipsum labore necessitatibus praesentium quas repellat reprehenderit sed, suscipit veniam!</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor, dolores eligendi fugit iure ratione repellendus ut. Dicta enim, nihil?</p>

                          <div className="Frustratioons">
                              <div className="frust-text">
                                  <h1>Frustrastions</h1>
                                  <div>
                                      <p>The challenges this user would like to avoid.</p>
                                      <p>An obstacle that prevents this user from achieving their goals.</p>
                                      <p>Problems with the available solutions</p>
                                  </div>
                              </div>
                          </div>

                          <div className="Bio">
                              <div className="bio-text">
                                  <h1>Bio</h1>
                                  <div>
                                      <p>The bio should be a short paragraph describing the user's journey. It should include some of their history leading up to a current use case. It may be helpful to incorporate information listed across the template and add pertinent details that may have been left out. Highlight factors of the user's personal and professional life that make this user an ideal customer of your product.
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="reyting">
                          <div className='all-motivation'>
                              <h1>Motivation</h1>
                                  <label htmlFor="">incentive</label>
                                 <div className='range'>
                                     <div className='range-item'></div>
                                 </div>

                              <label htmlFor="">Fear</label>
                              <div className='range-fear'>
                                  <div className='range-fear-item'></div>
                              </div>


                              <label htmlFor="">Growth</label>
                              <div className='range-Growth'>
                                  <div className='range-Growth-item'></div>
                              </div>

                              <label htmlFor="">Power</label>
                              <div className='range-power'>
                                  <div className='range-power-item'></div>
                              </div>


                              <label htmlFor="">Social</label>
                              <div className='range-Social'>
                                  <div className='range-Social-item'></div>
                              </div>

                             <div className="brands">
                                 <div className="brand-title">
                                     <h2>Brand's & Infiuencers</h2>
                                 </div>
                                 
                                 <div className="brand-img">
                                     <img src="/images/tesla.png" alt=""/>
                                     <img src='/images/programer.jpg' alt=""/>
                                 </div>
                             </div>

                              <div className="preferred">
                                  <div className="preferred-text">
                                      <h1>Preferred Channels</h1>
                                  </div>


                                  <label htmlFor="">Traditional Ads</label>
                                  <div className='range'>
                                      <div className='range-item'></div>
                                  </div>

                                  <label htmlFor="">Online & Social Media</label>
                                  <div className='range-fear'>
                                      <div className='range-fear-item'></div>
                                  </div>


                                  <label htmlFor="">Referral</label>
                                  <div className='range-Growth'>
                                      <div className='range-Growth-item'></div>
                                  </div>

                                  <label htmlFor="">Guerilla & PR</label>
                                  <div className='range-power'>
                                      <div className='range-power-item'></div>
                                  </div>


                              </div>
                          </div>

                      </div>

                  </div>

              </div>
          </div>

        </>
    )
}

export default UsersItem