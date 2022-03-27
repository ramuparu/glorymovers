import './categories.styles.scss'

const CategoriesComponent = ({categories}) =>{
     
    const {imageUrl,title} = categories

   return(
    <div  className="category-container">
        <div className='background-image' style={{
          backgroundImage : `url(${imageUrl})`
        }} />
          <div className="category-body-container">
             <h2>{title}</h2>
             <p>Shop now</p>
          </div>
        </div>
   )
}

export default CategoriesComponent