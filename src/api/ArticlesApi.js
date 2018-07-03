class ArticlesApi {
    static getAllArticles() {
      return fetch('http://localhost:5000/api/v1/articles').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
    static createArticle(article) {
        return fetch('http://localhost:5000/api/v1/articles').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static removeArticle(article) {
        return fetch(`http://localhost:5000/api/v1/articles/${article.id}`).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

}

export default ArticlesApi;
