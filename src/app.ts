import { Component } from "./components/component.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { Composable, PageComponent } from "./components/page/page.js";

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      "Image Title",
      "https://picsum.photos/600/300"
    );
    const video = new VideoComponent(
      "Video Title",
      "https://www.youtube.com/embed/xTY0SlyVfCQ"
    );
    const note = new NoteComponent("Note Title", "Note Body");
    const todo = new TodoComponent("Todo Title", "Todo Body");

    this.page.addChilds([image, video, note, todo]);
  }
}

new App(document.querySelector(".document")! as HTMLElement);
