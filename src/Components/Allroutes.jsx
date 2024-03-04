import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Women from './Women/Women';
import Men from './Men/Men';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/Women" element={<Women />} />
      <Route path="/Men" element={<Men />} />
    </Routes>
  );
}

export default AllRoutes;