import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";
declare var $: any;

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(public snackbar: MatSnackBar) {}

  ngOnInit() {
    $(document).ready(function() {
      //slider
      $(".slider").slider({
        indicators: true,
        height: 300,
        transition: 800,
        interval: 3000
      });

      //sidenav
      $(".button-collapse").sideNav();
    });
  }

  openSnackBar(message: string) {
    this.snackbar.open("This feature will be added soon ", "close", {
      duration: 3000
    });
  }

  signOut() {
    alert("Signed Out");
  }
}
