import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tipoGrafico = 'bar';
  mostrarGrafico = true;

  tipos = ['bar', 'line', 'radar', 'doughnut', 'pie'];
  tiposFiltrados: string[] = [];

  chartData = {
    labels: ['Marcelo A.', 'Rodrigo .B', 'Gabriel .C'],
    datasets: [
      {
        label: 'Acessos',
        data: [5, 10, 7],
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726']
      },
      {
        label: 'Horas de uso (Semanal)',
        data: [1, 2, 3],
        backgroundColor: ['#9CCC65', '#FF7043', '#26C6DA']
      },
         {
        label: 'Tempo de uso (Mensal)',
        data: ['7', '14', '21'],
        backgroundColor: ['#9CCC65', '#FF7043', '#26C6DA']
      }
    ]
  };

  chartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };

  filtrarTipos(event: any) {
    const query = event.query.toLowerCase();
    this.tiposFiltrados = this.tipos.filter(tipo =>
      tipo.toLowerCase().includes(query)
    );
  }

  

  recriarGrafico() {
    this.mostrarGrafico = false;
    setTimeout(() => {
      this.mostrarGrafico = true;
    }, 0);
  }


}
