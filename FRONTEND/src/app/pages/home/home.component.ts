import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  tipoGrafico = 'bar';
  mostrarGrafico = true;

  tipos = ['bar', 'line', 'radar', 'doughnut', 'pie'];

  chartData = {
    labels: ['Usuário A', 'Usuário B', 'Usuário C'],
    datasets: [
      {
        label: 'Acessos',
        data: [5, 10, 7],
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726']
      }
    ]
  };

  chartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };

  recriarGrafico() {
    this.mostrarGrafico = false;
    setTimeout(() => {
      this.mostrarGrafico = true;
    }, 0);
  }
}
