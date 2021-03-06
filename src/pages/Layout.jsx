import React, { lazy, Suspense  } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { ThemeProvider } from "./../util/theme";
import logo from "../assets/images/custom-logo.png";
// lazy load pages and global components
const HomePage = lazy(() => import('./index'));
const ProjectLaunchPage = lazy(() => import('./ProjectLaunch'));
const Navbar = lazy(() => import('../components/Navbar'));
const Footer = lazy(() => import('../components/Footer'));

const LoadingPage = () => (
  <motion.div style={{ height: '100vh', width: '100vw', backgroundColor: '#333' }}>
    <motion.div style={{ margin: 'auto', width: '100%', textAlign: 'center', height: '100%', color: '#fff' }}>
      <CircularProgress />
    </motion.div>
  </motion.div>
)

const Layout = () => {
  // const ether = useEthers();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const routes = [
    { path: '/', element: <HomePage /> },
    { path: '/projects/:id', element: <ProjectLaunchPage setDrawerOpen={setDrawerOpen} /> },
    { path: '*', element: <div>Not Found...</div> },
  ];
  return (
    <ThemeProvider>
    <Suspense fallback={LoadingPage}>
      <Router>
        <Navbar
          color="default"
          logo="https://uploads.divjoy.com/logo.svg"
          logoInverted="https://uploads.divjoy.com/logo-white.svg"
          setDrawerOpen={setDrawerOpen}
          drawerOpen={drawerOpen}
        />
        <Routes>
          {routes.map((props, key) => <Route key={key}{...props}/>)}
        </Routes>
        <Footer
          bgColor="light"
          size="normal"
          bgImage=""
          bgImageOpacity={0}
          description="A full stack craftsmen of today's web technologies"
          copyright={`© ${new Date().getFullYear()} Michael Woodward`}
          // logo={logo}
          logoInverted="https://uploads.divjoy.com/logo-white.svg"
          sticky
        />
      </Router>
      </Suspense>
    </ThemeProvider>
  )
}

export default Layout
