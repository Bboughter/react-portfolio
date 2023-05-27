React.useEffect(() => {
  const handleRouteChange = () => {
    setRoute(window.location.pathname);
  };

  window.addEventListener('popstate', handleRouteChange);

  return () => {
    window.removeEventListener('popstate', handleRouteChange);
  };
}, []);

const renderRoute = () => {
  switch (route) {
    case '/':
      return <AboutMe />;
    case '/portfolio':
      return <Portfolio />;
    case '/contact':
      return <Contact />;
    case '/skills':
      return <Skills />;
    default:
      return <AboutMe />;
  }
};

return (
  <div className="App">
    <Header />
    <main>
      {renderRoute()}
    </main>
    <Footer />
  </div>
);


export default App;

