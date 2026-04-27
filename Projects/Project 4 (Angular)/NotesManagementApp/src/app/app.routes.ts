import { Routes } from '@angular/router';
import { Home } from '../Components/home/home';
import { AddNotes } from '../Components/add-notes/add-notes';
import { ListNotes } from '../Components/list-notes/list-notes';
import { EditNotes } from '../Components/edit-notes/edit-notes';

export const routes: Routes = [
    {path :'', component: Home},
    {path:'add-notes', component:AddNotes},
    {path:'notes', component:ListNotes},
    {path:'update/:id', component:EditNotes}
];
