import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { ListStudents } from '../list-students/list-students';
import { AddStudent } from '../add-student/add-student';

export const routes: Routes = [
    {path:'home',component:Home},
    {path:'list',component:ListStudents},
    {path:'add',component:AddStudent}
];
