import { Component, OnInit } from '@angular/core';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Software } from './../../models/software.model';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  software$: Observable<Software[]>;
  constructor(firestore: Firestore) { 
    const col = collection(firestore, 'software');
    this.software$ = collectionData(col) as Observable<Software[]>;
  }

  ngOnInit(): void {
  }

}
