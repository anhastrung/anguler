import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: any
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get("http://localhost:3000/products/").subscribe(data => this.products = data)
  }
  remove(id: number): void {
    if (id > 0) {
      if (confirm("Xac nhan")) {
        this.http.delete("http://localhost:3000/products/" + id).subscribe(() => location.reload())
      }
    }
  }
}
