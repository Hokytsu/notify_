 export  default interface NotifyData {
    type: "success" | "warning" | "denied" | "error";
    message: string;
    timeout: number;
    id:number
}