import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { isWithinInterval } from 'date-fns';

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
    this.usersListFiltered = this.filterUsersList(filterOptions, this.usersList);
  }


  filterUsersList(filterOptions: IFilterOptions, usersList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];

    filteredList = this.filterUsersListByName(filterOptions.name, usersList);

    filteredList = this.filterUsersListByStatus(filterOptions.status, filteredList);

    filteredList = this.filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

    return filteredList;
  }

  filterUsersListByName(name: string | undefined, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPPED = name === undefined;

    if(NAME_NOT_TYPPED) {
      return usersList;
    }

    const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()));

    return filteredList;
  }

   filterUsersListByStatus(status: boolean | undefined, userList: IUser[]): IUser[] {
    const STATUS_NOT_TYPPED = status === undefined;

    if(STATUS_NOT_TYPPED) {
      return userList;
    }

    const filteredList = userList.filter((user) => user.ativo === status);

    return filteredList;
  }

  filterUsersListByDate(startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] {
    const DATE_NOT_SELECTED = startDate === undefined || endDate === undefined;

    if(DATE_NOT_SELECTED) {
      return usersList;
    }

    const checkDateInterval = (user: IUser) => isWithinInterval(new Date(user.dataCadastro), {
      start: startDate,
      end: endDate,
    });

    const listFiltered = usersList.filter(checkDateInterval);
      return listFiltered;
  }
}
