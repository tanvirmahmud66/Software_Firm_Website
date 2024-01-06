import React, { useState } from 'react'
import { Accordion } from 'flowbite-react';

const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <nav className='h-[8vh] w-full shadow-lg fixed top-0 bg-white'>
      <div className='container h-full mx-auto flex justify-between items-center px-4 lg:px-0'>
        {/* brand logo */}
        <div className='text-2xl font-semibold'>
          <a href='/' className='py-6'>AWA Software House</a>
        </div>
        {/* hamburger */}
        <div className='block lg:hidden'>
          {open?
          <svg onClick={()=>setOpen(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          :<svg onClick={()=>setOpen(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>}
        </div>
        {/* Nav item */}
        <div className='hidden lg:block'>
          <ul className='flex gap-6 h-full'>
            <li>
              <a href='/' className='py-6 flex items-center hover:text-green-500'>Home</a>
            </li>
            <li className='relative group'>
              <div className='py-6 flex items-center cursor-pointer'>
                <div className='me-1 group-hover:text-green-500'>Services</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
              </div>
              <div className='z-10 bg-white absolute hidden group-hover:block min-w-[1000px] p-5 transform -translate-x-1/2 rounded-b-md shadow-xl w-auto'>
                <div className='h-full w-full grid grid-cols-3 gap-7'>
                  <div>
                    <h3 className='text-lg font-medium text-green-400 mb-3'>Software Development</h3>
                    <ul class="space-y-3 list-disc list-inside">
                      <li className='navItem'>Hire Software Developers</li>
                      <li className='navItem'>Web Application Development</li>
                      <li className='navItem'>Ecommerce Application</li>
                      <li className='navItem'>Mobile App Development</li>
                      <li className='navItem'>Business Intelligence</li>
                      <li className='navItem'>Testing & Quality Assurance</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className='text-lg font-medium text-green-400 mb-3'>Cloud Computing</h3>
                    <ul class="space-y-3 list-disc list-inside">
                      <li className='navItem'>Cloud Computing Service</li>
                      <li className='navItem'>DevOps & CI/CD</li>
                      <li className='navItem'>Rest API & Microservices</li>
                      <li className='navItem'>Amazon Web Services</li>
                      <li className='navItem'>Google Cloud Platform</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className='text-lg font-medium text-green-400 mb-3'>Digital Transformation</h3>
                    <ul class="space-y-3 list-disc list-inside">
                      <li className='navItem'>Technology Consulting</li>
                      <li className='navItem'>Ecommerce & Retail</li>
                      <li className='navItem'>Internet of Things</li>
                      <li className='navItem'>Artificial Intelligence</li>
                      <li className='navItem'>Machine Learning Service</li>
                      <li className='navItem'>Blockchain Application</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className='relative group'>
              <div className='py-6 flex items-center'>
                <div className='me-1 group-hover:text-green-500 cursor-pointer'>Solutions</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
              </div>
              <div className='z-10 bg-white absolute hidden group-hover:block min-w-[700px] p-5 transform -translate-x-1/2 rounded-b-md shadow-xl'>
                <div className='h-full w-full grid grid-cols-2 gap-7'>
                  <div>
                    <h3 className='text-lg font-medium text-green-400 mb-3'>ERP Solutions</h3>
                    <ul class="space-y-3 list-disc list-inside">
                      <li className='navItem'>ERP</li>
                      <li className='navItem'>CRM</li>
                      <li className='navItem'>HRM</li>
                      <li className='navItem'>Supply Chain Management</li>
                      <li className='navItem'>Project Management System</li>
                      <li className='navItem'>Building Management System</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className='text-lg font-medium text-green-400 mb-3'>ERP Management System</h3>
                    <ul class="space-y-3 list-disc list-inside">
                      <li className='navItem'>Inventory Management</li>
                      <li className='navItem'>Procurement Management</li>
                      <li className='navItem'>Account & Finance Management</li>
                      <li className='navItem'>Education Management</li>
                      <li className='navItem'>Hospital Management</li>
                      <li className='navItem'>Pharmacy Management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className='relative group'>
              <div className='py-6 flex items-center'>
                <div className='me-1 group-hover:text-green-500 cursor-pointer'>Industries</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
              </div>
              <div className='z-10 bg-white absolute hidden group-hover:block min-w-[200px] p-5 rounded-b-md shadow-xl'>
                  <div>
                    <ul class="space-y-3 list-disc list-inside">
                      <li className='navItem'>Healthcare</li>
                      <li className='navItem'>FinTech</li>
                      <li className='navItem'>Automotive</li>
                      <li className='navItem'>Real State</li>
                      <li className='navItem'>Manufacturing</li>
                      <li className='navItem'>Travel & Tourism</li>
                      <li className='navItem'>Energy & Utilities</li>
                      <li className='navItem'>Comunications</li>
                    </ul>
                  </div>
              </div>
            </li>
            <li className='relative group'>
              <div className='py-6 flex items-center'>
                <div className='me-1 group-hover:text-green-500 cursor-pointer'>Technologies</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
              </div>
              <div className='z-10 bg-white absolute hidden group-hover:block min-w-[900px] p-5 transform -right-[100px] rounded-b-md shadow-xl'>
                <div className='h-full w-full grid grid-cols-4 gap-3'>
                  <div>
                    <h3 className='text-lg font-medium text-green-400 mb-3'>Frontend</h3>
                    <ul class="space-y-3 list-disc list-inside">
                      <li className='navItem'>Angular</li>
                      <li className='navItem'>React</li>
                      <li className='navItem'>Vue</li>
                      <li className='navItem'>TypeScript</li>
                      <li className='navItem'>MERN Stack</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className='text-lg font-medium text-green-400 mb-3'>Backend</h3>
                    <ul class="space-y-3 list-disc list-inside">
                      <li className='navItem'>Python</li>
                      <li className='navItem'>Java</li>
                      <li className='navItem'>NodeJs</li>
                      <li className='navItem'>.Net</li>
                      <li className='navItem'>PHP</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className='text-lg font-medium text-green-400 mb-3'>Mobile</h3>
                    <ul class="space-y-3 list-disc list-inside">
                      <li className='navItem'>iOS</li>
                      <li className='navItem'>Android</li>
                      <li className='navItem'>React Native</li>
                      <li className='navItem'>Flutter</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className='text-lg font-medium text-green-400 mb-3'>Cloud Computing</h3>
                    <ul class="space-y-3 list-disc list-inside">
                      <li className='navItem'>AWS</li>
                      <li className='navItem'>GCP</li>
                      <li className='navItem'>Azure</li>
                      <li className='navItem'>DevOps</li>
                      <li className='navItem'>Microservice</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <a href='/' className='py-6 flex items-center hover:text-green-500'>Contact</a> 
          </ul>
        </div>
      </div>


      {/* hamburger Nav item */}
      {open &&
          <div className='block lg:hidden top-20 w-full shadow-lg bg-white scroll'>
            <Accordion collapseAll>
              <Accordion.Panel>
                <Accordion.Title>Services</Accordion.Title>
                <Accordion.Content>
                  <Accordion collapseAll>
                    <Accordion.Panel>
                      <Accordion.Title>Software Development</Accordion.Title>
                      <Accordion.Content>
                        <ul class="space-y-3 list-disc list-inside">
                          <li className='navItem'>Hire Software Developers</li>
                          <li className='navItem'>Web Application Development</li>
                          <li className='navItem'>Ecommerce Application</li>
                          <li className='navItem'>Mobile App Development</li>
                          <li className='navItem'>Business Intelligence</li>
                          <li className='navItem'>Testing & Quality Assurance</li>
                        </ul>
                      </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                      <Accordion.Title>Cloud Computing</Accordion.Title>
                      <Accordion.Content>
                          <ul class="space-y-3 list-disc list-inside">
                            <li className='navItem'>Cloud Computing Service</li>
                            <li className='navItem'>DevOps & CI/CD</li>
                            <li className='navItem'>Rest API & Microservices</li>
                            <li className='navItem'>Amazon Web Services</li>
                            <li className='navItem'>Google Cloud Platform</li>
                          </ul>
                      </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                      <Accordion.Title>Digital Transformation</Accordion.Title>
                      <Accordion.Content>
                          <ul class="space-y-3 list-disc list-inside">
                            <li className='navItem'>Cloud Computing Service</li>
                            <li className='navItem'>DevOps & CI/CD</li>
                            <li className='navItem'>Rest API & Microservices</li>
                            <li className='navItem'>Amazon Web Services</li>
                            <li className='navItem'>Google Cloud Platform</li>
                          </ul>
                      </Accordion.Content>
                    </Accordion.Panel>
                  </Accordion>
                </Accordion.Content>
              </Accordion.Panel>

              <Accordion.Panel>
                <Accordion.Title>Solutions</Accordion.Title>
                <Accordion.Content>
                  <Accordion collapseAll>
                    <Accordion.Panel>
                      <Accordion.Title>ERP Solutions</Accordion.Title>
                      <Accordion.Content>
                          <ul class="space-y-3 list-disc list-inside">
                            <li className='navItem'>ERP</li>
                            <li className='navItem'>CRM</li>
                            <li className='navItem'>HRM</li>
                            <li className='navItem'>Supply Chain Management</li>
                            <li className='navItem'>Project Management System</li>
                            <li className='navItem'>Building Management System</li>
                          </ul>
                      </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                      <Accordion.Title>ERP Management System</Accordion.Title>
                      <Accordion.Content>
                          <ul class="space-y-3 list-disc list-inside">
                            <li className='navItem'>Inventory Management</li>
                            <li className='navItem'>Procurement Management</li>
                            <li className='navItem'>Account & Finance Management</li>
                            <li className='navItem'>Education Management</li>
                            <li className='navItem'>Hospital Management</li>
                            <li className='navItem'>Pharmacy Management</li>
                          </ul>
                      </Accordion.Content>
                    </Accordion.Panel>
                  </Accordion>
                </Accordion.Content>
              </Accordion.Panel>
              
              <Accordion.Panel>
                <Accordion.Title>Industries</Accordion.Title>
                <Accordion.Content>
                    <ul class="space-y-3 list-disc list-inside">
                      <li className='navItem'>Healthcare</li>
                      <li className='navItem'>FinTech</li>
                      <li className='navItem'>Automotive</li>
                      <li className='navItem'>Real State</li>
                      <li className='navItem'>Manufacturing</li>
                      <li className='navItem'>Travel & Tourism</li>
                      <li className='navItem'>Energy & Utilities</li>
                      <li className='navItem'>Comunications</li>
                    </ul>
                </Accordion.Content>
              </Accordion.Panel>

              <Accordion.Panel>
                <Accordion.Title>Technologies</Accordion.Title>
                <Accordion.Content>
                  <Accordion collapseAll>
                    <Accordion.Panel>
                      <Accordion.Title>Frontend Technologies</Accordion.Title>
                      <Accordion.Content>
                          <ul class="space-y-3 list-disc list-inside">
                            <li className='navItem'>Angular</li>
                            <li className='navItem'>React</li>
                            <li className='navItem'>Vue</li>
                            <li className='navItem'>TypeScript</li>
                            <li className='navItem'>MERN Stack</li>
                          </ul>
                      </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                      <Accordion.Title>Backend Technologies</Accordion.Title>
                      <Accordion.Content>
                          <ul class="space-y-3 list-disc list-inside">
                            <li className='navItem'>Python</li>
                            <li className='navItem'>Java</li>
                            <li className='navItem'>NodeJs</li>
                            <li className='navItem'>.Net</li>
                            <li className='navItem'>PHP</li>
                          </ul>
                      </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                      <Accordion.Title>Mobile Technologies</Accordion.Title>
                      <Accordion.Content>
                          <ul class="space-y-3 list-disc list-inside">
                            <li className='navItem'>iOS</li>
                            <li className='navItem'>Android</li>
                            <li className='navItem'>React Native</li>
                            <li className='navItem'>Flutter</li>
                          </ul>
                      </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                      <Accordion.Title>Cloud Computing Technologies</Accordion.Title>
                      <Accordion.Content>
                          <ul class="space-y-3 list-disc list-inside">
                            <li className='navItem'>AWS</li>
                            <li className='navItem'>GCP</li>
                            <li className='navItem'>Azure</li>
                            <li className='navItem'>DevOps</li>
                            <li className='navItem'>Microservice</li>
                          </ul>
                      </Accordion.Content>
                    </Accordion.Panel>
                  </Accordion>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        }
    </nav>
  )
}

export default Navbar