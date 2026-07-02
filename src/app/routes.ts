import { createBrowserRouter } from 'react-router';
import Root from './layout/Root';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Portfolio from './pages/Portfolio';
import PortfolioDetail from './pages/PortfolioDetail';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogArticle from './pages/BlogArticle';
import Careers from './pages/Careers';
import CareerDetail from './pages/CareerDetail';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'services', Component: Services },
      { path: 'services/:slug', Component: ServiceDetail },
      { path: 'portfolio', Component: Portfolio },
      { path: 'portfolio/:slug', Component: PortfolioDetail },
      { path: 'about', Component: About },
      { path: 'blog', Component: Blog },
      { path: 'blog/:slug', Component: BlogArticle },
      { path: 'careers', Component: Careers },
      { path: 'careers/:slug', Component: CareerDetail },
      { path: 'contact', Component: Contact },
      { path: 'privacy-policy', Component: Privacy },
      { path: 'terms', Component: Terms },
      { path: '*', Component: NotFound },
    ],
  },
]);
