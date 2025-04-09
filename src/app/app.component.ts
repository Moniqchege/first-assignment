import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { TaskCreationComponent } from "./task-creation/task-creation.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SigninComponent, SignupComponent, TaskCreationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-assignment';
}
