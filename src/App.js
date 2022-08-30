import React, { useState } from 'react'
import About from './components/About/index.js'
import Nav from './components/Nav/index.js'
import Gallery from './components/Gallery/index.js'
import ContactForm from './components/Contact/index.js'

import './App.css'

function App() {
    const [contactSelected, setContactSelected] = useState(false)
    const [categories] = useState([
        {
            name: 'commercial',
            description:
                'Photos of grocery stores, food trucks, and other commerical projects'
        },
        { name: 'portraits', description: 'Portraits of people in my life' },
        { name: 'food', description: 'Delicious delicacies' },
        {
            name: 'landscape',
            description:
                'Fields, farmhoues, waterfalls, and the beauty of nature'
        }
    ])
    const [currentCategory, setCurrentCategory] = useState(categories[0])

    return (
        <div>
            <Nav
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            ></Nav>
            <main>
                {!contactSelected ? (
                    <>
                        <Gallery currentCategory={currentCategory}></Gallery>
                        <About />
                    </>
                ) : (
                    <ContactForm />
                )}
            </main>
        </div>
    )
}

export default App
