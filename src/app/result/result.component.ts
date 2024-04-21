import { Component, Input } from '@angular/core';
import { ClrIconModule } from "@clr/angular";
import { ClarityIcons, happyFaceIcon, sadFaceIcon } from "@cds/core/icon";

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

  @Input() rightAnswersCount!: number;

  public positiveFeedback = false;

  constructor() {
    ClarityIcons.addIcons(happyFaceIcon);
    ClarityIcons.addIcons(sadFaceIcon);
  }

  ngOnChanges() {
    this.positiveFeedback = this.rightAnswersCount > 6;
  }
}
