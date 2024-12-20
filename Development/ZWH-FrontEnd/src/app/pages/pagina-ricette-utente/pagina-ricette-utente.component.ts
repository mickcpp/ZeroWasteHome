import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { UtilityBarComponent } from '../../components/utility-bar/utility-bar.component';
import { productTableComponent } from '../../components/product-table/product-table.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-pagina-ricette-utente',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    UtilityBarComponent,
    productTableComponent,
    BreadcrumbComponent,
  ],
  templateUrl: './pagina-ricette-utente.component.html',
  styleUrl: './pagina-ricette-utente.component.css',
})
export class PaginaRicetteUtenteComponent {
  // Proprietà per il titolo della tabella
  tableTitle: string = 'Le Mie Ricette';

  // Proprietà per i buttons relativi alla tabella
  buttons = [{ label: 'Aggiungi' }];

  // Dati per la lista dei prodotti
  recipeList = [
    {
      src: 'https://placehold.jp/200x200.png',
      info: [
        { name: 'Nome Ricetta', val: 'Ricetta 1' },
        { name: 'Tipologia Ricetta', val: 'Primo' },
      ],
    },
    {
      src: 'https://placehold.jp/200x200.png',
      info: [
        { name: 'Nome Ricetta', val: 'Ricetta 1' },
        { name: 'Tipologia Ricetta', val: 'Antipasto' },
      ],
    },
  ];

  // Proprietà per i buttons relativi ad ogni prodotto
  buttonList = ['Visualizza', 'Modifica', 'Condividi', 'Elimina'];
}
