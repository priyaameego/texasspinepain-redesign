import { createRootRoute, createRoute, createRouter, Outlet } from '@tanstack/react-router';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { DrPriteshPatel } from './pages/DrPriteshPatel';
import { Services } from './pages/Services';
import { MotorVehicleAccidents } from './pages/MotorVehicleAccidents';
import { WorkersCompensation } from './pages/WorkersCompensation';
import { LetterOfProtection } from './pages/LetterOfProtection';
import { TruckAccidents } from './pages/TruckAccidents';
import { InsuranceBenefits } from './pages/InsuranceBenefits';
import { FAQ } from './pages/FAQ';
import { ContactUs } from './pages/ContactUs';
import {
  PainManagement, BackPain, LowerBackPain, NeckPain, Headaches,
  Sciatica, Neuropathy, LegPain, FacePain, KneePain,
} from './pages/ConditionPages';
import { Layout } from './components/Layout';

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: Home });
const aboutRoute = createRoute({ getParentRoute: () => rootRoute, path: '/about-us', component: About });
const drPriteshPatelRoute = createRoute({ getParentRoute: () => rootRoute, path: '/dr-pritesh-patel', component: DrPriteshPatel });
const servicesRoute = createRoute({ getParentRoute: () => rootRoute, path: '/services', component: Services });
const motorVehicleAccidentsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/motor-vehicle-accidents', component: MotorVehicleAccidents });
const workersCompensationRoute = createRoute({ getParentRoute: () => rootRoute, path: '/workers-compensation', component: WorkersCompensation });
const letterOfProtectionRoute = createRoute({ getParentRoute: () => rootRoute, path: '/letter-of-protection', component: LetterOfProtection });
const truckAccidentsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/truck-accidents', component: TruckAccidents });
const insuranceBenefitsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/insurance-benefits', component: InsuranceBenefits });
const faqRoute = createRoute({ getParentRoute: () => rootRoute, path: '/frequently-asked-questions', component: FAQ });
const contactUsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/contact-us', component: ContactUs });

// ─── Condition Pages ──────────────────────────────────────────────────────────
const painManagementRoute = createRoute({ getParentRoute: () => rootRoute, path: '/pain-management', component: PainManagement });
const backPainRoute = createRoute({ getParentRoute: () => rootRoute, path: '/back-pain', component: BackPain });
const lowerBackPainRoute = createRoute({ getParentRoute: () => rootRoute, path: '/lower-back-pain', component: LowerBackPain });
const neckPainRoute = createRoute({ getParentRoute: () => rootRoute, path: '/neck-pain', component: NeckPain });
const headachesRoute = createRoute({ getParentRoute: () => rootRoute, path: '/headaches', component: Headaches });
const sciaticaRoute = createRoute({ getParentRoute: () => rootRoute, path: '/sciatica', component: Sciatica });
const neuropathyRoute = createRoute({ getParentRoute: () => rootRoute, path: '/neuropathy', component: Neuropathy });
const legPainRoute = createRoute({ getParentRoute: () => rootRoute, path: '/leg-pain', component: LegPain });
const facePainRoute = createRoute({ getParentRoute: () => rootRoute, path: '/face-pain', component: FacePain });
const kneePainRoute = createRoute({ getParentRoute: () => rootRoute, path: '/knee-pain', component: KneePain });

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  drPriteshPatelRoute,
  servicesRoute,
  motorVehicleAccidentsRoute,
  workersCompensationRoute,
  letterOfProtectionRoute,
  truckAccidentsRoute,
  insuranceBenefitsRoute,
  faqRoute,
  contactUsRoute,
  // Condition pages
  painManagementRoute,
  backPainRoute,
  lowerBackPainRoute,
  neckPainRoute,
  headachesRoute,
  sciaticaRoute,
  neuropathyRoute,
  legPainRoute,
  facePainRoute,
  kneePainRoute,
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
