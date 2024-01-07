import React, { useState } from 'react'
import { Accordion } from 'flowbite-react';
import { Link } from 'react-router-dom';

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
                    <ul class="">
                      <Link to='/services/software-development/hire-software-developers'><li className='navItem mb-3'>Hire Software Developers</li></Link>
                      <Link to='/services/software-development/web-application-development'><li className='navItem mb-3'>Web Application Development</li></Link>
                      <Link to='/services/software-development/ecommerce-application'><li className='navItem mb-3'>Ecommerce Application</li></Link>
                      <Link to='/services/software-development/mobile-app-development'><li className='navItem mb-3'>Mobile App Development</li></Link>
                      <Link to='/services/software-development/business-intelligence'><li className='navItem mb-3'>Business Intelligence</li></Link>
                      <Link to='/services/software-development/quality-testing'><li className='navItem mb-3'>Testing & Quality Assurance</li></Link>
                    </ul>
                  </div>
                  <div>
                    <h3 className='text-lg font-medium text-green-400 mb-3'>Cloud Computing</h3>
                    <ul class="">
                      <Link to='/services/cloud-computing/cloud-computing-services'><li className='navItem mb-3'>Cloud Computing Service</li></Link>
                      <Link to='/services/cloud-computing/devops-cicd'><li className='navItem mb-3'>DevOps & CI/CD</li></Link>
                      <Link to='/services/cloud-computing/rest-api-microservice'><li className='navItem mb-3'>Rest API & Microservices</li></Link>
                      <Link to='/services/cloud-computing/amazon-web-service'><li className='navItem mb-3'>Amazon Web Services</li></Link>
                      <Link to='/services/cloud-computing/google-cloud-platform'><li className='navItem mb-3'>Google Cloud Platform</li></Link>
                    </ul>
                  </div>
                  <div>
                    <h3 className='text-lg font-medium text-green-400 mb-3'>Digital Transformation</h3>
                    <ul class="">
                      <Link to='/services/digital-transformation/technology-consulting'><li className='navItem mb-3'>Technology Consulting</li></Link>
                      <Link to='/services/digital-transformation/ecommerce-and-retails'><li className='navItem mb-3'>Ecommerce & Retail</li></Link>
                      <Link to='/services/digital-transformation/internet-of-things'><li className='navItem mb-3'>Internet of Things</li></Link>
                      <Link to='/services/digital-transformation/artificial-intelligence'><li className='navItem mb-3'>Artificial Intelligence</li></Link>
                      <Link to='/services/digital-transformation/machine-learning-service'><li className='navItem mb-3'>Machine Learning Service</li></Link>
                      <Link to='/services/digital-transformation/blockchain-application'><li className='navItem mb-3'>Blockchain Application</li></Link>
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
                    <ul class="">
                      <Link to='/solutions/erp-solutions/ERP'><li className='navItem mb-3'>ERP</li></Link>
                      <Link to='/solutions/erp-solutions/CRM'><li className='navItem mb-3'>CRM</li></Link>
                      <Link to='/solutions/erp-solutions/HRM'><li className='navItem mb-3'>HRM</li></Link>
                      <Link to='/solutions/erp-solutions/supply-chain-management'><li className='navItem mb-3'>Supply Chain Management</li></Link>
                      <Link to='/solutions/erp-solutions/project-management-system'><li className='navItem mb-3'>Project Management System</li></Link>
                      <Link to='/solutions/erp-solutions/building-management-system'><li className='navItem mb-3'>Building Management System</li></Link>
                    </ul>
                  </div>
                  <div>
                    <h3 className='text-lg font-medium text-green-400 mb-3'>ERP Management System</h3>
                    <ul class="">
                      <Link to='/solutions/erp-management/inventory-management'><li className='navItem mb-3'>Inventory Management</li></Link>
                      <Link to='/solutions/erp-management/procurement-management'><li className='navItem mb-3'>Procurement Management</li></Link>
                      <Link to='/solutions/erp-management/account-and-finance-management'><li className='navItem mb-3'>Account & Finance Management</li></Link>
                      <Link to='/solutions/erp-management/education-management'><li className='navItem mb-3'>Education Management</li></Link>
                      <Link to='/solutions/erp-management/hospital-management'><li className='navItem mb-3'>Hospital Management</li></Link>
                      <Link to='/solutions/erp-management/pharmacy-management'><li className='navItem mb-3'>Pharmacy Management</li></Link>
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
                    <ul class="">
                      <Link to='/industries/healthcare'><li className='navItem mb-3'>Healthcare</li></Link>
                      <Link to='/industries/fintech'><li className='navItem mb-3'>FinTech</li></Link>
                      <Link to='/industries/automotive'><li className='navItem mb-3'>Automotive</li></Link>
                      <Link to='/industries/realstate'><li className='navItem mb-3'>Real State</li></Link>
                      <Link to='/industries/manufacturing'><li className='navItem mb-3'>Manufacturing</li></Link>
                      <Link to='/industries/travel-and-tourism'><li className='navItem mb-3'>Travel & Tourism</li></Link>
                      <Link to='/industries/energy-and-utilities'><li className='navItem mb-3'>Energy & Utilities</li></Link>
                      <Link to='/industries/communications'><li className='navItem mb-3'>Comunications</li></Link>
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
                    <ul class="">
                      <Link to='/technology/frontend/angular'><li className='navItem mb-3'>Angular</li></Link>
                      <Link to='/technology/frontend/react'><li className='navItem mb-3'>React</li></Link>
                      <Link to='/technology/frontend/vue'><li className='navItem mb-3'>Vue</li></Link>
                      <Link to='/technology/frontend/typescript'><li className='navItem mb-3'>TypeScript</li></Link>
                      <Link to='/technology/frontend/mern-stack'><li className='navItem mb-3'>MERN Stack</li></Link>
                    </ul>
                  </div>
                  <div>
                    <h3 className='text-lg font-medium text-green-400 mb-3'>Backend</h3>
                    <ul class="">
                      <Link to='/technology/backend/python'><li className='navItem mb-3'>Python</li></Link>
                      <Link to='/technology/backend/java'><li className='navItem mb-3'>Java</li></Link>
                      <Link to='/technology/backend/nodejs'><li className='navItem mb-3'>NodeJs</li></Link>
                      <Link to='/technology/backend/dot-net'><li className='navItem mb-3'>.Net</li></Link>
                      <Link to='/technology/backend/php'><li className='navItem mb-3'>PHP</li></Link>
                    </ul>
                  </div>
                  <div>
                    <h3 className='text-lg font-medium text-green-400 mb-3'>Mobile</h3>
                    <ul class="">
                      <Link to='/technology/mobile/ios'><li className='navItem mb-3'>iOS</li></Link>
                      <Link to='/technology/mobile/android'><li className='navItem mb-3'>Android</li></Link>
                      <Link to='/technology/mobile/react-native'><li className='navItem mb-3'>React Native</li></Link>
                      <Link to='/technology/mobile/flutter'><li className='navItem mb-3'>Flutter</li></Link>
                    </ul>
                  </div>
                  <div>
                    <h3 className='text-lg font-medium text-green-400 mb-3'>Cloud Computing</h3>
                    <ul class="">
                      <Link to='/technology/cloud-computing/aws'><li className='navItem mb-3'>AWS</li></Link>
                      <Link to='/technology/cloud-computing/gcp'><li className='navItem mb-3'>GCP</li></Link>
                      <Link to='/technology/cloud-computing/azure'><li className='navItem mb-3'>Azure</li></Link>
                      <Link to='/technology/cloud-computing/devops'><li className='navItem mb-3'>DevOps</li></Link>
                      <Link to='/technology/cloud-computing/micro-service'><li className='navItem mb-3'>Microservice</li></Link>
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