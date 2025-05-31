import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @ViewChild('graficoRef') graficoRef!: ElementRef;

  mostrarGrafico = true;
  tipoGrafico: string = 'bar';
  labelGrafico: string = 'barra';

  cards = [
    {
      title: 'Usuários ativos',
      value: 120,
      icon: 'pi-users',
      tooltip: 'Total de usuários ativos atualmente',
    },
    {
      title: 'Total de acessos',
      value: 8570,
      icon: 'pi-chart-line',
      tooltip: 'Todos os acessos registrados até hoje',
    },
    {
      title: 'Média por usuário',
      value: '3h 45min',
      icon: 'pi-clock',
      tooltip: 'Tempo médio de uso por usuário',
    },
    {
      title: 'Usuários inativos',
      value: 12,
      icon: 'pi-user-minus',
      tooltip: 'Usuários sem atividade recente',
    },
  ];

  tiposDropdown = [
    { label: 'Barra', value: 'bar' },
    { label: 'Linha', value: 'line' },
    { label: 'Radar', value: 'radar' },
    { label: 'Rosca (Doughnut)', value: 'doughnut' },
    { label: 'Pizza', value: 'pie' },
  ];

  chartData = {
    labels: ['Marcelo A.', 'Rodrigo .B', 'Gabriel .C'],
    datasets: [
      {
        label: 'Acessos',
        data: [5, 10, 7],
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
      },
      {
        label: 'Horas de uso (Semanal)',
        data: [1, 2, 3],
        backgroundColor: ['#9CCC65', '#FF7043', '#26C6DA'],
      },
      {
        label: 'Tempo de uso (Mensal)',
        data: [7, 14, 21],
        backgroundColor: ['#AB47BC', '#26A69A', '#FFCA28'],
      },
    ],
  };

  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.dataset.label}: ${context.formattedValue}`,
        },
      },
    },
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

  exportToPNG() {
    html2canvas(this.graficoRef.nativeElement).then(canvas => {
      const link = document.createElement('a');
      link.download = 'grafico.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  }

  exportToPDF() {
    html2canvas(this.graficoRef.nativeElement).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 10, width, height);
      pdf.save('grafico.pdf');
    });
  }
}
