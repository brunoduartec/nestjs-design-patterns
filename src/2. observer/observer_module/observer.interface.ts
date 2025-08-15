export enum EventType {
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
}

export enum ObserverStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  PENDING = 'pending',
}

export interface ObserverData {
  eventType: EventType;
  info: any;
}

export interface Observer {
  update(data: ObserverData): void;
}
