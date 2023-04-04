import { Component } from '@angular/core';
import OpenAI from 'openai-api';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  openai = new OpenAI('your_api_key');
  messages = [];
  newMessage = '';

  async sendMessage(event: any) {
    event.preventDefault();

    if (this.newMessage.trim() === '') {
      return;
    }

    const prompt = this.newMessage;
    const completions:any = await this.openai.complete({
      engine: 'davinci',
      prompt,
      maxTokens: 50,
    });

    const message = completions.choices[0].text.trim();
    // this.messages.push({ text: message, from: 'bot' });
    this.newMessage = '';
  }
}
