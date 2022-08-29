import { useMemo } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import { useLocation } from 'react-router-dom';
import routes from '../src/utils/routes';
import TitledPage from './components/TitledPage';

function App() {
    const location = useLocation();

    const preparedRoutes = useMemo(
        () =>
            routes.map(({ path, renderElement, pageTitle }) => {
                return (
                    <Route
                        key={path}
                        path={path}
                        element={<TitledPage title={pageTitle}>{renderElement()}</TitledPage>}
                    />
                );
            }),
        [routes],
    );

    return (
        <div className="App">
            <section id="Section_main">
                <section id="app" className="master_wrapper">
                    <div className="layout" id="layout">
                        <Routes>{preparedRoutes}</Routes>
                        {location.pathname !== '/' && <Menu />}
                    </div>
                </section>
            </section>
        </div>
    );
}

export default App;
