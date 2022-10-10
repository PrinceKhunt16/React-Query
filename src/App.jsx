import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import "./App.css"
import Home from './Components'
import Header from './Components/Header'
import SuperHero from './Components/SuperHero'
import SuperHeroes from './Components/SuperHeroes'
import Parallal from './Components/Parallal'
import DynamicParallal from './Components/DynamicParallal'
import Dependent from './Components/Dependent'

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <div className='app'>
                <Router>
                    <Header />
                    <Routes>
                        <Route path='/' index element={<Home />} />
                        <Route path='/rq-super-heroes' element={<SuperHeroes />} />
                        <Route path='/rq-super-heroes/:id' element={<SuperHero />} />
                        <Route path='/rq-parallal' element={<Parallal />} />
                        <Route path='/rq-dynamic-parallal' element={<DynamicParallal ids={[1, 3]} />} />
                        <Route path='/rq-dependent' element={<Dependent email='john@gmail.com' />} />
                    </Routes>
                </Router>
            </div>
            <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
        </QueryClientProvider>
    )
}

export default App