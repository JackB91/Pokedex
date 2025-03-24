import React from "react";
// import Card from './components/Card'
import Header from './components/Header'
import Footer from './components/footer'
import Region from './components/Region'



export default function App() {
    const [region, setRegion] = React.useState({min:1, max:151})
    


return (
    <main>
            <Header setRegion={setRegion}/>
            {/* <Card/> */}
            <Region min={region.min} max={region.max}/>
            <Footer/>
    </main>
)

}