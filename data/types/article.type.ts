import { BaseType } from '@/data/types/base.type';

export type Article = BaseType & {
    title: string;
    slug: string;
    description: string;
    image?: string;
    tags?: string[];
    content: string;
    category: number | number[] | string;
};
