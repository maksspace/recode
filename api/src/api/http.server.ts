import { IOServer } from "../io-server";

function OnEvent(name: string) {
  return (target: Object, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) => {
    const method = descriptor.value;
    if (method) {
      descriptor.value = function(...args: any[]) {
        console.time(propertyName || "LogTime");
        const result = method.apply(this, args);
        console.timeEnd(propertyName || "LogTime");
        return result;
      };
    }
  };
}

export class HttpServer extends IOServer {
  async s3SignFile() {
  }
}
