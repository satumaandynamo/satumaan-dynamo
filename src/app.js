import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer, Loading, Navbar } from './components'
import { About, BikeKitchen, Contact, Events, Home } from './views'
import i18n from './lib/i18n'

function App() {
  return (
    <BrowserRouter>
      #
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
