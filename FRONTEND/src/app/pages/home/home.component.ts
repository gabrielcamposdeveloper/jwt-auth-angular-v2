import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  mostrarGrafico = true;
  tipoGrafico: string = 'bar';
  labelGrafico: string = 'barra'

 cards = [
    { title: 'Total de Acessos', value: 22 },
    { title: 'Horas Semanais', value: 30 },
    { title: 'Horas Mensais', value: 60 },
    { title: 'Usuários Ativos', value: 3 },
  ];

tiposDropdown = [
  { label: 'Barra', value: 'bar' },
  { label: 'Linha', value: 'line' },
  { label: 'Radar', value: 'radar' },
  { label: 'Rosca (Doughnut)', value: 'doughnut' },
  { label: 'Pizza', value: 'pie' }
];


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

recriarGrafico(event: any) {
  this.tipoGrafico = event.value.value;
  this.labelGrafico = event.value.label;
  this.mostrarGrafico = false;

  setTimeout(() => {
    this.chartData = JSON.parse(JSON.stringify(this.chartData));
    this.mostrarGrafico = true;
  }, 50);
}


}
