import { Injectable } from "@nestjs/common";
import { NotifierInterface } from "./interfaces/notifier.interface";


@Injectable()
export class NotifierService implements NotifierInterface {
     notify(message: string): void {
        console.log(`Notification sent: ${message}`);
    }
  
}