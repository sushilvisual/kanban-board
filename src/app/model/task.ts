
import { Memeber } from "./member";
import { Priority } from "./priority";

interface Task {
    name: string;
    id: number;
    startDate: Date|string;
    endDate?: Date;
    members: Memeber[],
    priority:Priority
}
export {Task}