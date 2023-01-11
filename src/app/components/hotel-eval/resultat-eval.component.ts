import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { HttpClient } from '@angular/common/http';
import { isIdentifier } from '@angular/compiler';

import {
  Component,
  Inject,
  Injectable,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import {

  MatDialog,
  MatDialogConfig,

  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { saveAs } from 'file-saver';
import { writeFileSync } from 'fs';
import { EvalutionService } from 'src/app/service/evaluation-service';


//  XLSX = require("xlsx");
// import * as XLSX from 'xlsx/xlsx.mjs';
import {
  read,
  readFile,
  writeFileXLSX,
  writeXLSX,
  WorkBook,
  WorkSheet,
  writeFile,
  writeFileAsync,
  utils,
  write,
} from 'xlsx';
import {ActivatedRoute} from "@angular/router";

// import   grille  from   '../../../assets/grille_hotel.xltx' ;

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-hotel-eval',
  templateUrl: './resultat-eval.component.html',
  styleUrls: ['./hotel-eval.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class ResultatEvalComponent  implements OnInit {
  constructor(
    private http: HttpClient,
    private activatedroute:ActivatedRoute,
    private _formBuilder: FormBuilder,
    public dialog: MatDialog,
    private evalService: EvalutionService
  ) {}
  @ViewChild(MatTable) table!: MatTable<any>;


  allDatat:any;
  etoile:any;

  dataResultSource: any[] = [];
  displayedColumns: string[] = ['position', 'chapitre', 'majeur', 'mineur'];
  async ngOnInit() {

    this.activatedroute.queryParams.subscribe(data => {
      this.allDatat=data;

     this.dataResultSource=JSON.parse(data['dataResultSource']);
     this.etoile=data['etoile'];
      console.log( JSON.parse(data['dataResultSource']));
    })

  }


}
