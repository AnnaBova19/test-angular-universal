import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { CanonicalService } from './shared/canonical.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-universal-crud';
  collapsed: boolean = true;

  constructor(
    private metaTagService: Meta,
    private canonicalService: CanonicalService
  ) { }

  ngOnInit() {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Angular SEO Integration, Music CRUD, Angular Universal' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Digamber Singh' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2021-01-22', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
    this.canonicalService.setCanonicalURL();
  }
}
