import {BaseType} from "@/data/types/base.type";

export type User = BaseType & {
    name: string;
    bio: string;
    image?: string;
}

export type Profile = BaseType & {
    name: string;
    image?: string;
}
