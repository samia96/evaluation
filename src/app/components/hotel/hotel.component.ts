import { Component, OnInit } from '@angular/core';
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
//import {legendDialogComponent} from '../legend-dialog';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  firstFormGroup!: FormGroup
  secondFormGroup!: FormGroup
  thirdFormGroup!: FormGroup
  forFormGroup!: FormGroup
  fiveFormGroup!: FormGroup
  sixFormGroup!: FormGroup
  sevenFormGroup!: FormGroup
  heigtFormGroup!: FormGroup
  nineFormGroup!: FormGroup
  tenFormGroup!: FormGroup
  elevenFormGroup!: FormGroup
  twelveFormGroup!: FormGroup
  thirteenFormGroup!: FormGroup
  forteenFormGroup!: FormGroup
  fiveteenFormGroup!: FormGroup
  sixteenFormGroup!: FormGroup
  forgetFormGroup!: FormGroup


  responses: any[] = [];
  obj!: any;
  sh = true;

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

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

  data_info_reser = {

  }

  firstCtrl1!: string;

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) {

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      secondCtrl1: ['', Validators.required],
      secondCtrl2: ['', Validators.required],
      secondCtrl3: ['', Validators.required],

    });
    this.forgetFormGroup = this._formBuilder.group({
      forgetCtrl: ['', Validators.required],
      forgetCtrl1: ['', Validators.required],
      forgetCtrl2: ['', Validators.required],
      forgetCtrl3: ['', Validators.required],
      forgetCtrl4: ['', Validators.required],

    });

    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
      thirdCtrl1: ['', Validators.required],
      thirdCtrl2: ['', Validators.required],
      thirdCtrl3: ['', Validators.required],
      thirdCtrl4: ['', Validators.required],


    });

    this.forFormGroup = this._formBuilder.group({
      forCtrl: ['', Validators.required],
      forCtrl1: ['', Validators.required],
      forCtrl2: ['', Validators.required],

    });
    this.fiveFormGroup = this._formBuilder.group({
      fiveCtrl: ['', Validators.required],
      fiveCtrl1: ['', Validators.required],
      fiveCtrl2: ['', Validators.required],
      fiveCtrl3: ['', Validators.required],
      fiveCtrl4: ['', Validators.required],
    });

    this.sixFormGroup = this._formBuilder.group({
      sixCtrl: ['', Validators.required],
      sixCtrl1: ['', Validators.required],
      sixCtrl2: ['', Validators.required],
      sixCtrl3: ['', Validators.required],
      sixCtrl4: ['', Validators.required],
    });

    this.sevenFormGroup = this._formBuilder.group({
      sevenCtrl: ['', Validators.required],
      sevenCtrl1: ['', Validators.required],
      sevenCtrl2: ['', Validators.required],
      sevenCtrl3: ['', Validators.required],
      sevenCtrl4: ['', Validators.required],
    });

    this.heigtFormGroup = this._formBuilder.group({
      heigtCtrl: ['', Validators.required],
      heigtCtrl1: ['', Validators.required],
      heigtCtrl2: ['', Validators.required],

    });
    this.nineFormGroup = this._formBuilder.group({
      nineCtrl: ['', Validators.required],
      nineCtrl1: ['', Validators.required],
      nineCtrl2: ['', Validators.required],
      nineCtrl3: ['', Validators.required],
      nineCtrl4: ['', Validators.required],
      nineCtrl5: ['', Validators.required],
      nineCtrl6: ['', Validators.required],
      nineCtrl7: ['', Validators.required],
      nineCtrl8: ['', Validators.required],
      nineCtrl9: ['', Validators.required],
      nineCtrl10: ['', Validators.required],
      nineCtrl11: ['', Validators.required],

    });
    this.tenFormGroup = this._formBuilder.group({
      tenCtrl: ['', Validators.required],
      tenCtrl1: ['', Validators.required],
      tenCtrl2: ['', Validators.required],
      tenCtrl3: ['', Validators.required],
      tenCtrl4: ['', Validators.required],
      tenCtrl5: ['', Validators.required],
      tenCtrl6: ['', Validators.required],
      tenCtrl7: ['', Validators.required],
      tenCtrl8: ['', Validators.required],

    });

    this.elevenFormGroup = this._formBuilder.group({
      elevenCtrl: ['', Validators.required],
      elevenCtrl1: ['', Validators.required],

    });

    this.twelveFormGroup = this._formBuilder.group({
      twelveCtrl: ['', Validators.required],
      twelveCtrl1: ['', Validators.required],
      twelveCtrl2: ['', Validators.required],
      twelveCtrl3: ['', Validators.required],
      twelveCtrl4: ['', Validators.required],
      twelveCtrl5: ['', Validators.required],
      twelveCtrl6: ['', Validators.required],
      twelveCtrl7: ['', Validators.required],
      twelveCtrl8: ['', Validators.required],
      twelveCtrl9: ['', Validators.required],
      twelveCtrl10: ['', Validators.required],
      twelveCtrl11: ['', Validators.required],
      twelveCtrl12: ['', Validators.required],
      twelveCtrl13: ['', Validators.required],
      twelveCtrl14: ['', Validators.required],
      twelveCtrl15: ['', Validators.required],
      twelveCtrl16: ['', Validators.required],
      twelveCtrl17: ['', Validators.required],

    });

    this.thirteenFormGroup = this._formBuilder.group({
      thirteenCtrl: ['', Validators.required],
      thirteenCtrl1: ['', Validators.required],
      thirteenCtrl2: ['', Validators.required],
      thirteenCtrl3: ['', Validators.required],
      thirteenCtrl4: ['', Validators.required],
      thirteenCtrl5: ['', Validators.required],
      thirteenCtrl6: ['', Validators.required],
      thirteenCtrl7: ['', Validators.required],
      thirteenCtrl8: ['', Validators.required],
      thirteenCtrl9: ['', Validators.required],

    });

    this.forteenFormGroup = this._formBuilder.group({
      forteenCtrl: ['', Validators.required],
      forteenCtrl1: ['', Validators.required],
      forteenCtrl2: ['', Validators.required],
      forteenCtrl3: ['', Validators.required],
      forteenCtrl4: ['', Validators.required],
      forteenCtrl5: ['', Validators.required],

    });
    this.fiveteenFormGroup = this._formBuilder.group({
      fiveteenCtrl: ['', Validators.required],
      fiveteenCtrl1: ['', Validators.required],
      fiveteenCtrl2: ['', Validators.required],
      fiveteenCtrl3: ['', Validators.required],

    });
    this.sixteenFormGroup = this._formBuilder.group({
      sixteenCtrl: ['', Validators.required],
    });


  }


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



  ngOnInit(): void {
    // console.log(INFORMATION_RESERVATION);

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: new FormControl('', Validators.required),
      firstCtrl1: new FormControl('', Validators.required),
      firstCtrl2: new FormControl('', Validators.required),
      firstCtrl3: new FormControl('', Validators.required)
      // firstCtrl: ['', Validators.required],
      // firstCtrl1: ['', Validators.required],
      // firstCtrl2: ['', Validators.required],
      // firstCtrl3: ['', Validators.required],

    });

    // this.info_reser.forEach(element => {
    //   console.log(element.critere[0].case[0].numero);

    // });

    /* this.unite_logement.forEach(element => {
      console.log(element.critere);
      
    }); */

  }

  onSubmit(): void {
    console.log('eee');

  }

  onSubmitFirst(): void {
    console.log(this.firstFormGroup.invalid);

    if (this.firstFormGroup.invalid) {
      console.log('invalid first form');

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

    this.obj = this.responses.find((el: any) => {
      return el.id === data.id
    });

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

  hh() {

    console.log(this.firstFormGroup.controls['firstCtrl'].value);



  }

}
