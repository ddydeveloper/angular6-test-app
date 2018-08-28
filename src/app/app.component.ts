import { Component} from '@angular/core';
       
       
export class User{
    name: string; 
    email: string;
    phone: string;
}
 
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html', 
    styleUrls: ['./app.component.css']
})
export class AppComponent {
 
    user: User = new User();
    addUser() {
        console.log(this.user);
    }
}