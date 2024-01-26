import Style from './SearchBar.module.css'

function SearchBar() {
  return (
    <div>
        <div className={Style.search_bar}>
            <div className={Style.search_bar_box}>
                <div className={Style.search_bar_text}>
                    <input type="search" className={Style.s_bar} placeholder='Search' />
                    <button className={Style.search_button}> Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBar