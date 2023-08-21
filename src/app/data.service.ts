import { Injectable } from '@angular/core';
import { Observable , of } from "rxjs";

const mockData: UserData[] = [
  {
    "firstName": "Tim",
    "lastName": "Jones",
    "carrier": "Humana",
    "status": "COMPLETE",
    "eventDate": "2021-09-22"
  },
  {
    "firstName": "Tim",
    "lastName": "Jones",
    "carrier": "Humana",
    "status": "COMPLETE",
    "eventDate": "2021-09-22"
  },
  {
    "firstName": "Bill",
    "lastName": "Jones",
    "carrier": "Humana",
    "status": "ERROR",
    "eventDate": "2021-09-23"
  },
  {
    "firstName": "Tim",
    "lastName": "Blue",
    "carrier": "Aetna",
    "status": "INCOMPLETE",
    "eventDate": "2021-09-25"
  },
  {
    "firstName": "Jim",
    "lastName": "Red",
    "carrier": "UHC",
    "status": "COMPLETE",
    "eventDate": "2021-09-20"
  }
]

export interface UserData {
  firstName: string;
  lastName: string;
  carrier: string;
  status: string;
  eventDate: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  getMockData(): Observable<UserData[]> {
    return of(mockData);
  }
}
