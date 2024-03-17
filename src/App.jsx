import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importez tous vos composants
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Mindset from "./components/Mindset.jsx";
import TableauIndicateur from "./components/TableauIndicateurs.jsx";
import LogisticSupportSite from "./components/Egytronics.jsx";
import OrbisProject from "./components/OrbisProject.jsx";
import CompetenceTechnique from "./components/CompetenceTechnique.jsx";
import CompetenceTransverse from "./components/CompetenceTransverse.jsx";
import Java from "./components/java.jsx";
import Angular from "./components/angular.jsx";

const App = () => {
  return (
      <BrowserRouter basename='/project_3D_developer_portfolio'>
        <div className='relative z-0 bg-primary'>
          <Routes>
            {/* Route par défaut pour la page d'accueil */}
            <Route path="/" element={
              <>
                {/* Navbar reste en dehors des Routes pour être affichée sur toutes les pages */}
                <Navbar />
                <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                  <Hero />
                </div>
                <About />
                <Experience />
                <Tech />
                <Works />
                <Feedbacks />
                <CompetenceTechnique/>
                <CompetenceTransverse/>
                <div className='relative z-0'>
                  <Contact />
                  <StarsCanvas />
                </div>
              </>
            }/>
            {/* Route pour le composant Test */}
            <Route path="/mindset" element={<Mindset />} />
            <Route path="/tableauIndicateur" element={<TableauIndicateur />} />
            <Route path="/mindset" element={<Mindset />} />
            <Route path="/logisticSupportSite" element={<LogisticSupportSite/>} />
            <Route path="/orbisProject" element={<OrbisProject/>} />
            <Route path="/technique" element={<CompetenceTechnique/>} />
            <Route path="/transverse" element={<CompetenceTransverse/>} />
            <Route path="/java" element={<Java/>} />
            <Route path="/angular" element={<Angular/>} />
          </Routes>
        </div>
      </BrowserRouter>
  );
};

export default App;