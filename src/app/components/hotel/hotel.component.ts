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
    });

    this.forFormGroup = this._formBuilder.group({
      forCtrl: ['', Validators.required],
    });
    this.fiveFormGroup = this._formBuilder.group({
      forCtrl: ['', Validators.required],
    });
    this.sixFormGroup = this._formBuilder.group({
      forCtrl: ['', Validators.required],
    });
    this.sevenFormGroup = this._formBuilder.group({
      forCtrl: ['', Validators.required],
    });
    this.heigtFormGroup = this._formBuilder.group({
      forCtrl: ['', Validators.required],
    });
    this.nineFormGroup = this._formBuilder.group({
      forCtrl: ['', Validators.required],
    });
    this.tenFormGroup = this._formBuilder.group({
      forCtrl: ['', Validators.required],
    });

    this.elevenFormGroup = this._formBuilder.group({
      forCtrl: ['', Validators.required],
    });

    this.twelveFormGroup = this._formBuilder.group({
      forCtrl: ['', Validators.required],
    });

    this.thirteenFormGroup = this._formBuilder.group({
      forCtrl: ['', Validators.required],
    });

    this.forteenFormGroup = this._formBuilder.group({
      forCtrl: ['', Validators.required],
    });
    this.fiveteenFormGroup = this._formBuilder.group({
      forCtrl: ['', Validators.required],
    });
    this.sixteenFormGroup = this._formBuilder.group({
      forCtrl: ['', Validators.required],
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
