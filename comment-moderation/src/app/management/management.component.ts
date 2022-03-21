import { BackendService } from './../backend.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  displayedColumns: string[] = ['avatar', 'author', 'content', 'status', 'created', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(public backend: BackendService) { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.backend.getComments()
  }

}

