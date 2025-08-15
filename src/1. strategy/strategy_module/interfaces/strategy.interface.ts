export class StrategyOutputDTO {
  status: string;
  message: string;
}
export interface IStrategy {
    execute(data: any): StrategyOutputDTO;
}