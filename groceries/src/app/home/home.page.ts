import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
// Add Controller
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'Grocery List';
  // Hard coding item array list of items
  items = [
    {
      name: 'Apple',
      quantity: 3,
    },
    {
      name: 'Banana',
      quantity: 4,
    },
    {
      name: 'Orange',
      quantity: 5,
    },
    {
      name: 'Avocado',
      quantity: 6,
    },
    {
      name: 'Lemon',
      quantity: 7,
    },
  ];

  constructor(
    //Add toast controller
    public toastController: ToastController,
    public alertController: AlertController
  ) {}
  async removeItem(item) {
    console.log(item);
    const toast = await this.toastController.create({
      message: 'Successfully removed - ' + item.name + '...',
      duration: 3000,
    });
    toast.present();
  }

  addItem() {
    console.log('Adding Item');
    this.showAddItemPrompt();
  }

  // Alert controler
  showAddItemPrompt() {
    this.alertController
      .create({
        header: 'Add Item',
        message: 'Please enter item ...',
        inputs: [
          {
            name: 'name',
            placeholder: 'Name',
          },
          {
            name: 'quantity',
            placeholder: 'Quantity',
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: (data: any) => {
              console.log('Canceled', data);
            },
          },
          {
            text: 'Save!',
            handler: (item: any) => {
              console.log('Saved Information', item);
              this.items.push(item);
            },
          },
        ],
      })
      .then((res) => {
        res.present();
      });
  }
}
