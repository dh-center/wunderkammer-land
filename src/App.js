import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Cabinet from './pages/Cabinet';
import Menu from './components/Menu';
import Articles from './pages/Articles';
import SingleArticle from './pages/SingleArticle';
import About from './pages/About';
import Map from './pages/Map';
import Team from './pages/Team';
import Home2 from './pages/Home2';
import { useLocation } from 'react-router-dom';

function App() {
    const location = useLocation();
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [isMenuCabinetOpen, setIsMenuCabinetOpen] = useState(false);

    return (
        <div className="App">
            <section id="Section_main">
                <section id="app" className="master_wrapper">
                    <div className="layout" id="layout">
                        <Routes>
                            <Route path="/" element={<Home title="Wunderkammer" />} />
                            <Route path="home" element={<Home2 />} />
                            <Route
                                path="cabinet"
                                element={<Cabinet title="Кабнет | Wunderkammer" />}
                            />
                            <Route
                                path="collection"
                                element={<Collection title="Коллекция | Wunderkammer" />}
                            />
                            <Route
                                path="articles"
                                element={<Articles title="Статьи | Wunderkammer" />}
                            />
                            <Route
                                path="single-article/:id"
                                element={<SingleArticle title="Статьи | Wunderkammer" />}
                            />
                            <Route
                                path="about"
                                element={<About title="О проекте | Wunderkammer" />}
                            />
                            <Route path="map" element={<Map title="Карта | Wunderkammer" />} />
                            <Route path="team" element={<Team title="Команда | Wunderkammer" />} />
                        </Routes>
                        {location.pathname !== '/' ? (
                            <Menu
                                isNavbarOpen={isNavbarOpen}
                                setIsNavbarOpen={setIsNavbarOpen}
                                isMenuCabinetOpen={isMenuCabinetOpen}
                                setIsMenuCabinetOpen={setIsMenuCabinetOpen}
                            />
                        ) : (
                            false
                        )}
                    </div>
                </section>
            </section>
        </div>
    );
}

export default App;
