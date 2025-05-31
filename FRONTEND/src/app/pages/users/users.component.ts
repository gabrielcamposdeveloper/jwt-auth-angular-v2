import { Component, OnInit, ViewChild } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Table } from "primeng/table";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements OnInit {
  usuarios: any[] = [];

  @ViewChild("table") table!: Table;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data) => {
      this.usuarios = data;
    });
  }

  exportarCSVManual() {
    if (!this.usuarios || this.usuarios.length === 0) {
      return;
    }

    const headers = ["id", "username", "email", "fullName"];
    const csvRows = [];

    csvRows.push(headers.join(","));

    for (const user of this.usuarios) {
      const row = headers.map((header) => {
        let cell = user[header] ?? "";
        if (
          typeof cell === "string" &&
          (cell.includes(",") || cell.includes('"'))
        ) {
          cell = `"${cell.replace(/"/g, '""')}"`;
        }
        return cell;
      });
      csvRows.push(row.join(","));
    }

    const csvString = csvRows.join("\n");

    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "usuarios.csv";
    a.click();

    URL.revokeObjectURL(url);
  }
}
