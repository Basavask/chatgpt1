import { Component, OnInit } from '@angular/core';
import OpenAI from 'openai-api';

@Component({
  selector: 'app-openai',
  templateUrl: './openai.component.html',
  styleUrls: ['./openai.component.css'],
})
export class OpenaiComponent implements OnInit {
  openai: any;
  generatedText: string = '';
  prompt: any;

  constructor() {}

  ngOnInit(): void {
    const API_KEY = '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';
    // Initialize the OpenAI API client

    // this.client = new openai(API_KEY);
    this.openai = new OpenAI(API_KEY);
    console.log(this.openai);
    // console.log(this.client);
  }

  // async function generateText1(prompt: string): Promise<string> {
  //   const completions = await openai.completions.create({
  //     engine: 'davinci',
  //     prompt,
  //     maxTokens: 100,
        // stop: ['\n'],
  //   });
  //   return completions.choices[0].text;
  // }
  
  // console.log(await generateText1('Hello, World!')); // Output: "Hello, World! How are you doing today?"
  

  async generateText(prompt: string): Promise<void> {
    // Send a request to the OpenAI API to generate text
    const result = await this.openai.complete({
      engine: 'davinci',
      prompt,
      maxTokens: 100,
      temperature: 0.7,
      // n: 1,
      stop: ['\n'],
    });
    // Set the generated text in the component variable
    console.log(result?.data?.choices[0]);

    this.generatedText = result?.data?.choices[0].text.trim() === ''? 'No Answer' : result?.data?.choices[0].text.trim();
  }
}
