import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

import { Chart, BarController, LineController, RadarController, DoughnutController, PieController, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(
  BarController,
  LineController,
  RadarController,
  DoughnutController,
  PieController,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
