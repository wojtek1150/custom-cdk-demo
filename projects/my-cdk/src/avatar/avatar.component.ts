import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'lib-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  @Input() url?: string | null;
  @Input() initials?: string | null;
  @Input() tooltipName?: string | null;

  @HostBinding('class.with-tooltip') get withTooltip(): boolean {
    return !!this.tooltipName;
  }
}
