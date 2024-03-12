import { BaseType } from '@/data/types/base.type';

export type Category = BaseType & {
    slug: string;
    title: string;
    description: string;
    image?: string;
    tags?: string[];
};
