import Home from './views/home/index.js'
import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navigation/index.js'
import Footer from './components/footer'
import Loading from './components/loaders'
import i18n from './lib/i18n/index.js'
import About from './views/about/index.js'
import BikeKitchen from './views/bike-kitchen/index.js'
import Contact from './views/contact/index.js'
import Events from './views/events/index.js'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Navbar
          handleSetLanguage={(language) => {
            i18n.changeLanguage(language)
            localStorage.setItem('i18nextLng', language)
          }}
        />
        {/* <GlobalStyles /> */}
        <Routes>
          <Route exactly path="/satumaan-dynamo" element={<Home />} />
          <Route exactly path="/about" element={<About />} />
          <Route exactly path="/contact" element={<Contact />} />
          <Route exactly path="/bikekitchen" element={<BikeKitchen />} />
          <Route exactly path="/events" element={<Events />} />
          {/* <Route exactly path="/joinus" element={<JoinUs />} /> */}
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}

export default App
