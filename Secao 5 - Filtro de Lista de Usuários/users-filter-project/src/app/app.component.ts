import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { filterUsersList } from './utils/filter-users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;
  usersList: IUser[] = [];
  usersListFiltered: IUser[] = [];

  ngOnInit(): void {
    setTimeout(() => {
      this.usersList = UsersList;
      this.usersListFiltered = this.usersList;
    }, 3000);
  }

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOptions) {
    console.log(filterOptions);
    //O método usa conceito de programação pura, não altera propriedades externas da classe
    this.usersListFiltered = filterUsersList(filterOptions, this.usersList);
  }
}
