import CategoriesComponent from "../categories/categories.component"

import './directory.styles.scss'

const Directory = ({categories}) =>{
   

    return(
        <div className="directory-container">
      {categories.map((categories)=>(
        <CategoriesComponent key={categories.id} categories={categories} />
      ))}
      
    </div>
    )
    
}

export default Directory
