import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {BreedServiceService} from '../../../breeds/services/breed-service.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {Show} from '../../models/show';

@Component({
  selector: 'app-register-show-contestant',
  templateUrl: './register-show-contestant.component.html',
  styleUrls: ['./register-show-contestant.component.scss']
})
export class RegisterShowContestantComponent implements OnInit {

  registerForm: FormGroup;
  shows$: Observable<Show[]>;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private breedService: BreedServiceService,
              private fb: FormBuilder) {

    this.shows$ = this.data;


    this.registerForm =  this.fb.group({
      name: [''],
      breed: [''],
      gender: [''],
      rank: ['']
    });
  }

  ngOnInit() {
  }

  onRegisterShowContestant() {

  }
}
