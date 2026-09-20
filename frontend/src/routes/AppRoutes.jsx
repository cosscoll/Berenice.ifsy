import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard.jsx';
import { UECatalogue } from '../pages/UECatalogue.jsx';
import { UEDetail } from '../pages/UEDetail.jsx';
import { RevisionFSRS } from '../pages/RevisionFSRS.jsx';
import { Anatomy3DPage } from '../pages/Anatomy3DPage.jsx';
import { ECOSSimulation } from '../pages/ECOSSimulation.jsx';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/ue" element={<UECatalogue />} />
      <Route path="/ue/:code" element={<UEDetail />} />
      <Route path="/revision" element={<RevisionFSRS />} />
      <Route path="/anatomie" element={<Anatomy3DPage />} />
      <Route path="/ecos" element={<ECOSSimulation />} />
    </Routes>
  );
}
