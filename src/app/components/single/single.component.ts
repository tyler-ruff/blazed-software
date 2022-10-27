import { Component, Input, OnInit } from '@angular/core';

import { Firestore, collectionData, collection, query, where, limit } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Software } from './../../models/software.model';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})

export class SingleComponent implements OnInit {
  @Input() slug = '';
  software$: Observable<Software[]>;
  private firestore: Firestore;
  constructor(firestore: Firestore) {
    this.firestore = firestore;
    this.software$ = new Observable<Software[]>();
  }

  ngOnInit(): void {
    const col = collection(this.firestore, 'software');
    const q = query(col, where('slug', '==', this.slug), limit(1));
    this.software$ = collectionData(q) as Observable<Software[]>;
  }

}
