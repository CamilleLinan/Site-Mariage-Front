import NewArticleForm from "./NewArticleForm"

const NewArticlePage = ({ propIsAdmin }) => {
    return (
        <section className="new_article">
            <header className="new_article_header">
                <h2 className="new_article_header_title">Ajouter un nouvel article</h2>
            </header> 
            {propIsAdmin === true ?
                <NewArticleForm propIsAdmin={propIsAdmin} />
            :
                <p>Seul l'administrateur de ce site peut poster un article.</p>
            }
        </section>
    )
}

export default NewArticlePage