import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import HireSoftwareDev from "./Pages/Services/SoftwareDevelopment/HireSoftwareDev";
import WebApplicationDev from "./Pages/Services/SoftwareDevelopment/WebApplicationDev";
import EcommerceApp from "./Pages/Services/SoftwareDevelopment/EcommerceApp";
import MobileAppDev from "./Pages/Services/SoftwareDevelopment/MobileAppDev";
import BuisnessIntelligance from "./Pages/Services/SoftwareDevelopment/BuisnessIntelligance";
import Quality_Testing from "./Pages/Services/SoftwareDevelopment/Quality_Testing";
import CloudComputingServices from "./Pages/Services/CloudComputing/CloudComputingServices";
import DevOpsCICD from "./Pages/Services/CloudComputing/DevOpsCICD";
import RestApiMicroService from "./Pages/Services/CloudComputing/RestApiMicroService";
import AmazonWebService from "./Pages/Services/CloudComputing/AmazonWebService";
import GoogleCloudPlatform from "./Pages/Services/CloudComputing/GoogleCloudPlatform";
import TechnologyConsulting from "./Pages/Services/DigitalTransformation/TechnologyConsulting";
import EcommerceRetails from "./Pages/Services/DigitalTransformation/EcommerceRetails";
import InternetOfThings from "./Pages/Services/DigitalTransformation/InternetOfThings";
import ArtificialIntelligence from "./Pages/Services/DigitalTransformation/ArtificialIntelligence";
import MachineLearningService from "./Pages/Services/DigitalTransformation/MachineLearningService";
import ERP from "./Pages/Solutions/ERPsolution/ERP";
import CRM from "./Pages/Solutions/ERPsolution/CRM";
import HRM from "./Pages/Solutions/ERPsolution/HRM";
import SupplyChainManagement from "./Pages/Solutions/ERPsolution/SupplyChainManagement";
import BuildingManagementSystem from "./Pages/Solutions/ERPsolution/BuildingManagementSystem";
import InventoryManagement from "./Pages/Solutions/ERPmanagement/InventoryManagement";
import ProcurementManagement from "./Pages/Solutions/ERPmanagement/ProcurementManagement";
import AccountFinanceManagement from "./Pages/Solutions/ERPmanagement/AccountFinanceManagement";
import EducationManagement from "./Pages/Solutions/ERPmanagement/EducationManagement";
import PharmacyManagement from "./Pages/Solutions/ERPmanagement/PharmacyManagement";
import HospitalManagement from "./Pages/Solutions/ERPmanagement/HospitalManagement";
import HealthCare from "./Pages/Industries/HealthCare";
import FinTech from "./Pages/Industries/FinTech";
import AutoMotive from "./Pages/Industries/AutoMotive";
import RealState from "./Pages/Industries/RealState";
import Manufacturing from "./Pages/Industries/Manufacturing";
import TravelTourism from "./Pages/Industries/TravelTourism";
import EnergyUtilities from "./Pages/Industries/EnergyUtilities";
import Communications from "./Pages/Industries/Communications";
import Angular from "./Pages/Technology/Frontend/Angular";
import Reactjs from "./Pages/Technology/Frontend/Reactjs";
import Vue from "./Pages/Technology/Frontend/Vue";
import TypeScript from "./Pages/Technology/Frontend/TypeScript";
import MernStack from "./Pages/Technology/Frontend/MernStack";
import Python from "./Pages/Technology/Backend/Python";
import Java from "./Pages/Technology/Backend/Java";
import Nodejs from "./Pages/Technology/Backend/Nodejs";
import DotNet from "./Pages/Technology/Backend/DotNet";
import Php from "./Pages/Technology/Backend/Php";
import IOS from "./Pages/Technology/Mobile/IOS";
import Android from "./Pages/Technology/Mobile/Android";
import ReactNative from "./Pages/Technology/Mobile/ReactNative";
import Flutter from "./Pages/Technology/Mobile/Flutter";
import AWS from "./Pages/Technology/CloudComputing/AWS";
import GCP from "./Pages/Technology/CloudComputing/GCP";
import Azure from "./Pages/Technology/CloudComputing/Azure";
import DevOps from "./Pages/Technology/CloudComputing/DevOps";
import MicroServices from "./Pages/Technology/CloudComputing/MicroServices";
import BlockChainApplication from "./Pages/Services/DigitalTransformation/BlockChainApplication";
import ProjectManagementSystem from "./Pages/Solutions/ERPsolution/ProjectManagementSystem";



function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* home route */}
          <Route path="/" element={<Home/>}/>

          {/* service route - software development */}
          <Route path="/services/software-development/hire-software-developers" element={<HireSoftwareDev/>}/>
          <Route path="/services/software-development/web-application-development" element={<WebApplicationDev/>}/>
          <Route path="/services/software-development/ecommerce-application" element={<EcommerceApp/>}/>
          <Route path="/services/software-development/mobile-app-development" element={<MobileAppDev/>}/>
          <Route path="/services/software-development/business-intelligence" element={<BuisnessIntelligance/>}/>
          <Route path="/services/software-development/quality-testing" element={<Quality_Testing/>}/>

          {/* service route - cloud computing */}
          <Route path="/services/cloud-computing/cloud-computing-services" element={<CloudComputingServices/>}/>
          <Route path="/services/cloud-computing/devops-cicd" element={<DevOpsCICD/>}/>
          <Route path="/services/cloud-computing/rest-api-microservice" element={<RestApiMicroService/>}/>
          <Route path="/services/cloud-computing/amazon-web-service" element={<AmazonWebService/>}/>
          <Route path="/services/cloud-computing/google-cloud-platform" element={<GoogleCloudPlatform/>}/>

          {/* service route - digital transformation */}
          <Route path="/services/digital-transformation/technology-consulting" element={<TechnologyConsulting/>}/>
          <Route path="/services/digital-transformation/ecommerce-and-retails" element={<EcommerceRetails/>}/>
          <Route path="/services/digital-transformation/internet-of-things" element={<InternetOfThings/>}/>
          <Route path="/services/digital-transformation/artificial-intelligence" element={<ArtificialIntelligence/>}/>
          <Route path="/services/digital-transformation/machine-learning-service" element={<MachineLearningService/>}/>
          <Route path="/services/digital-transformation/blockchain-application" element={<BlockChainApplication/>}/>

          {/* solutions route - ERP solutions */}
          <Route path="/solutions/erp-solutions/ERP" element={<ERP/>}/>
          <Route path="/solutions/erp-solutions/CRM" element={<CRM/>}/>
          <Route path="/solutions/erp-solutions/HRM" element={<HRM/>}/>
          <Route path="/solutions/erp-solutions/supply-chain-management" element={<SupplyChainManagement/>}/>
          <Route path="/solutions/erp-solutions/project-management-system" element={<ProjectManagementSystem/>}/>
          <Route path="/solutions/erp-solutions/building-management-system" element={<BuildingManagementSystem/>}/>

          {/* solutions route - ERP management */}
          <Route path="/solutions/erp-management/inventory-management" element={<InventoryManagement/>}/>
          <Route path="/solutions/erp-management/procurement-management" element={<ProcurementManagement/>}/>
          <Route path="/solutions/erp-management/account-and-finance-management" element={<AccountFinanceManagement/>}/>
          <Route path="/solutions/erp-management/education-management" element={<EducationManagement/>}/>
          <Route path="/solutions/erp-management/pharmacy-management" element={<PharmacyManagement/>}/>
          <Route path="/solutions/erp-management/hospital-management" element={<HospitalManagement/>}/>

          {/* industries route */}
          <Route path="/industries/healthcare" element={<HealthCare/>}/>
          <Route path="/industries/fintech" element={<FinTech/>}/>
          <Route path="/industries/automotive" element={<AutoMotive/>}/>
          <Route path="/industries/realstate" element={<RealState/>}/>
          <Route path="/industries/manufacturing" element={<Manufacturing/>}/>
          <Route path="/industries/travel-and-tourism" element={<TravelTourism/>}/>
          <Route path="/industries/energy-and-utilities" element={<EnergyUtilities/>}/>
          <Route path="/industries/communications" element={<Communications/>}/>

          {/* technology route - frontend */}
          <Route path="/technology/frontend/angular" element={<Angular/>}/>
          <Route path="/technology/frontend/react" element={<Reactjs/>}/>
          <Route path="/technology/frontend/vue" element={<Vue/>}/>
          <Route path="/technology/frontend/typescript" element={<TypeScript/>}/>
          <Route path="/technology/frontend/mern-stack" element={<MernStack/>}/>

          {/* technology route - backend */}
          <Route path="/technology/backend/python" element={<Python/>}/>
          <Route path="/technology/backend/java" element={<Java/>}/>
          <Route path="/technology/backend/nodejs" element={<Nodejs/>}/>
          <Route path="/technology/backend/dot-net" element={<DotNet/>}/>
          <Route path="/technology/backend/php" element={<Php/>}/>

          {/* technology route - mobile */}
          <Route path="/technology/mobile/ios" element={<IOS/>}/>
          <Route path="/technology/mobile/android" element={<Android/>}/>
          <Route path="/technology/mobile/react-native" element={<ReactNative/>}/>
          <Route path="/technology/mobile/flutter" element={<Flutter/>}/>

          {/* technology route - cloud computing */}
          <Route path="/technology/cloud-computing/aws" element={<AWS/>}/>
          <Route path="/technology/cloud-computing/gcp" element={<GCP/>}/>
          <Route path="/technology/cloud-computing/azure" element={<Azure/>}/>
          <Route path="/technology/cloud-computing/devops" element={<DevOps/>}/>
          <Route path="/technology/cloud-computing/micro-service" element={<MicroServices/>}/>

          {/* contact route */}
          <Route path="/contact" element={<Contact/>}/>

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
