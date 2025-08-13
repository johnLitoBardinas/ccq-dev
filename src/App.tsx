import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import CCQInboundPage from './features/ccq/CCQInboundPage';
import CCQOutboundPage from './features/ccq/CCQOutboundPage';
import CCQPage from './features/ccq/CCQPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to /ccq */}
        <Route path="/" element={<Navigate to="/ccq" replace />} />

        {/* Your main pages */}
        <Route path="/ccq" element={<CCQPage />} />
        <Route path="/ccq/inbound" element={<CCQInboundPage />} />
        <Route path="/ccq/outbound" element={<CCQOutboundPage />} />

        {/* Catch-all: redirect anything else to /ccq */}
        <Route path="*" element={<Navigate to="/ccq" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
