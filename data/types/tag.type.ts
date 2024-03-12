import { BaseType } from '@/data/types/base.type';

export type Tag = BaseType & {
    slug: string;
    title: string;
    description: string;
    image?: string;
};
