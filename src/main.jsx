import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyles } from './styles/global_styles';
import { App } from './App';
import { Membership } from './page/membership/membership';
import { Home } from './page/home/home';
import { StyleGuide } from './page/styleGuide/styleGuide';
import { Features } from './page/features/features';
import { Authors } from './page/authors/authors';
import { Subscribe } from './page/subscribe/subscribe';
import { Contact } from './page/contact/contact';
import { Demos } from './page/demos/demos';
import { GetTheme } from './page/getTheme/getTheme';
import { Tags } from './page/tags/tags';

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyles />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="membership" element={<Membership />} />
          <Route path="styleGuide" element={<StyleGuide />} />
          <Route path="features" element={<Features />} />
          <Route path="authors" element={<Authors />} />
          <Route path="tags" element={<Tags />} />
          <Route path="subscribe" element={<Subscribe />} />
          <Route path="contact" element={<Contact />} />
          <Route path="demos" element={<Demos />} />
          <Route path="getTheme" element={<GetTheme />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
