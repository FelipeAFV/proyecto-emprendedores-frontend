import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AppRole } from 'src/app/model/app-role';
import { AuthorizationService } from 'src/app/services/authorization/authorization.service';

@Directive({
  selector: '[appCheckRole]'
})
export class CheckRoleDirective implements OnInit {

  @Input()
  appCheckRole: AppRole;

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef, private authorizationService: AuthorizationService) {

    console.log('Creando directiva');
   }

  ngOnInit(): void {
    console.log(this.appCheckRole);

    this.authorizationService.hasRole(this.appCheckRole).subscribe(
      (data) => {
        this.viewContainer.createEmbeddedView(this.templateRef);
        console.log(data);
   
      },
      (err) => {
        console.log(err);
        this.viewContainer.clear();
      }
    );
    
  }


  
}
