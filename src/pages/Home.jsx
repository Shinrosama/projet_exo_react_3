import Footer from '../component/Footer';
import Header from '../component/Header';
import './Home.scss'


function Home(){

  //je place le tableau avant le return parce que que c'est du JS et pas du JSX que je veux faire

    const articles = [
        {
          title: "Article 1",
          price: 10,
          isPublished: true,
        },
    
        {
          title: "Article 2",
          price: 20,
          isPublished: false,
        },
    
        {
          title: "Article 3",
          price: 30,
          isPublished: true,
        },
    
        {
          title: "Article 4",
          price: 40,
          isPublished: false,
        },
    
        {
          title: "Article 5",
          price: 50,
          isPublished: true,
        },
    
        {
          title: "Article 6",
          price: 60,
          isPublished: false,
        },
    
        {
          title: "Article 7",
          price: 70,
          isPublished: true,
        },
    
        {
          title: "Article 8",
          price: 80,
          isPublished: false,
        },
    
        {
          title: "Article 9",
          price: 90,
          isPublished: true,
        },
    
        {
          title: "Article 10",
          price: 100,
          isPublished: false,
        },
      ];

      //je cherche a récupérer les articles publiés

      const publishedArticles = articles.filter ((article) => 
      {return (article.isPublished === true)
      });

      // je cherche a récupérer les 3 derniers articles publiés (parmi la liste obtenue au dessu)
      
        const lastPublishedArticles = publishedArticles.slice (-3)
  
        
      return(
        <>
          <Header/>
          <main className='maincontainer'>
                {lastPublishedArticles.map((article) =>{
                  return(
                    <article className='articletext'>
                      <h2>{article.title}</h2>
                      <p>{article.price}</p>
                    </article>
                  )
                })}
          </main>
          <Footer/>
          </>
      );
}
export default Home;