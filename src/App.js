import React from 'react';
import './App.css'; // You can import your global styles here
import ContentGrid from './components/ContentGrid';

function App() {
  return (
    <div className="app">

      <header className="app-header">
        {/* Add your header content here */}
      </header>
      <main className="app-main">
        <ContentGrid />
      </main>
      <footer className="app-footer">
        {/* Add your footer content here */}
      </footer>
    </div>
  );
}

export default App;
