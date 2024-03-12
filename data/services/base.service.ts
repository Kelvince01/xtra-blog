import { createClient } from '@/utils/supabase/client';

export class BaseService<T> {
    protected tableName: string;
    readonly supabase = createClient();

    constructor(tableName: string) {
        this.tableName = tableName;
    }

    async getAll(): Promise<T[]> {
        const { data, error } = await this.supabase.from(this.tableName).select('*');

        if (error) {
            throw error;
        }

        return data;
    }

    async get(id: string): Promise<T | null> {
        const { data, error } = await this.supabase.from(this.tableName).select('*').eq('id', id);

        if (error) {
            throw error;
        }

        return data.length > 0 ? data[0] : null;
    }

    async create(data: Partial<T>): Promise<T> {
        const { data: createdData, error } = await this.supabase.from(this.tableName).insert([data]);

        if (error) {
            throw new Error(error.message);
        }

        return createdData![0];
    }

    async update(id: string, data: Partial<T>): Promise<T | null> {
        const { data: updatedData, error } = await this.supabase.from(this.tableName).update(data).eq('id', id);

        if (error) {
            throw error;
        }

        return (updatedData as any).length! > 0 ? updatedData![0] : null;
    }

    async delete(id: string): Promise<void> {
        const { error } = await this.supabase.from(this.tableName).delete().eq('id', id);

        if (error) {
            throw error;
        }
    }
}
