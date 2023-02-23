import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Blog from './componentes/Blog';
import Acercade from './componentes/Acercade';
import Header from './componentes/Header';
import styled from 'styled-components';
import Post from './componentes/Post';
import Error404 from './componentes/Error404';
const App = () => {
  return (

    <ContenedorPrincipal>
      <Header />
      <Main>
        <Routes>
          <Route path='*' element={<Error404/>} />
          <Route path='/' element={<Inicio />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/posts/:id' element={<Post />} />
          <Route path='/acerca-de' element={<Acercade />} />
        </Routes>
      </Main>
    </ContenedorPrincipal>

  );
}
const ContenedorPrincipal = styled.div `
  padding: 40px;
  width:90%;
  max-width:700px;
`
const Main=styled.main`
  background:white;
  padding:40px;
  border-radius:10;
  box-shadow: 0px 0px 5px rgba(129,129,129,0.1);
`
export default App;