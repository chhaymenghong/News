// Expected json result to have all these properties
interface ArticleJson {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

// Model class
export class Article {
  public author: string;
  public title: string;
  public description: string;
  public url: string;
  public urlToImage: string;
  public publishedAt: string;

  public fromJson( json: ArticleJson ) {
    var article = Object.create( Article.prototype );
    Object.assign( article, json );
    return article;
  }
}
