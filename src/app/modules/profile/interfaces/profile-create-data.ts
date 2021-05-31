import { AppRole } from "src/app/model/app-role";

export interface ProfileCreateData {
    role: AppRole,
    email: string,
    firstName: string,
    lastName: string
}