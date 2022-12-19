import { Component, Injectable, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LegendDialogComponent } from '../legend-dialog/legend-dialog.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
//import { HOTEL } from 'src/app/common/hotel/hotel';
//import {legendDialogComponent} from '../legend-dialog';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],

})
export class HotelComponent implements OnInit {

  isOptional = false;
  isEditable = false;

  responses: any[] = [];
  obj = 0;
  sh = true;
  infoCombo: any[] = [];

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  message = "";

  info_reser = INFORMATION_RESERVATION;
  accueil_recep = ACCUEIL_RECEPTION;
  bar = BAR;
  bien_etre_fitness = BIEN_ETRE_FITNESS;
  boutique = BOUTIQUE;
  circulation = CIRCULATION;
  elect_eau_ass = ELECTRICITE_EAU_ASSAINISSEMENT;
  espace_perso = ESPACE_PERSONNEL;
  exterieur = EXTERIEUR;
  petit_dejeuner = PETIT_DEJEUNER;
  piscine = PISCINE;
  resto = RESTAURANT;
  salle_bain_prive = SALLE_BAIN_PRIVE;
  salle_semi_cere = SALLE_SEMINAIRE_CEREMONIE;
  sanitaire_commun = SANITAIRE_COMMUN;
  unite_logement = UNITE_LOGEMENT;
  condition: boolean = false;

  forgetFormGroup!: FormGroup;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  forFormGroup!: FormGroup;
  fiveFormGroup!: FormGroup;
  sixFormGroup!: FormGroup;
  sevenFormGroup!: FormGroup;
  heigtFormGroup!: FormGroup;
  nineFormGroup!: FormGroup;
  tenFormGroup!: FormGroup;
  elevenFormGroup!: FormGroup;
  twelveFormGroup!: FormGroup;
  thirteenFormGroup!: FormGroup;
  forteenFormGroup!: FormGroup;
  fiveteenFormGroup!: FormGroup;














  firstCtrl1!: string;

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) { }



  ngOnInit(): void {

    this.validateA();
    this.validateB();
    this.validateC();
    this.validateD();
    this.validateE();
    this.validateF();
    this.validateG();
    this.validateH();
    this.validateI();
    this.validateJ();
    this.validateN();
    this.validateK();
    this.validateL();
    this.validateM();
    this.validateN();
    this.validateO();
    this.validateP();








  }

  

  accueil: Object = [];

  validateA() {
    let index = 0;
    for (let i = 0; i < this.accueil_recep.length; i++) {

      for (let j = 0; j < this.accueil_recep[i].critere.length; j++) {
        index++
        this.forgetFormGroup = this._formBuilder.group(
          Object.assign(this.accueil, { ["forgetCtrl" + (index)]: ['', Validators.required] })

        );
      }
    }  
  }


  accueilI: Object = [];

  validateB() {
    let index = 0;
    for (let i = 0; i < this.info_reser.length; i++) {

      for (let j = 0; j < this.info_reser[i].critere.length; j++) {
        index++
        this.firstFormGroup = this._formBuilder.group(
          Object.assign(this.accueilI, { ["firstCtrl" + (index)]: ['', Validators.required] })

        );      
      }
    }
  }

  accueilE: Object = [];

  validateC() {
    let index = 0;
    for (let i = 0; i < this.exterieur.length; i++) {

      for (let j = 0; j < this.exterieur[i].critere.length; j++) {
        index++
        this.secondFormGroup = this._formBuilder.group(
          Object.assign(this.accueilE, { ["secondCtrl" + (index)]: ['', Validators.required] })

        );  
      
            
      }
    }
  }

  accueilS: Object = [];

  validateD() {
    let index = 0;
    for (let i = 0; i < this.sanitaire_commun.length; i++) {

      for (let j = 0; j < this.sanitaire_commun[i].critere.length; j++) {
        index++
        this.thirdFormGroup = this._formBuilder.group(
          Object.assign(this.accueilS, { ["thirdCtrl" + (index)]: ['', Validators.required] })

        );     
       
         
      }
    }
  }


  accueilC: Object = [];

  validateE() {
    let index = 0;
    for (let i = 0; i < this.circulation.length; i++) {

      for (let j = 0; j < this.circulation[i].critere.length; j++) {
        index++
        this.forFormGroup = this._formBuilder.group(
          Object.assign(this.accueilC, { ["forCtrl" + (index)]: ['', Validators.required] })

        );    
        
      }
    }
  }



  accueilP: Object = [];

  validateF() {
    let index = 0;
    for (let i = 0; i < this.petit_dejeuner.length; i++) {

      for (let j = 0; j < this.petit_dejeuner[i].critere.length; j++) {
        index++
        this.fiveFormGroup = this._formBuilder.group(
          Object.assign(this.accueilP, { ["fiveCtrl" + (index)]: ['', Validators.required] })

        );  
            
      }
    }
  }


  accueilR: Object = [];

  validateG() {
    let index = 0;
    for (let i = 0; i < this.resto.length; i++) {

      for (let j = 0; j < this.resto[i].critere.length; j++) {
        index++
        this.sixFormGroup = this._formBuilder.group(
          Object.assign(this.accueilR, { ["sixCtrl" + (index)]: ['', Validators.required] })

        );   
       
      }
    }
  }

  accueilB: Object = [];

  validateH() {
    let index = 0;
    for (let i = 0; i < this.bar.length; i++) {

      for (let j = 0; j < this.bar[i].critere.length; j++) {
        index++
        this.sevenFormGroup = this._formBuilder.group(
          Object.assign(this.accueilB, { ["sevenCtrl" + (index)]: ['', Validators.required] })

        );     
       
         
      }
    }
  }


  accueilT: Object = [];

  validateI() {
    let index = 0;
    for (let i = 0; i < this.salle_semi_cere.length; i++) {

      for (let j = 0; j < this.salle_semi_cere[i].critere.length; j++) {
        index++
        this.heigtFormGroup = this._formBuilder.group(
          Object.assign(this.accueilT, { ["heigtCtrl" + (index)]: ['', Validators.required] })

        );   
      
           
      }
    }
  }


  accueilF: Object = [];

  validateJ() {
    let index = 0;
    for (let i = 0; i < this.bien_etre_fitness.length; i++) {

      for (let j = 0; j < this.bien_etre_fitness[i].critere.length; j++) {
        index++
        this.nineFormGroup = this._formBuilder.group(
          Object.assign(this.accueilF, { ["nineCtrl" + (index)]: ['', Validators.required] })

        );   
           
      }
    }
  }


  accueilO: Object = [];

  validateK() {
    let index = 0;
    for (let i = 0; i < this.piscine.length; i++) {

      for (let j = 0; j < this.piscine[i].critere.length; j++) {
        index++
        this.tenFormGroup = this._formBuilder.group(
          Object.assign(this.accueilO, { ["tenCtrl" + (index)]: ['', Validators.required] })

        ); 
            
      }
    }
  }


  accueilA: Object = [];

  validateL() {
    let index = 0;
    for (let i = 0; i < this.boutique.length; i++) {

      for (let j = 0; j < this.boutique[i].critere.length; j++) {
        index++
        this.elevenFormGroup = this._formBuilder.group(
          Object.assign(this.accueilA, { ["elevenCtrl" + (index)]: ['', Validators.required] })

        );      
      }
    }
  }

  accueilU: Object = [];

  validateM() {
    let index = 0;
    for (let i = 0; i < this.unite_logement.length; i++) {

      for (let j = 0; j < this.unite_logement[i].critere.length; j++) {
        index++
        this.twelveFormGroup = this._formBuilder.group(
          Object.assign(this.accueilU, { ["twelveCtrl" + (index)]: ['', Validators.required] })

        ); 
           
      }
    }
  }


  accueilV: Object = [];

  validateN() {
    let index = 0;
    for (let i = 0; i < this.salle_bain_prive.length; i++) {

      for (let j = 0; j < this.salle_bain_prive[i].critere.length; j++) {
        index++
        this.thirteenFormGroup = this._formBuilder.group(
          Object.assign(this.accueilV, { ["thirteenCtrl" + (index)]: ['', Validators.required] })

        ); 
             
      }
    }
  }


  accueilJ: Object = [];

  validateO() {
    let index = 0;
    for (let i = 0; i < this.espace_perso.length; i++) {

      for (let j = 0; j < this.espace_perso[i].critere.length; j++) {
        index++
        this.forteenFormGroup = this._formBuilder.group(
          Object.assign(this.accueilJ, { ["forteenCtrl" + (index)]: ['', Validators.required] })

        );  
          
      }
    }
  }


  accueilZ: Object = [];

  validateP() {
    let index = 0;
    for (let i = 0; i < this.elect_eau_ass.length; i++) {

      for (let j = 0; j < this.elect_eau_ass[i].critere.length; j++) {
        index++
        this.fiveteenFormGroup = this._formBuilder.group(
          Object.assign(this.accueilZ, { ["fiveteenCtrl" + (index)]: ['', Validators.required] })

        );    console.log("fiveteenCtrl" + (index));
          
      }
    }
  }


  // thirdFormGroup = this._formBuilder.group({
  //   //thirdCtrl: ['', Validators.required],
  //   thirdCtrl1: ['', Validators.required],
  //   thirdCtrl2: ['', Validators.required],
  //   thirdCtrl3: ['', Validators.required],
  //   thirdCtrl4: ['', Validators.required],


  // });

  // forFormGroup = this._formBuilder.group({
  //   //forCtrl: ['', Validators.required],
  //   forCtrl1: ['', Validators.required],
  //   forCtrl2: ['', Validators.required],

  // });
  // fiveFormGroup = this._formBuilder.group({
  //   //fiveCtrl: ['', Validators.required],
  //   fiveCtrl1: ['', Validators.required],
  //   fiveCtrl2: ['', Validators.required],
  //   fiveCtrl3: ['', Validators.required],
  //   fiveCtrl4: ['', Validators.required],
  // });

  // sixFormGroup = this._formBuilder.group({
  //   // sixCtrl: ['', Validators.required],
  //   sixCtrl1: ['', Validators.required],
  //   sixCtrl2: ['', Validators.required],
  //   sixCtrl3: ['', Validators.required],
  //   sixCtrl4: ['', Validators.required],
  // });

  // sevenFormGroup = this._formBuilder.group({
  //   //sevenCtrl: ['', Validators.required],
  //   sevenCtrl1: ['', Validators.required],
  //   sevenCtrl2: ['', Validators.required],
  //   sevenCtrl3: ['', Validators.required],
  //   sevenCtrl4: ['', Validators.required],
  // });

  // heigtFormGroup = this._formBuilder.group({
  //   // heigtCtrl: ['', Validators.required],
  //   heigtCtrl1: ['', Validators.required],
  //   heigtCtrl2: ['', Validators.required],

  // });
  // nineFormGroup = this._formBuilder.group({
  //   //nineCtrl: ['', Validators.required],
  //   nineCtrl1: ['', Validators.required],
  //   nineCtrl2: ['', Validators.required],
  //   nineCtrl3: ['', Validators.required],
  //   nineCtrl4: ['', Validators.required],
  //   nineCtrl5: ['', Validators.required],
  //   nineCtrl6: ['', Validators.required],
  //   nineCtrl7: ['', Validators.required],
  //   nineCtrl8: ['', Validators.required],
  //   nineCtrl9: ['', Validators.required],
  //   nineCtrl10: ['', Validators.required],
  //   nineCtrl11: ['', Validators.required],

  // });
  // tenFormGroup = this._formBuilder.group({
  //   //tenCtrl: ['', Validators.required],
  //   tenCtrl1: ['', Validators.required],
  //   tenCtrl2: ['', Validators.required],
  //   tenCtrl3: ['', Validators.required],
  //   tenCtrl4: ['', Validators.required],
  //   tenCtrl5: ['', Validators.required],
  //   tenCtrl6: ['', Validators.required],
  //   tenCtrl7: ['', Validators.required],
  //   tenCtrl8: ['', Validators.required],

  // });

  // elevenFormGroup = this._formBuilder.group({
  //   //elevenCtrl: ['', Validators.required],
  //   elevenCtrl1: ['', Validators.required],

  // });

  // twelveFormGroup = this._formBuilder.group({
  //   //twelveCtrl: ['', Validators.required],
  //   twelveCtrl1: ['', Validators.required],
  //   twelveCtrl2: ['', Validators.required],
  //   twelveCtrl3: ['', Validators.required],
  //   twelveCtrl4: ['', Validators.required],
  //   twelveCtrl5: ['', Validators.required],
  //   twelveCtrl6: ['', Validators.required],
  //   twelveCtrl7: ['', Validators.required],
  //   twelveCtrl8: ['', Validators.required],
  //   twelveCtrl9: ['', Validators.required],
  //   twelveCtrl10: ['', Validators.required],
  //   twelveCtrl11: ['', Validators.required],
  //   twelveCtrl12: ['', Validators.required],
  //   twelveCtrl13: ['', Validators.required],
  //   twelveCtrl14: ['', Validators.required],
  //   twelveCtrl15: ['', Validators.required],
  //   twelveCtrl16: ['', Validators.required],
  //   twelveCtrl17: ['', Validators.required],

  // });

  // thirteenFormGroup = this._formBuilder.group({
  //   //thirteenCtrl: ['', Validators.required],
  //   thirteenCtrl1: ['', Validators.required],
  //   thirteenCtrl2: ['', Validators.required],
  //   thirteenCtrl3: ['', Validators.required],
  //   thirteenCtrl4: ['', Validators.required],
  //   thirteenCtrl5: ['', Validators.required],
  //   thirteenCtrl6: ['', Validators.required],
  //   thirteenCtrl7: ['', Validators.required],
  //   thirteenCtrl8: ['', Validators.required],
  //   thirteenCtrl9: ['', Validators.required],

  // });

  // forteenFormGroup = this._formBuilder.group({
  //   //forteenCtrl: ['', Validators.required],
  //   forteenCtrl1: ['', Validators.required],
  //   forteenCtrl2: ['', Validators.required],
  //   forteenCtrl3: ['', Validators.required],
  //   forteenCtrl4: ['', Validators.required],
  //   forteenCtrl5: ['', Validators.required],

  // });
  // fiveteenFormGroup = this._formBuilder.group({
  //   //fiveteenCtrl: ['', Validators.required],
  //   fiveteenCtrl1: ['', Validators.required],
  //   fiveteenCtrl2: ['', Validators.required],
  //   fiveteenCtrl3: ['', Validators.required],

  // });
  // sixteenFormGroup = this._formBuilder.group({
  //   sixteenCtrl: ['', Validators.required],
  // });

  // firstFormGroup = this._formBuilder.group({
  //   // firstCtrl: new FormControl('', Validators.required),
  //   // firstCtrl1: new FormControl('', Validators.required),
  //   // firstCtrl2: new FormControl('', Validators.required),
  //   // firstCtrl3: new FormControl('', Validators.required)
  //   firstCtrl1: ['', Validators.required],
  //   firstCtrl2: ['', Validators.required],

  // });




  openDialog() {
    const config: MatDialogConfig = {
      width: '100em',
      height: '25em',

    };
    const dialogRef = this.dialog.open(LegendDialogComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }




  onSubmit(): void {
    console.log('eee');

  }

  onSubmitFirst(): void {

    if (this.forgetFormGroup.invalid && this.firstFormGroup.invalid && this.secondFormGroup.invalid && this.thirdFormGroup.invalid
      && this.forFormGroup.invalid && this.fiveFormGroup.invalid && this.sixFormGroup.invalid && this.sevenFormGroup.invalid
      && this.heigtFormGroup.invalid && this.nineFormGroup.invalid && this.tenFormGroup.invalid && this.elevenFormGroup.invalid && this.twelveFormGroup.invalid
      && this.thirteenFormGroup.invalid || this.forteenFormGroup.invalid && this.fiveteenFormGroup.invalid) {
      this.message = 'Veuillez cocher toutes les cases svp!';
    } else {
      this.message = "";
    }


  }



  send(): void {
    console.log('eee');

  }

  ch(no: number, quest: string, e: any, chapter?: string, rubriq?: string): void {
    const data = {
      id: no,
      critere: quest,
      choice: e.value,
      na: false,
      chapitre: chapter,
      rubrique: rubriq
    }

    const indexObject = this.responses.findIndex((el: any) => {
      return el.id === data.id
    });

    if (indexObject === -1) {
      this.responses.push(data);
    } else {
      this.responses.splice(indexObject, 1);
      this.responses.push(data);
    }

    console.log(this.responses);
  }

  chh(no: number, quest: string, e: any, chapter?: string, rubriq?: string): void {
    const data = {
      id: no,
      critere: quest,
      choice: null,
      na: e.target.checked,
      chapitre: chapter,
      rubrique: rubriq
    }

    this.obj = no;

    // this.obj = this.responses.find((el: any) => {
    //   return el.id === data.id
    // });

    const indexObject = this.responses.findIndex((el: any) => {
      return el.id === data.id
    });

    if (indexObject === -1) {
      this.responses.push(data);
    } else {
      this.responses.splice(indexObject, 1);
      this.responses.push(data);
    }

    console.log(this.responses);
    console.log(this.obj);

  }

  // hh() {

  //   console.log(this.firstFormGroup.controls['firstCtrl'].value);
  // }

  changed(data: any, e: any): void {
    const indexObject = this.infoCombo.findIndex((el: any) => {
      return el.name === data.name
    });

    this.infoCombo.splice(indexObject, 1);

    let jj = false;
    if (e.target.checked) {
      jj = false;
    } else {
      jj = true;
    }

    const add = {
      no: data.no,
      name: data.name,
      sh: jj,
      nc: data.nc,
      case: data.case
    };
    this.infoCombo.push(add);

    console.log(this.infoCombo);

  }

}
