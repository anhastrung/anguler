import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { IProduct } from 'src/interfaces/IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() id: number = 0
  product: IProduct | null = null
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    if (this.id > 0) {
      this.http.get("http://localhost:3000/products/" + this.id).subscribe(data => this.product = data)
    }
    else {
      location.replace("/product")
    }
  }
}
