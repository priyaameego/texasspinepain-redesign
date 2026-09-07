import { lazy, Suspense } from 'react';
import { createRootRoute, createRoute, createRouter, Outlet } from '@tanstack/react-router';
import { Home } from './pages/Home';
import { Layout } from './components/Layout';

// Lazy-loaded secondary pages for route-level code splitting
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const DrPriteshPatel = lazy(() => import('./pages/DrPriteshPatel').then(m => ({ default: m.DrPriteshPatel })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const MotorVehicleAccidents = lazy(() => import('./pages/MotorVehicleAccidents').then(m => ({ default: m.MotorVehicleAccidents })));
const WorkersCompensation = lazy(() => import('./pages/WorkersCompensation').then(m => ({ default: m.WorkersCompensation })));
const LetterOfProtection = lazy(() => import('./pages/LetterOfProtection').then(m => ({ default: m.LetterOfProtection })));
const TruckAccidents = lazy(() => import('./pages/TruckAccidents').then(m => ({ default: m.TruckAccidents })));
const InsuranceBenefits = lazy(() => import('./pages/InsuranceBenefits').then(m => ({ default: m.InsuranceBenefits })));
const FAQ = lazy(() => import('./pages/FAQ').then(m => ({ default: m.FAQ })));
const ContactUs = lazy(() => import('./pages/ContactUs').then(m => ({ default: m.ContactUs })));

// Lazy-loaded condition pages
const PainManagement = lazy(() => import('./pages/ConditionPages').then(m => ({ default: m.PainManagement })));
const BackPain = lazy(() => import('./pages/ConditionPages').then(m => ({ default: m.BackPain })));
const LowerBackPain = lazy(() => import('./pages/ConditionPages').then(m => ({ default: m.LowerBackPain })));
const NeckPain = lazy(() => import('./pages/ConditionPages').then(m => ({ default: m.NeckPain })));
const Headaches = lazy(() => import('./pages/ConditionPages').then(m => ({ default: m.Headaches })));
const Sciatica = lazy(() => import('./pages/ConditionPages').then(m => ({ default: m.Sciatica })));
const Neuropathy = lazy(() => import('./pages/ConditionPages').then(m => ({ default: m.Neuropathy })));
const LegPain = lazy(() => import('./pages/ConditionPages').then(m => ({ default: m.LegPain })));
const FacePain = lazy(() => import('./pages/ConditionPages').then(m => ({ default: m.FacePain })));
const KneePain = lazy(() => import('./pages/ConditionPages').then(m => ({ default: m.KneePain })));

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 border-3 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
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
