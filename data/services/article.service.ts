import { BaseService } from '@/data/services/base.service';
import { Article } from '@/data/types/article.type';

class ArticleService extends BaseService<Article> {
    constructor() {
        super('articles'); // Replace with your actual table name
    }
}

export default new ArticleService();
