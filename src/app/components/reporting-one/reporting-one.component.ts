import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { INFORMATION_RESERVATION } from '../../common/hotel/info_reser';
import { ACCUEIL_RECEPTION } from '../../common/hotel/accueil_reception';
import { BAR } from '../../common/hotel/bar';
import { BIEN_ETRE_FITNESS } from '../../common/hotel/bien_etre_fitness';
import { BOUTIQUE } from '../../common/hotel/boutique';
import { CIRCULATION } from '../../common/hotel/circulation';
import { ELECTRICITE_EAU_ASSAINISSEMENT } from '../../common/hotel/electricite_eau_assai';
import { ESPACE_PERSONNEL } from '../../common/hotel/espace_perso';
import { EXTERIEUR } from '../../common/hotel/exterieur';
import { PETIT_DEJEUNER } from '../../common/hotel/petit_dejeuner';
import { PISCINE } from '../../common/hotel/piscine';
import { RESTAURANT } from '../../common/hotel/restaurant';
import { SALLE_BAIN_PRIVE } from '../../common/hotel/sale_bain_prive';
import { SALLE_SEMINAIRE_CEREMONIE } from '../../common/hotel/salle_seminaire_ceremoni';
import { SANITAIRE_COMMUN } from '../../common/hotel/sanitaire_commun';
import { UNITE_LOGEMENT } from '../../common/hotel/unite_logement';
import { HotelComponent } from '../hotel/hotel.component';
import { HOTELS } from '../../common/hotel/hotel';
import { ExportService } from 'src/app/export.service';



export interface reporting_global {
  chapitre_et_rubrique: string;
  pondere_majeur_5_étoiles: string;
  pondere_mineur_5_étoiles: string;
  pondere_majeur_4_étoiles: string;
  pondere_mineur_4_étoiles: string;
  pondere_majeur_3_étoiles: string;
  pondere_mineur_3_étoiles: string;
  pondere_majeur_2_étoiles: string;
  pondere_mineur_2_étoiles: string;
  pondere_majeur_1_étoile: string;
  pondere_mineur_1_étoils: string;
}



@Component({
  selector: 'app-reporting-one',
  templateUrl: './reporting-one.component.html',
  styleUrls: ['./reporting-one.component.scss']
})
export class ReportingOneComponent implements OnInit {
  hotels = HOTELS;
  chapitre = "";


  displayedColumns: string[] = ['chapitre_et_rubrique', 'pondere_majeur_5_étoiles', 'pondere_mineur_5_étoiles', 'pondere_majeur_4_étoiles', 'pondere_mineur_4_étoiles',
    'pondere_majeur_3_étoiles', 'pondere_mineur_3_étoiles', 'pondere_majeur_2_étoiles', 'pondere_mineur_2_étoiles',
    'pondere_majeur_1_étoile', 'pondere_mineur_1_étoile'];
  dataSource = HOTELS;

  //@ViewChild('reportTable') reportTable: ElementRef;
  constructor(
    private hotelC: HotelComponent, private exportService: ExportService
  ) { }

  ngOnInit(): void {
    //console.log(this.hotelC.info_reser);
    //this.tableToCSV();

  }


  /*  exportElmToExcel(): void {
     this.exportService.exportTableElmToExcel(this.reportTable, 'user_data');
   } */

  tableToCSV(): void {

    // Variable to store the final csv data
    let csv_data: any[] = [];
    //let csv_dataTMP: any[] = [];

    // Get each row data
    const rows = document.getElementsByTagName('tr');
   
    // console.log(rows.length);
    // console.log(rows);

    for (let i = 0; i < rows.length; i++) {
      let csvrow = [];
      // Get each column data
      let cols = rows[i].querySelectorAll('td,th,tr');

      // Stores each csv row data
      for (let j = 0; j < cols.length; j++) {
        // Get the text data of each cell
        // of a row and push it to csvrow
        csvrow.push(cols[j].innerHTML);
      }
console.log(csvrow);

      // Combine each column value with comma
      //csv_dataTMP.push(csvrow.join(','));

      csv_data.push(csvrow.join(','));
    }

    // console.log(csv_data);

    // Combine each row data with new line character

    //csv_data =(csv_data.join('\n'));
    console.log(csv_data);

    // Call this function to download csv file 
    this.downloadCSVFile(csv_data.join('\n'));
  }

  downloadCSVFile(csv_data: any) {

    // Create CSV file object and feed
    // our csv_data into it
    let CSVFile = new Blob([csv_data], {
      type: "text/csv"
    });

    // Create to temporary link to initiate
    // download process
    let temp_link = document.createElement('a');

    // Download csv file
    temp_link.download = "reporting_globale.csv";
    let url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;

    // This link should not be displayed
    temp_link.style.display = "none";
    document.body.appendChild(temp_link);

    // Automatically click the link to
    // trigger download
    temp_link.click();
    document.body.removeChild(temp_link);
  }

}
