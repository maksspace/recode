export class IOServer {
  constructor(io: EvenEmitter) {
    io.on();
  }
}

interface EvenEmitter {
  on(): void;
}
