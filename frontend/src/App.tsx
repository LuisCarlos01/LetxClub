import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Tips from './pages/Tips';

const App: FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendario" element={<Calendar />} />
            <Route path="/dicas" element={<Tips />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default App;
