import {RemoteCursor} from "./RemoteCursor";
import {calcInvertedColor} from "../../../../utils/calcInvertedColor"

export class RemoteCursorWidget {
  private _cursor: RemoteCursor;
  private _editor: any;
  private _domNode: HTMLDivElement;
  private _position: any = null;
  private _selections: any[] = [];
  private _timeout: any | null = null;
  private _sTimeout: any | null = null;

  constructor(data: {
    cursor: RemoteCursor;
    editor: any;
  }) {
    this._cursor = data.cursor;
    this._editor = data.editor;
    this._domNode = document.createElement('div');
    this._domNode.style.background = this._cursor.color;
    this._domNode.className = 'code-editor_cursor';
    this._domNode.innerHTML = `
      <span class="code-editor_cursor_header" style="background: ${this._cursor.color}"></span>
      <span class="code-editor_cursor_tooltip" style="background: ${this.cursor.color}; color: ${calcInvertedColor(this.cursor.color)}">
        ${data.cursor.label}
      </span>
    `;
    this._editor.addContentWidget(this);
    this._editor.layoutContentWidget(this);
    this._domNode.addEventListener('mouseover', () => {
      this._registerOpacityTimeout();
      this._domNode.style.opacity = '1';
    })
  }

  get cursor(): RemoteCursor {
    return this._cursor;
  }

  getId(): string {
    return this._cursor.id;
  }

  getDomNode() {
    return this._domNode;
  }

  getPosition() {
    return this._position;
  }

  setPosition(pos: CursorPosition) {
    if (!this._positionChanged(pos)) {
      return;
    }
    this._registerOpacityTimeout();
    // this._domNode.style.opacity = '1';
    this._position = {
      position: {...pos},
      preference: [0]
    };
    this._editor.layoutContentWidget(this);
  }

  setSelection(range: any) {
    this._selections = this._editor.deltaDecorations(this._selections, [
      {
        range,
        options: {
          className: `.selection_bg_${this.cursor.id}`
        }
      }
    ]);
  }

  private _registerOpacityTimeout() {
    if (this._timeout) {
      clearTimeout(this._timeout);
    }
    this._timeout = setTimeout(() => {
      this._domNode.style.opacity = '0.2';
    }, 3000);
  }

  private _positionChanged(pos: any) {
    return (
      pos.column !== this._position?.position.column ||
      pos.lineNumber !== this._position?.position.lineNumber
    );
  }
}


export type CursorPosition = {
  lineNumber: number;
  column: number;
};
