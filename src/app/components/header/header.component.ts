import { Component } from '@angular/core';
import { LogoSource } from 'src/app/interfaces/logo_source';
import { HeaderService } from 'src/app/services/header/header.service';
import { categoryPath, homePath, infoPath, loginLink, registerLink } from 'src/app/utils/utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  category = {
    link: `/${categoryPath}`,
    label: 'Category'
  };
  home = {
    link: `/${homePath}`,
    label: 'Home'
  };
  info = {
    link: `/${infoPath}`,
    label: 'Info'
  };
  login = {
    href: loginLink,
    label: 'Login'
  };
  register = {
    href: registerLink,
    label: 'Register'
  };
  src!: string;

  constructor(private headerService: HeaderService) {
  }

  ngOnInit(): void {
    this.headerService.getLogo().subscribe((logoSource: LogoSource) => {
      this.src = logoSource.src;
    });
  }
}
