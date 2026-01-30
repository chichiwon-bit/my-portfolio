import * as React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/common/navigation';
import HomePage from './pages/home-page';
import AboutPage from './pages/about-page';
import ProjectsPage from './pages/projects-page';

/**
 * App 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <App />
 */
function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
