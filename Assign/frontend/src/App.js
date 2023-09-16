// App.js
import React from 'react';
import { BrowserRouter ,Routes, Route, Switch } from 'react-router-dom';
import MovieList from './components/MovieList';

function App() {
  return (
  <>
  <MovieList/>
  </>
  );
}

export default App;
