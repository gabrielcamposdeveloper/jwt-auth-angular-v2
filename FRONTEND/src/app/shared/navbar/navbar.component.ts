import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem("token");
    this.navegar("/login");
  }

  navegar(rota: string) {
    this.router.navigate([rota]);
  }
}
