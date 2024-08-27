import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RecepcaoPage from './pages/RecepcaoPage'
import TvPage from './pages/TvPage'
import InfoPage from './pages/InfoPage'
import FormRemoverAtendido from './components/forms/FormRemoverAtendido'


function App() {

    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<RecepcaoPage/>}/>
                <Route exact path="/tv" element={<TvPage/>}/>
                <Route exact path="/remover_atendido" element={<FormRemoverAtendido/>}/>
                <Route exact path="/info" element={<InfoPage/>}/>
            </Routes>
        </BrowserRouter>
    </>
)
}

export default App
