import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Root application component.
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

/**
 * App component class.
 */
export class App {
  // Keep a simple reactive title in case templates use it.
  protected readonly title = signal('hugosilvaphotography');
}
