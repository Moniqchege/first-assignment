import { Component } from '@angular/core';

@Component({
  selector: 'task-creation',
  templateUrl: './task-creation.component.html',
  styleUrls: ['./task-creation.component.css']
})
export class TaskCreationComponent {
  task = {
    title: '',
    description: '',
    dueDate: '',
    priority: 'Low',
    attachments: ''
  };

  onSubmit() {
    // Here you can handle the form submission, e.g., send data to an API
    console.log('Task created:', this.task);
    alert('Task created successfully!');
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.convertFileToBase64(file);
    }
  }

  private convertFileToBase64(file: File) {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.task.attachments = reader.result as string; // Store the Base64 encoded file
    };
    reader.readAsDataURL(file);
  }
}
