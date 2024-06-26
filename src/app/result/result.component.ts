import { Component, Input } from '@angular/core';
import { ClrIconModule } from "@clr/angular";
import { ClarityIcons, happyFaceIcon, sadFaceIcon } from "@cds/core/icon";
import { Router } from "@angular/router";

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [
    ClrIconModule
  ],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {

  @Input() correctAnswersCount!: number;

  public positiveFeedback = false;

  constructor(private router: Router) {
    ClarityIcons.addIcons(happyFaceIcon);
    ClarityIcons.addIcons(sadFaceIcon);
  }

  ngOnChanges() {
    this.positiveFeedback = this.correctAnswersCount > 6;
  }

  goToMainMenu(){
    this.router.navigate(['/'])
  }
}
