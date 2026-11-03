import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-informes-pdf-component',
  standalone: false,
  styleUrl: './informes-pdf-component.css',
  templateUrl: './informes-pdf-component.html',
})
export class InformesPdfComponent {
  generarDocumento(): void {
    let documento: jsPDF = new jsPDF();
    documento.setFontSize(18);
    documento.text("Hola mundo", 10, 10);
    documento.save("documento.pdf");
    const headers =['Nombre', 'Email', 'Edad'];
    const data = [
      ["Diana", "diana@gmail.com", 30],
      ["Juan", "juan@gmail.com", 25],
      ["Manolo", "manolo@gmail.com", 28]
    ]
    autoTable(documento, {
      head: [headers],
      body: data,
      startY: 20
    });
    documento.save("personas.pdf");
  }
}
