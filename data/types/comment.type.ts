import { BaseType } from '@/data/types/base.type';

export type Comment = BaseType & {
    name: string;
    description: string;
    author?: number;
};
